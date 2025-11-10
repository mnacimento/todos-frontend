import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/'); // vuelve al login
  };

  // Si no hay token, no mostrar el menú (solo renderizar rutas internas)
  if (!token) {
    return <Outlet />;
  }

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold text-light" to="/">
            🗂️ Menú
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/clima">Clima</NavLink>
              <NavLink className="nav-link" to="/persona">Formulario Persona</NavLink>
              <NavLink className="nav-link" to="/ejemplo">Componente Ejemplo</NavLink>
              <NavLink className="nav-link" to="/traduccion">Traducción</NavLink>
              <NavLink className="nav-link" to="/tareas">Tareas</NavLink>
              <NavLink className="nav-link" to="/tareasModal">Tareas Modal</NavLink>
              <NavLink className="nav-link" to="/lista">Lista</NavLink>
              <NavLink className="nav-link" to="/imageUploader">Subir Imagen</NavLink>
            </div>

            {/* Botón de logout a la derecha */}
            <div className="d-flex">
              <button
                onClick={handleLogout}
                className="btn btn-outline-light ms-3"
                style={{ fontWeight: '600', backgroundColor: '#dc3535' }}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default Menu;
