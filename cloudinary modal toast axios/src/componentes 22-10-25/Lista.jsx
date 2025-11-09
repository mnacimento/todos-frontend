import {  useRef, useState } from "react"
import Persona from "./Persona"

const Lista = () => {

    const [personas, setPersonas] = useState([])
    // const [largo, setLargo] = useState([])
    const campo = useRef(null);

    // useEffect(() => {
    //     fetch("https://randomuser.me/api/?results=20")
    //     .then(r => r.json())
    //     .then(datos => setPersonas(datos.results)
    //     )
    // }, [])

    const buscarPersonas = () =>{
        console.log(campo);
        
        fetch(`https://randomuser.me/api/?results=${campo.current.value}`)
        .then(r => r.json())
        .then(datos => setPersonas(datos.results)
        )
    }
    


  return (
    <div>
        <h2>Lista de usuarios</h2>

        <label>
            Cantidad:
            <input type="number" ref={campo}/>
        </label>

        <input type="button" value="Buscar" onClick={buscarPersonas}/>

        {/* {personas.map(persona => <p key={persona.login.username}>{persona.name.first} {persona.name.last}</p>)} */}

        {personas.map(persona => <Persona key={persona.login.username} nombre={persona.name.first} apellido={persona.name.last} foto={persona.picture.thumbnail}/>)}

    </div>
  )
}

export default Lista


















//------------------------------------------------------------------------------------------------------------

// import { useEffect, useState } from "react"
// import Persona from "./Persona"

// const Lista = () => {

//     const [personas, setPersonas] = useState([])

//     useEffect(() => {
//         fetch("https://randomuser.me/api/?results=20")
//         .then(r => r.json())
//         .then(datos => setPersonas(datos.results)
//         )
//     }, [])
    


//   return (
//     <div>
//         <h2>Lista de usuarios</h2>

//         {/* {personas.map(persona => <p key={persona.login.username}>{persona.name.first} {persona.name.last}</p>)} */}

//         {personas.map(persona => <Persona key={persona.login.username} nombre={persona.name.first} apellido={persona.name.last} foto={persona.picture.thumbnail}/>)}

//     </div>
//   )
// }

// export default Lista