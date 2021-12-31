import './App.css'
import React, { useState, useEffect } from 'react'

import Search from './components/Search'
import Results from './components/Results'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Your name?')
  const [newPhone, setNewPhone] = useState('Your number?')
  const [newSearch, setNewSearch] = useState('Search')
  const [newResult, setNewResult] = useState([])

  //get list of names from backend
  useEffect(() => {
    personService
      .getAll()
      .then(initialList => {
        setPersons(initialList)
        setNewResult(initialList)
      })
  }, [])

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
        number: newPhone,
        id: persons.length + 1
      }

      personService
        .create(newPersonObject)
        .then(returnedPerson => {
          console.log(returnedPerson)
          setPersons(persons.concat(returnedPerson))
        })


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
      <Search
        value={newSearch}
        handleChange={searchResults}> </Search>
      <h2>Add New</h2>
      <PersonForm
        handleNameChange={updateName}
        handlePhoneChange={updatePhone}
        name={newName} phone={newPhone}
        handleSubmit={addPerson}></PersonForm>
      <h2>Numbers</h2>
      <Results results={newResult}></Results>
    </div >
  )
}

export default App
