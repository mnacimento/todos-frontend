import React from 'react'
import { Link, Outlet, NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            {/* <Link to="/">Ir al Inicio</Link> | <Link to="/clima">Ir al Clima</Link>
        <NavLink to="/">Ir al Inicio</NavLink> | <NavLink to="/clima">Ir al Clima</NavLink>
        <hr /><br />
        <Outlet/> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/dashboard">Menu</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink to="/">Ir al inicio</NavLink> | <NavLink to="/clima">Ir a clima</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <br /><br /><br />
            <Outlet />
        </div>
    )
}

export default Menu