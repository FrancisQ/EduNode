import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('Your name?')
  const [newPhone, setNewPhone] = useState('Your number?')
  const [newSearch, setNewSearch] = useState('Search')
  const [newResult, setNewResult] = useState(persons)

  //Submit Button onSubmit - add person object and clear fields
  const addPerson = (event) => {
    event.preventDefault()
    const nameExists = persons.find(person => person.name === newName)
    const phoneExists = persons.find(person => person.number === newPhone)

    if (nameExists !== undefined) {
      alert(`Name ${newName} Already Exists, try another`)
    } else if (phoneExists !== undefined) {
      alert(`Phone ${newPhone} has already been assigned`)
    } else {
      const newPersonObject = {
        name: newName,
        phone: newPhone,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPersonObject))
    }
    setNewName('')
    setNewPhone('')
  }
  //Search input onChange
  const searchResults = (event) => {
    setNewSearch(event.target.value)
    const query = event.target.value.toLowerCase()
    let tempResults = persons.filter(person => {
      if (person.name.toLowerCase().includes(query) || person.number.includes(query))
        return person
    })
    setNewResult(tempResults)
  }
  //Name input onChange
  const updateName = (event) => {
    setNewName(event.target.value)
  }
  //Phone input onChange
  const updatePhone = (event) => {
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <input value={newSearch} onChange={searchResults} />
      <p>{searchResults}</p>
      <h2>Add New</h2>
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
        {newResult.map(person => (
          <li key={person.id} >Name: {person.name} - Phone: {person.number}</li>
        )
        )}
      </ul>

    </div >
  )
}

export default App
