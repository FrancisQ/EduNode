import './App.css';
import React, { useState } from 'react'

//Sub - COMPONENTS
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const StatisticsLine = ({ reviewText, number }) => <tr><td>{reviewText}</td><td>{number}</td></tr>
const Statistics = ({ good, neutral, bad }) => {

  //CALCS
  let total = good + neutral + bad
  let avg = good - bad
  const calcPercent = () => {
    if (total === 0)
      return 0
    return good / total
  }

  let percent = calcPercent() + "%"

  if (total === 0) {
    return <p>No Feedback Given</p>
  } else {
    return (
      <table>
        <tbody>
          <StatisticsLine reviewText="Good" number={good}></StatisticsLine>
          <StatisticsLine reviewText="Neutral" number={neutral}></StatisticsLine>
          <StatisticsLine reviewText="Bad" number={bad}></StatisticsLine>
          <StatisticsLine reviewText="All" number={total}></StatisticsLine>
          <StatisticsLine reviewText="Average" number={avg}></StatisticsLine>
          <StatisticsLine reviewText="Positive" number={percent}></StatisticsLine>
        </tbody>
      </ table >
    )
  }
}
const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const handler = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    console.log(selected)
  }


  // Refresh state resets clicked to false???

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={handler}>Generate a Random Quote</button>
    </div>
  )

}


const App = () => {
  //STATES
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div className="wrapper">
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="Good"></Button>
      <Button handleClick={handleNeutral} text="Neutral"></Button>
      <Button handleClick={handleBad} text="Bad"></Button>
      <br />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>

      <h1>Anecdotes</h1>
      <Anecdotes></Anecdotes>
    </div>

  )
}

export default App;
