import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiClient } from '../utils/axios';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useRef(null);
  const pass = useRef(null);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const ingresar = async () => {
    const campoUser = user.current?.value.trim();
    const campoPass = pass.current?.value.trim();
    setError(false);

    if (!campoUser || !campoPass) {
      setError(true);
      toast.error('Por favor completá usuario y contraseña');
      return;
    }

    try {
      setLoading(true);
      const body = { username: campoUser, password: campoPass };
      const respuesta = await apiClient.post('/v1/auth/login', body);

      localStorage.setItem('token', respuesta.data.token);
      toast.success('Inicio de sesión exitoso');
      navigate('/lista');
    } catch (e) {
      console.error('Error al iniciar sesión:', e);
      setError(true);
      toast.error('Credenciales incorrectas o error del servidor');
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') ingresar();
  };

  return (
    <div className="auth">
      <div className="auth-card">
        <h1 className="auth-title">Ingresá a tu cuenta</h1>

        <div className="form-row">
          <label htmlFor="txtUser">Usuario</label>
          <input
            id="txtUser"
            type="text"
            ref={user}
            placeholder="tu_usuario"
            onKeyDown={onKeyDown}
            autoComplete="username"
          />
        </div>

        <div className="form-row">
          <label htmlFor="txtPass">Contraseña</label>
          <input
            id="txtPass"
            type="password"
            ref={pass}
            placeholder="••••••••"
            onKeyDown={onKeyDown}
            autoComplete="current-password"
          />
        </div>

        {error && (
          <p className="form-error">Error en las credenciales. Probá de nuevo.</p>
        )}

        <div className="auth-actions">
          <button
            className="btn btn-primary"
            onClick={ingresar}
            disabled={loading}
          >
            {loading ? 'Ingresando…' : 'Ingresar'}
          </button>

          <Link to="/clima" className="link-ghost">
            Ir a Clima
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
