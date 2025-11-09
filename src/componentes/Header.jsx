import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, NavLink } from 'react-router-dom'


const Header = () => {
  const cantidad = useSelector(state => state.tareas.listaTareas.length)
  return (
    <div className="menu">
      <h2>Tareas ({cantidad})</h2>
          <Outlet />
    </div>
  )
}

export default Header