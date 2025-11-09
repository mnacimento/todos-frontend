import React from 'react'
import { useRef } from 'react';
import { crearTarea } from '../store/slices/tareasSlice';
import { useDispatch } from 'react-redux';

const Agregar = () => {

    const campo = useRef(null);
    const dispatch = useDispatch();

    const tomarTarea = () => {
        let objTarea = {
            userId: 1,
            title: campo.current.value,
            completed: false
        }
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: 'POST',
            body:JSON.stringify(objTarea),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(r => r.json())
        .then(datos => dispatch(crearTarea(datos))
        )
    }


  return (
      <div className="agregar">
        <label htmlFor="txtAgregar">Agregar:</label>
        <input type="text" name="txtAgregar" id="txtAgregar" ref={campo}/>
        <input type="button" value="Agregar" onClick={tomarTarea}/>
      </div>
  )
}

export default Agregar