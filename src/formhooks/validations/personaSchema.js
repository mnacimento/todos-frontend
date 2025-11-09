import * as Yup from "yup";


const personaSchema = Yup.object().shape({
    name: Yup.string().min(2, "Debe tener al menos 2 caracteres").required("El nombre es obligatorio"),
    email: Yup.string().email("Format de correo invalido").required("El correo es obligatorio"),
    password: Yup.string().min(6, "Debe contener al menos 6 caracteres").matches(/\d/, "Debe contener al menos un numero"). required("La contrasena es obligatoria"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Las contrasenas deben coincidir").required("Confirmar la contrasena es obligatorio"),
    birthDate: Yup.date().typeError("La fecha no es valida").required("La fecha es obligatoria"),
    country: Yup.string().oneOf(["Argentina", "Uruguay", "Brasil"], "Seleccione una opcion").required("El pais es obligatorio"),
    department: Yup.string().when("country", {
        is:"Uruguay",
        then: (s) => s.required("El departamento es requerido"),
        otherwise: (s) => s.notRequired()
    }),
    terms: Yup.bool().oneOf([true], "Debes de aceptar los terminos y condiciones")
})

export default personaSchema;