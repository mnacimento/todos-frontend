import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import personaSchema from './validations/personaSchema';
import "./styles/formularioPersona.css";
import { useTranslation } from 'react-i18next';

const FormularioPersonaTranslation = () => {

    const { t, i18n } = useTranslation()

    const {
        control,
        handleSubmit,
        watch,
        reset,
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(personaSchema(t)),
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

                <div style={{ display: 'flex', gap: 8, marginBottom: 28, justifyContent:"center"}}>
                    <button className='button' onClick={() => i18n.changeLanguage('es')}>
                        {t('form.es')}
                    </button>
                    <button className='button' onClick={() => i18n.changeLanguage('en')}>
                        {t('form.en')}
                    </button>
                </div>

                <h1 className='title'>{t("form.title")}</h1>
                <div className='inputGroup'>
                    <label className='label'>{t("form.name")}:</label>
                    <Controller
                        control={control}
                        name='name'
                        render={({ field }) => (
                            <input
                                {...field}
                                type="text"
                                placeholder={t("form.title")}
                                className='input'
                            />
                        )}
                    />
                    {errors.name && <p className='error'>{errors.name.message}</p>}
                </div>

                <div className='inputGroup'>
                    <label className='label'>{t("form.email")}</label>
                    <Controller
                        control={control}
                        name='email'
                        render={({ field }) => (
                            <input
                                {...field}
                                type="email"
                                placeholder={t("form.email")}
                                className='input'
                            />
                        )}
                    />
                    {errors.email && <p className='error'>{errors.email.message}</p>}

                </div>
                <div className='inputGroup'>
                    <label className='label'>{t("form.password")}:</label>
                    <Controller
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <input
                                {...field}
                                type="password"
                                placeholder={t("form.password")}
                                className='input'
                            />
                        )}
                    />
                    {errors.password && <p className='error'>{errors.password.message}</p>}

                </div>

                <div className='inputGroup'>
                    <label className='label'>{t("form.confirmPassword")}:</label>
                    <Controller
                        control={control}
                        name='confirmPassword'
                        render={({ field }) => (
                            <input
                                {...field}
                                type="password"
                                placeholder={t("form.confirmPassword")}
                                className='input'
                            />
                        )}
                    />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}
                </div>

                <div className="inputGroup">
                    <label className="label">{t("form.birthDate")}:</label>
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
                    <label className='label'>{t("form.country")}:</label>
                    <Controller
                        control={control}
                        name='country'
                        render={({ field }) => (
                            <select {...field} className='input'>
                                <option value="">{t("form.selectCountry")}</option>
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
                        <label className='label'>{t("form.department")}:</label>
                        <Controller
                            control={control}
                            name='department'
                            render={({ field }) => (
                                <select {...field} className='input'>
                                    <option value="">{t("form.selectDepartment")}</option>
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
                    <label className='label'>{t("form.terms")}:</label>
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
                        {t("form.submit")}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FormularioPersonaTranslation