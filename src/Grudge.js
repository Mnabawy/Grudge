import React from 'react';

const Grudge = ({ grudge, onForgive }) => {
    console.log(grudge)
    const forgive = () => onForgive(grudge.id);

    return (
        <article className="Grudge">
            <h3>{grudge.person}</h3>
            <p>{grudge.reason}</p>
            <div className="Grudge-controls">
                <labe className="Grudge-forgiven">
                    <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '} Forgiven
                </labe>
            </div>
        </article> 
    )
}

export default Grudge;