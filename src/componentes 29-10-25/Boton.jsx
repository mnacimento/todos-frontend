import { useDispatch } from "react-redux";
import { incrementar, decrementar, reset } from "../store/slices/contadorSlice"; 

const Boton = () => {

    const dispatch = useDispatch();

    const aumentarCuenta = () => {
        dispatch(incrementar())
    }

    const decrementarCuenta = () => {
        dispatch(decrementar())
    }
    const resetearCuenta = () => {
        dispatch(reset())
    }

  return (
    <div>
        <input type="button" value="Incrementar" onClick={aumentarCuenta} />
        <input type="button" value="decrementar" onClick={decrementarCuenta} />
        <input type="button" value="resetear" onClick={resetearCuenta} />
    </div>
  )
}

export default Boton