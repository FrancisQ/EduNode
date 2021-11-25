import React from 'react'

const Content = ({ parts }) => {
    // let total = 0
    const totalExercises = parts.reduce((total, part) => {
        console.log('total', total)
        return total + part.exercises

    }, 0)

    return (
        <div>
            {parts.map(part => (
                <p key={part.id}>{part.name} - {part.exercises}</p>
            ))
            }
            <p className='bold'> This course has {totalExercises} exercises</p>

        </div >
    )
}

export default Content