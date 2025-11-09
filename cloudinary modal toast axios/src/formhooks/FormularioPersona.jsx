import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import personaSchema from './validations/personaSchema';
import "./styles/formularioPersona.css";

const FormularioPersona = () => {

    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isValid }
    } = useForm({
        resolver:yupResolver(personaSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            birthDate: "",
            country: "",
            department: "",
            terms: false
        }
    })

    const selectedCountry = watch("country")

    const onSubmit = data => {
        console.log("formulario enviado: ", data);
        alert("Exito, formulario enviado correctamente");
        reset();
    }

    return (
        <div className='page'>
            <div className='container'>
                <h1 className='title'>Registro de Persona</h1>
                <div className='inputGroup'>
                    <label className='label'>Nombre:</label>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder='Escribe tu nombre'
                                className='input'
                            />
                        )}
                    />
                    {errors.name && <p className='error'>{errors.name.message}</p>}
                </div>

                <div className='inputGroup'>
                    <label className='label'>Correo:</label>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field }) => (
                            <input
                                {...field}
                                type="email"
                                placeholder='Escribe tu mail'
                                className='input'
                            />
                        )}
                    />
                    {errors.email && <p className='error'>{errors.email.message}</p>}

                </div>
                <div className='inputGroup'>
                    <label className='label'>Password:</label>
                    <Controller
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <input
                                {...field}
                                type="password"
                                placeholder='Escriba su contrasena'
                                className='input'
                            />
                        )}
                    />
                    {errors.password && <p className='error'>{errors.password.message}</p>}

                </div>

                <div className='inputGroup'>
                    <label className='label'>Confirmar Password:</label>
                    <Controller
                        control={control}
                        name='confirmPassword'
                        render={({ field }) => (
                            <input
                                {...field}
                                type="password"
                                placeholder='Confirme su contrasena'
                                className='input'
                            />
                        )}
                    />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                </div>

                <div className="inputGroup">
                    <label className="label">Fecha de Nacimiento:</label>
                    <Controller
                        control={control}
                        name="birthDate"
                        render={({ field }) => (
                            <input
                                {...field}
                                type="date"
                                className="input"
                            />
                        )}
                    />
                    {errors.birthDate && <p className="error">{errors.birthDate.message}</p>}
                </div>
                <div className='inputGroup'>
                    <label className='label'>Pais:</label>
                    <Controller
                        control={control}
                        name='country'
                        render={({ field }) => (
                            <select {...field} className='input'>
                                <option value="">Seleccione un Pais</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Brasil">Brasil</option>
                            </select>
                        )}
                    />
                    {errors.country && <p className='error'>{errors.country.message}</p>}
                </div>
                {selectedCountry === "Uruguay" && (
                <div className='inputGroup'>
                    <label className='label'>Departamento:</label>
                    <Controller
                        control={control}
                        name='department'
                        render={({ field }) => (
                            <select {...field} className='input'>
                                <option value="">Seleccione un departamento</option>
                                <option value="Montevideo">Montevideo</option>
                                <option value="Canelones">Canelones</option>
                                <option value="Maldonado">Maldonado</option>
                            </select>
                        )}
                    />
                    {errors.department && <p className='error'>{errors.department.message}</p>}
                </div>
                )}        
                <div className='inputGroup'>
                    <label className='label'>Aceptar terminos y condiciones:</label>
                    <Controller
                        control={control}
                        name='terms'
                        render={({ field: { value, onChange } }) => (
                            <input type='checkbox' checked={value}
                                onChange={e => onChange(e.target.checked)}
                            />
                        )}
                    />
                    {errors.terms && <p className='error'>{errors.terms.message}</p>}
                </div>

                <div className='buttonContainer'>
                    <button
                        type='button'
                        className='button'
                        onClick={handleSubmit(onSubmit)}
                        disabled={!isValid}
                    >
                        Enviar
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FormularioPersona