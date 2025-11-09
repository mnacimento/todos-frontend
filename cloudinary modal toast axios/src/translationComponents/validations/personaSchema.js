import * as Yup from "yup";


const personaSchema = (t) =>
    Yup.object().shape({
        name: Yup.string().min(2, t("validation.min")).required(t("validation.required")),
        email: Yup.string().email(t("validation.email")).required(t("validation.required")),
        password: Yup.string().min(6, t("validation.min")).matches(/\d/, t("validation.match")).required(t("validation.required")),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")], t("validation.match")).required(t("validation.required")),
        birthDate: Yup.date().typeError(t("validation.required")).required("La fecha es obligatoria"),
        country: Yup.string().oneOf(["Argentina", "Uruguay", "Brasil"], t("validation.selectCountry")).required(t("validation.selectCountry")),
        department: Yup.string().when("country", {
            is: "Uruguay",
            then: (s) => s.required(t("validation.required")),
            otherwise: (s) => s.notRequired()
        }),
        terms: Yup.bool().oneOf([true], t("validation.required"))
    })

export default personaSchema;