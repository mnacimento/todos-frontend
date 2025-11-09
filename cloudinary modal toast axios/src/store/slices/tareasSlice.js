import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listaTareas: [],
}


export const tareasSlice = createSlice({
    name:"tareas",
    initialState,
    reducers:{
        cargarTareas: (state, action) => {
            console.log("action", action);
            state.listaTareas = action.payload
        },
        crearTarea: (state, action) => {
            state.listaTareas.push(action.payload);
        }
    }
});


export const { cargarTareas, crearTarea } = tareasSlice.actions;

export default tareasSlice.reducer;