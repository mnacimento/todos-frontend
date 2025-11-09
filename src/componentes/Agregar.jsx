import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { crearTarea } from '../store/slices/tareasSlice';
import { apiClient } from '../utils/axios';
import toast from 'react-hot-toast';

const Agregar = () => {
  const campo = useRef(null);
  const dispatch = useDispatch();

  const tomarTarea = async () => {
    const titulo = campo.current?.value.trim();
    if (!titulo) {
      toast.error('Por favor ingresá una tarea');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('No hay token. Iniciá sesión nuevamente.');
      return;
    }

    try {
      // 1) Hacemos el POST (la API solo devuelve { message })
      const body = { title: titulo };
      const resp = await apiClient.post('/v1/todos', body, {
        headers: { Authorization: token },
      });

      // 2) Construimos el objeto que espera el store (fallback si la API no trae la tarea)
      const data = resp?.data || {};
      const tareaParaStore = {
        id: data.id ?? Date.now(),            // id temporal si no viene del back
        title: data.title ?? titulo,          // usamos el título ingresado si no viene
        completed: data.completed ?? false,   // default
        // userId: data.userId ?? 1,          // descomentá si tu slice usa userId
      };

      // 3) Enviamos al store la tarea utilizable por la UI
      dispatch(crearTarea(tareaParaStore));

      // 4) Feedback + limpiar input
      toast.success(data.message || 'Tarea creada correctamente');
      if (campo.current) campo.current.value = '';
    } catch (error) {
      console.error('Error al crear tarea:', error);
      toast.error('No se pudo agregar la tarea');
    }
  };

  return (
    <div className="agregar">
      <label htmlFor="txtAgregar">Agregar:</label>
      <input
        type="text"
        id="txtAgregar"
        ref={campo}
        placeholder="Escribí una tarea..."
      />
      <input type="button" value="Agregar" onClick={tomarTarea} />
    </div>
  );
};

export default Agregar;
