import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      {persons.map(person =>
        <p key={person.id}>Name: {person.name} - Phone: {person.number}</p>
      )}
    </div >
  )
}

export default App
