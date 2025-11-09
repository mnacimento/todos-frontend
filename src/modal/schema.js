import * as yup from "yup";

export const editTaskSchema = yup.object().shape({
    title: yup.string()
    .trim()
    .min(3, "El titulo debe de tener al menos 3 caracteres")
    .max(120, "El maximo de caracteres es 120")
    .required(),
    completed: yup.boolean()
})