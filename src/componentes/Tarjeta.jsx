import React from 'react'

const Tarjeta = ({title, completed, id}) => {
    return (
        <div className="tarjeta">
            <input type="checkbox" id={`list${id}`} className="checkbox" defaultChecked={completed}/>
            <label className="checkLabel" htmlFor={`list${id}`}>{title}</label>
        </div>
    )
}

export default Tarjeta