import React, { useState } from 'react';

const NewGrudge = ({ onSubmit }) => {
    const [person, setPerson] = useState('');
    const [reason, setReason] = useState('');

    const handleChange = event => {
        event.preventDefault();
        onSubmit({ person, reason })
    }

    return (
        <form className="NewGrudge" onSubmit={handleChange}>
            <input
                className="NewGrudge-input"
                placeholder="person"
                type="text"
                value={person}
                onChange={event => setPerson(event.target.value)}
            />

            <input
                className="NewGrudge-input"
                placeholder="reason"
                type="text"
                value={reason}
                onChange={event => setReason(event.target.value)}
            />
            <input className="NewGrudge-submit button" type="text" s />
        </form>
    )
}

export default NewGrudge;