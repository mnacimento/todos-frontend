import React from 'react'

const Persona = ({nombre, apellido, foto}) => {
  return (
    <p>
        <img src={foto} alt={`Foto de ${nombre} ${apellido}`} />{nombre} {apellido}
    </p>
  )
}

export default Persona