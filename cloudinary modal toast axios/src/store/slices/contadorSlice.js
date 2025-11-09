import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cuenta: 0,
}


export const contadorSlice = createSlice({
    name:"contador",
    initialState,
    reducers:{
        incrementar: state => {
            //immer
            state.cuenta++;
        },
        decrementar: state => {
            state.cuenta--;
        },
        reset: state => {
            state.cuenta = 0;
        }
    }
});


export const { incrementar, decrementar, reset } = contadorSlice.actions;

export default contadorSlice.reducer;