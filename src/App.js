import './App.css';
import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Stat = ({ reviewText, number }) => {
  return <p>{reviewText} {number}</p>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  const getCount = (reviewType) => reviewType

  console.log({ good })
  return (
    <div className="wrapper">
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="Good"></Button>
      <Button handleClick={handleNeutral} text="Neutral"></Button>
      <Button handleClick={handleBad} text="Bad"></Button>
      <br />

      <h1>Statistics</h1>
      <Stat reviewText="Good" number={getCount(good)}></Stat>
      <Stat reviewText="Neutral" number={getCount(neutral)}></Stat>
      <Stat reviewText="Bad" number={getCount(bad)}></Stat>
    </div>

  )
}

export default App;
