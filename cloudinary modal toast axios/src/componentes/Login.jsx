import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const user = useRef(null);
    const pass = useRef(null);

    useEffect(() => {
        localStorage.clear();
    }, [])
    

    const ingresar = () => {
        let campoUser = user.current.value;
        let campoPass = pass.current.value;
        if(campoUser === "a" && campoPass === "a"){
            // console.log('OK');
            localStorage.setItem("usuario", campoUser)
            navigate("/clima")
        }else{
            // console.log('Error');
            setError(true);
        }
    }


  return (
    <div>
        <label htmlFor="txtUser">Usuario:</label>
        <input type="text"  id='txtUser' ref={user}/><br />

        <label htmlFor="txtPass">Password:</label>
        <input type="text"  id='txtPass' ref={pass}/><br />

        <input type="button" value="Ingresar" onClick={ingresar}/><br />
        <Link to="/clima">Ir a Clima</Link>

        {/* {error ? <p>Error en las credenciales</p> : <p>OK</p>}  */}

        {/* {error ? <p>Error en las credenciales</p> : null}  */}
        {error && <p>Error en las credenciales</p>}
    </div>
  )
}

export default Login