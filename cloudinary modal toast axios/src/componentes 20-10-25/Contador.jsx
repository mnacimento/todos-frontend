import { useState, useEffect } from "react"

const Contador = () => {


  const [cuenta, setCuenta] = useState(0);
  const [cuenta2, setCuenta2] = useState(0);


  // useEffect(() => {

  // })
  


  //La tercera version dispara el efecto segun los estados definidos en el array de dependencias
  useEffect(() => {
    document.title = `Cuenta ${cuenta2}`
  }, [cuenta2])


  // La segunda version donde mi efecto se dispara solmanente cuando se renderiza por primera vez mi componente
  // useEffect(() => {
  //   document.title= `Cuenta ${cuenta}`
  // },[])


  // El formato por defecto dispara la funcion definida sin importar el cambio de mi componente
  // useEffect(() => {
  //   document.title= `Cuenta ${cuenta}`
  // })

  // let cuenta = 0;

  const contar = () => {
    // console.log("click");
    setCuenta(cuenta + 1)
  }


  return (
    <div>
      <input type="button" value="Presionar" onClick={contar} /><br />
      <h2>{cuenta}</h2>
      <input type="button" value="Presionar 2" onClick={() => setCuenta2(cuenta2 + 2)} />

    </div>
  )
}

export default Contador



//----------------------------------------------------------------------------------------------------------
















// import { useState } from "react"

// const Contador = () => {


//     const [cuenta, setCuenta] = useState(0);

//     // let cuenta = 0;

//     const contar = () => {
//         // console.log("click");
//         setCuenta(cuenta + 1)
//     }


//   return (
//     <div>
//         <input type="button" value="Presionar" onClick={contar}/><br />
//         <h2>{cuenta}</h2>
//         <input type="button" value="Presionar 2" onClick={() => console.log("click2")}/>

//     </div>
//   )
// }

// export default Contador


//----------------------------------------------------------------------------------------------------------


// const Contador = () => {


//     const contar = () => {
//         console.log("click");
//     }


//   return (
//     <div>
//         <input type="button" value="Presionar" onClick={contar}/><br />
//         <input type="button" value="Presionar 2" onClick={() => console.log("click2")}/>

//     </div>
//   )
// }

// export default Contador