import './App.css';
import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text='plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreaseByOne}
        text='minus'
      />
    </div>
  )
}

const Display = ({ counter }) => <h1>{counter}</h1>
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)


// Section 1.3 - 1.5 commented below for simplicity
/* 
const Header = (props) => (
  <h1>{props.course.name}</h1>
)
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10
      },
      {
        name: "Using props to pass data",
        exercise: 7
      },
      {
        name: "State of a component",
        exercise: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}



const Content = (props) => (
  <div>
    <Part name={props.parts[0].name} exercise={props.parts[0].exercise} />
    <Part name={props.parts[1].name} exercise={props.parts[1].exercise} />
    <Part name={props.parts[2].name} exercise={props.parts[2].exercise} />
  </div >
)

const Part = (props) => (
  <p>{props.name} - {props.exercise} exercises</p>
)

const Total = (props) => {

  let total = 0
  props.parts.forEach(element => {
    total += element.exercise
  });

  return (
    <p> Total number of exercises {total} </p>
  )

}
*/

export default App;
