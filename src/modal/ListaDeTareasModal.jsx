import React, { useEffect, useState } from 'react';
import { apiClient } from '../utils/axios';
import toast from 'react-hot-toast';
import EditTaskModal from './EditTaskModal';
import './ListaDeTareas.css';

const ListaDeTareasModal = () => {
  const [tareas, setTareas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  useEffect(() => {
    const obtenerTareas = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        toast.error('No hay token, por favor iniciá sesión nuevamente.');
        return;
      }

      setCargando(true);
      try {
        const respuesta = await apiClient.get('/v1/todos', {
          headers: { Authorization: token },
          params: { _limit: 20 },
        });

        setTareas(respuesta.data);
        toast.success('Tareas cargadas exitosamente');
      } catch (error) {
        console.error('Error al cargar las tareas:', error);
        toast.error('No se pudieron cargar las tareas');
      } finally {
        setCargando(false);
      }
    };

    obtenerTareas();
  }, []);

  const abrirModal = (tarea) => {
    setTareaSeleccionada(tarea);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setTareaSeleccionada(null);
    setModalAbierto(false);
  };

  const guardarCambios = async (tareaEditada) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('No hay token, por favor iniciá sesión nuevamente.');
      return;
    }

    try {
      const respuesta = await apiClient.put(
        `/v1/todos/${tareaEditada.id}`,
        tareaEditada,
        { headers: { Authorization: token } }
      );

      // Si la API devuelve la tarea actualizada, la usamos.
      const tareaActualizada = respuesta.data?.title
        ? respuesta.data
        : tareaEditada;

      setTareas((prev) =>
        prev.map((t) =>
          t.id === tareaEditada.id ? { ...t, ...tareaActualizada } : t
        )
      );

      toast.success('Tarea actualizada correctamente');
      cerrarModal();
    } catch (error) {
      console.error('Error al actualizar la tarea:', error);
      toast.error('No se pudo actualizar la tarea');
    }
  };

  if (cargando) return <p style={{ padding: '16px' }}>Cargando tareas...</p>;

  return (
    <div style={{ padding: '16px' }}>
      <h2 className="tareas-title">Últimas 20 tareas</h2>

      <ul className="tareas-list">
        {tareas.map((tarea) => (
          <li key={tarea.id} className="tarea-item">
            <div className="tarea-info">
              <span className="tarea-id">#{tarea.id}</span>
              <span className="tarea-title">{tarea.title}</span>
              <span
                className={`tarea-badge ${
                  tarea.completed ? 'ok' : 'pending'
                }`}
              >
                {tarea.completed ? 'Completada' : 'Pendiente'}
              </span>
            </div>

            <div className="tarea-actions">
              <button
                className="btn btn-edit"
                onClick={() => abrirModal(tarea)}
              >
                Editar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <EditTaskModal
        isOpen={modalAbierto}
        onRequestClose={cerrarModal}
        task={tareaSeleccionada}
        onSave={guardarCambios}
      />
    </div>
  );
};

export default ListaDeTareasModal;
