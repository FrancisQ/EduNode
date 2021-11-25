import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('What\'s you name?')

  const addName = (event) => {
    event.preventDefault()
    console.log("button Clicked!", event.target)
    const newPersonObject = {
      name: newName
    }
    setPersons(persons.concat(newPersonObject))
    setNewName('')
  }
  const updateName = (event) => {
    setNewName(event.target.value)
    console.log(newName)
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={updateName} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form >
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => <li key={person.name} >{person.name}</li>)}
      </ul>

    </div >
  )
}

export default App
