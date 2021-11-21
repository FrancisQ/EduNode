import './App.css';
import React, { useState } from 'react'

//Sub - COMPONENTS
const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>
const Stat = ({ reviewText, number }) => <p>{reviewText}: {number}</p>
const StatWrapper = ({ good, neutral, bad }) => {

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
      <>
        <Stat reviewText="Good" number={good}></Stat>
        <Stat reviewText="Neutral" number={neutral}></Stat>
        <Stat reviewText="Bad" number={bad}></Stat>
        <br />
        <Stat reviewText="All" number={total}></Stat>
        <Stat reviewText="Average" number={avg}></Stat>
        <Stat reviewText="Positive" number={percent}></Stat>
      </>
    )
  }
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
      <StatWrapper good={good} neutral={neutral} bad={bad}></StatWrapper>
    </div>

  )
}

export default App;
