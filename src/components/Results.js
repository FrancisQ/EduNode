import React from 'react'

const Results = ({ results, handleDelete }) => {


    return (
        <ul>
            {results.map(person => (
                <li key={person.id} >
                    Name: {person.name} - Phone: {person.number}
                    <button onClick={() => handleDelete(person)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}
export default Results