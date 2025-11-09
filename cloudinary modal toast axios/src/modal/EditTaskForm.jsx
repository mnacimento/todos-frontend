import React, { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import "./EditTaskForm.css"
import { editTaskSchema } from './schema'

const EditTaskForm = ({task, onSave, onCancel}) => {

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState:{errors, isSubmitting, isDirty}
    } = useForm({
        resolver: yupResolver(editTaskSchema),
        defaultValues:{ title: "", completed: false},
        mode: "onChange"
    });


    useEffect(() => {
        if(task){
            reset({
                title: task.title || "",
                completed: !!task.completed
            });
        }
    }, [task, reset])
    

    const onSubmit = async (values) => {
        await onSave({...task, ...values})
    }

  return (
    <form className='task-form' onSubmit={handleSubmit(onSubmit)}>
        <h3>Editar tarea</h3>
        <label className='task-label'>
            Titulo
            <input 
            type="text" 
            placeholder='Titulo de la tarea'
            {...register("title")}
            className={`task-input ${errors.title ? "error-border" : ""}`}
            />
        </label>
      {errors.title && <small className="error-text">{errors.title.message}</small>}

        <label className="checkbox-row">
        <Controller
          name="completed"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              checked={!!field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
        ¿Completada?
      </label>
      <div className="button-row">
        <button type="button" onClick={onCancel} disabled={isSubmitting}>
          Cancelar
        </button>
        <button type="submit" disabled={isSubmitting || !isDirty}>
          {isSubmitting ? "Guardando..." : "Guardar"}
        </button>
      </div>
    </form>
  )
}

export default EditTaskForm