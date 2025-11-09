import React, { useEffect, useState } from 'react'
import { apiClient } from '../utils/axios'
import toast from "react-hot-toast"

const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const obtenerTareas = async () => {
            setCargando(true);
            try {
                const respuesta = await apiClient.get("/todos", {
                    params: {_limit: 20},
                })
                console.log(respuesta);
                
                setTareas(respuesta.data);
                toast.success("Tareas cargadas exitosamente");
            } catch (error) {
                console.error("Error al cargar las tareas", error);
                toast.error("No se pudieron cargar las tareas");
            } finally{
                setCargando(false);
            }
        }
        obtenerTareas();
    }, [])
    

if (cargando) return <p>Cargando Tareas...</p>

  return (
    <div style={{padding: "16px"}}>
        <h2>Ultimas 20 tareas</h2>
        <ul>
            {tareas.map((tarea) => (
                <li key={tarea.id}>
                    #{tarea.id} - {tarea.title} {tarea.completed ? "READY" : "TO DO"}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ListaDeTareas