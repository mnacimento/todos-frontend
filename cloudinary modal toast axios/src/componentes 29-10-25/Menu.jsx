import React from 'react'
import { useSelector } from 'react-redux'

const Menu = () => {
  const cantidad = useSelector(state => state.tareas.listaTareas.length)
  return (
    <div className="menu">
      <h2>Tareas ({cantidad})</h2>
    </div>
  )
}

export default Menu