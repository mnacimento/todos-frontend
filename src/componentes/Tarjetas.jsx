import React, { useEffect } from 'react';
import Tarjeta from './Tarjeta';
import { useDispatch, useSelector } from 'react-redux';
import { cargarTareas } from '../store/slices/tareasSlice';
import { apiClient } from '../utils/axios';
import toast from 'react-hot-toast';

const Tarjetas = () => {
  const dispatch = useDispatch();
  const tareas = useSelector(state => state.tareas.listaTareas);

  useEffect(() => {
    const obtenerTareas = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        toast.error('No se encontró el token. Iniciá sesión primero.');
        return;
      }

      try {
        const respuesta = await apiClient.get('https://todos-five-peach.vercel.app/v1/todos', {
          headers: {
            Authorization: token, // el token se manda como en tu captura
          },
        });

        console.log('Tareas obtenidas:', respuesta.data);
        dispatch(cargarTareas(respuesta.data));
        toast.success('Tareas cargadas exitosamente');
      } catch (error) {
        console.error('Error al obtener tareas:', error);
        toast.error('No se pudieron cargar las tareas');
      }
    };

    obtenerTareas();
  }, [dispatch]);

  return (
    <div className="tarjetas">
      {tareas.map(t => (
        <Tarjeta key={t.id} {...t} />
      ))}
    </div>
  );
};

export default Tarjetas;
