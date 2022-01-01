import './App.css'
import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Results from './components/Results'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Your name?')
  const [newPhone, setNewPhone] = useState('Your number?')
  const [newSearch, setNewSearch] = useState('Search')
  const [newResult, setNewResult] = useState([])
  const [notificationMsg, setNotificationMsg] = useState(null);
  const [errorStyle, setErrorStyle] = useState(true);

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
    const nameExists = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())

    if (nameExists !== undefined) {
      if (window.confirm(`Name ${newName} already exists, would you like to update their number?`)) {

        const updatedPersonObject = {
          name: newName,
          number: newPhone,
        }

        personService
          .update(nameExists.id, updatedPersonObject)
          .then(response => {
            console.log('fire')
            setPersons(persons.map(person => person.id !== response.id ? person : response))
            setNewResult(newResult.map(person => person.id !== response.id ? person : response))
          })
      }
    } else {
      //Create new contact
      const newPersonObject = {
        name: newName,
        number: newPhone,
      }

      personService
        .create(newPersonObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewResult(newResult.concat(returnedPerson))
          setNotificationMsg(`Note '${returnedPerson.name}' was successfully added`)
          setErrorStyle(false)
          setTimeout(() => {
            setNotificationMsg(null)
          }, 5000)
        })
        .catch(error => {
          setNotificationMsg(`An error occured adding '${newPersonObject.name}'`)
          setErrorStyle(true)
          setTimeout(() => {
            setNotificationMsg(null)
          }, 5000)
        }
        )
    }
    setNewName('')
    setNewPhone('')
  }

  //Search input onChange
  const searchResults = (event) => {
    setNewSearch(event.target.value)
    const query = event.target.value.toLowerCase()

    let tempResults = persons.filter(person => {
      return (person.name.toLowerCase().includes(query) || person.number.includes(query))
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
  //Delete Button handler
  const deleteContact = (person) => {
    //confirm
    if (window.confirm(`Are you sure you want to delete ${person.name}`)) {
      //delete from backend
      personService
        .remove(person.id)
        .then(confirmation => {
          setPersons(persons.filter(listItem => listItem.id !== person.id))
          setNewResult(persons.filter(listItem => listItem.id !== person.id))
          setNotificationMsg(`Note '${person.name}' was removed from server`)
          setErrorStyle(false)
          setTimeout(() => {
            setNotificationMsg(null)
          }, 5000)
        })
        .catch(error => {
          setNotificationMsg(`Note '${person.name}' was already removed from server`)
          setErrorStyle(true)
          setTimeout(() => {
            setNotificationMsg(null)
          }, 5000)
          setPersons(persons.filter(listItem => listItem.id !== person.id))
          setNewResult(newResult.filter(listItem => listItem.id !== person.id))
        })

    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMsg} style={errorStyle} />
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
      <Results results={newResult} handleDelete={deleteContact}></Results>
    </div >
  )
}

export default App
