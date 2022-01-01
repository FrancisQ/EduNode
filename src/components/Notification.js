import React from "react"

const Notification = ({ message, style }) => {

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    }
    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    }

    if (message === null) {
        return null
    }

    return (
        <div style={style ? errorStyle : successStyle}>
            {message}
        </div>
    )
}

export default Notification