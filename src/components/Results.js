import React from 'react'

const Results = ({ results }) => (
    <ul>
        {results.map(person => (
            <li key={person.id} >Name: {person.name} - Phone: {person.number}</li>
        ))}
    </ul>
)
export default Results