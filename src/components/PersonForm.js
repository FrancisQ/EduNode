
import React from 'react'

const PersonForm = ({ handleSubmit, name, phone, handleNameChange, handlePhoneChange }) => (
    <form onSubmit={handleSubmit}>
        <div>
            name: <input value={name} onChange={handleNameChange} />
            <br />
            Phone: <input value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
            <button type="submit" >add</button>
        </div>
    </form >
)

export default PersonForm
