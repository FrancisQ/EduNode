import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      phone: '7781231234'
    }
  ])
  const [newName, setNewName] = useState('Your name?')
  const [newPhone, setNewPhone] = useState('Your number?')

  const addPerson = (event) => {
    event.preventDefault()
    const nameExists = persons.find(person => person.name === newName)
    const phoneExists = persons.find(person => person.phone === newPhone)

    if (nameExists !== undefined) {
      alert(`Name ${newName} Already Exists, try another`)
    } else if (phoneExists !== undefined) {
      alert(`Phone ${newPhone} has already been assigned`)
    } else {
      const newPersonObject = {
        name: newName,
        phone: newPhone
      }
      setPersons(persons.concat(newPersonObject))
    }

    setNewName('')
    setNewPhone('')
  }

  const updateName = (event) => {
    setNewName(event.target.value)
    console.log(newName)
  }
  const updatePhone = (event) => {
    setNewPhone(event.target.value)
    console.log(newPhone)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={updateName} />
          <br />
          Phone: <input value={newPhone} onChange={updatePhone} />
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form >
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <li key={person.name} >{person.name} - {person.phone}</li>
        )
        )}
      </ul>

    </div >
  )
}

export default App
