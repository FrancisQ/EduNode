import './App.css';

const Header = (props) => (
  <h1>{props.course}</h1>
)

const Content = (props) => (
  <div>
    <Part part={props.parts.part1} exercise={props.exercises.x1} />
    <Part part={props.parts.part2} exercise={props.exercises.x2} />
    <Part part={props.parts.part3} exercise={props.exercises.x3} />
  </div >
)
const Part = (props) => (
  <p>{props.part} has {props.exercise} exercises</p>
)

const Total = (props) => (
  <p>Number of exercises {props.exercises.x1 + props.exercises.x2 + props.exercises.x3}</p>
)
const App = () => {
  const course = 'Half Stack application development'
  const parts = {
    part1: "Fundamentals of React",
    part2: "Using props to pass data",
    part3: "State of a component"
  }
  const exercises = {
    x1: 10,
    x2: 7,
    x3: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />

    </div>
  )
}

export default App;
