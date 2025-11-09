import Tarjeta from './Tarjeta'
import { useDispatch, useSelector } from 'react-redux' 
import { useEffect } from 'react'
import { cargarTareas } from '../store/slices/tareasSlice' 

const Tarjetas = () => {

  const dispatch = useDispatch();
  const tareas = useSelector(state => state.tareas.listaTareas)

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
            .then(r => r.json())
            .then(datos => dispatch(cargarTareas(datos)))
    }, [])


  return (
      <div className="tarjetas">
        {tareas.map(t => <Tarjeta key={t.id} {...t}/>)}
      </div>
  )
}

export default Tarjetas