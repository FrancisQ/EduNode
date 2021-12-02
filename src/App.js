import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('Search')
  const [shortlist, setShortlist] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setResults(response.data)
      })
  }, [])

  const searchHandler = (event) => {
    const query = event.target.value.toLowerCase()
    setSearch(query)

    const temp = results.filter(result => {
      if (result.name.common.toLowerCase().includes(query))
        return result
    })

    setShortlist(temp)
    console.log("shortlist", shortlist)
  }

  return (
    < div class="wrapper" >
      <input value={search} onChange={searchHandler} />
      <Results length={shortlist.length} results={shortlist} search={search} handleShow={searchHandler}></Results>

    </div >
  )
}

const Results = ({ length, results, search, handleShow }) => {




  if (search === 'Search' || search === '')
    return <p>Use search to find country</p>
  else if (length > 10)
    return <p>Too many results, be more specific</p>
  else if (length === 1) {
    let country = results[0]
    return (
      < div >
        <h1> {country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([key, value]) => <li key={key}>{value}</li>)}
        </ul>
        <img alt="flag" src={country.flags.png} height="100px" />
      </div >
    )
  } else if (length > 0) {
    return (
      <ul>
        {results.map(country => (
          <li key={country.tld}>{country.name.common} <button value={country.name.common} onClick={handleShow}>Show</button></li>
        ))}
      </ul>
    )
  } else
    return <p>Nothing Found, try again</p>
}

export default App
