import './App.css';
import './i18n/i18n';
import './bootstrap.min.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import Login from './componentes/Login';
import Clima from './componentes/Clima';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import FormularioPersona from './formhooks/FormularioPersona';
import ComponenteEjemplo from './translationComponents/ComponenteEjemplo';
import FormularioPersonaTranslation from './translationComponents/FormularioPersonaTranslation';
import ImageUploader from './imageUploader/ImageUploader';
import ListaDeTareas from './axiosComponent/ListaDeTareas';
import { Toaster } from 'react-hot-toast';
import ListaDeTareasModal from './modal/ListaDeTareasModal';
import Header from './componentes/Header';
import Contenido from './componentes/Contenido';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu/>}>
            <Route path='/' element={<Login/>}/>
            {/* <Route path='/' element={<ImageUploader/>}/> */}
            <Route path='/clima' element={<Clima/>}/>
            <Route path='/persona' element={<FormularioPersona/>}/>
            <Route path='/ejemplo' element={<ComponenteEjemplo/>}/>
            <Route path='/traduccion' element={<FormularioPersonaTranslation/>}/>
            <Route path='/tareas' element={<ListaDeTareas/>}/>
            <Route path='/tareasModal' element={<ListaDeTareasModal/>}/>
            <Route path='/lista' element={<Header/>}>
              <Route path='/lista' element={<Contenido/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position='bottom-right'/>
    </Provider>
  );
}

export default App;

























// import './App.css';
// import Lista from './componentes 22-10-25/Lista';
// import Contenido from './componentes/Contenido';
// import Menu from './componentes/Menu';
// import { Provider } from 'react-redux';
// import { store } from './store/store';
// import Contador from './componentes/Contador';
// import Boton from './componentes/Boton';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Menu/>
//       <Contador/>
//       <Boton/>
//       <Contenido/>
//     </Provider>
//   );
// }

// export default App;






















// import './App.css';
// import Lista from './componentes 22-10-25/Lista';

// const App = () => {
//   return (
//     <div className="App">
//       <Lista/>
//     </div>
//   );
// }

// export default App;


//--------------------------------------------------------------------------------------------------------------










// import './App.css';
// import Contador from './componentes/Contador';
// import Informacion from './componentes/Informacion';
// import Persona from './componentes/Persona';
// import Texto from './componentes/Texto';
// //primera / => comenzar la importacion de algo desde la raiz del proyecto
// //segunda ./ => arranco la importacion desde una ruta hermana a donde estoy parado
// //tercera ../ => comience la importacion una ubicacion hacia atras

// const App = () => {

//   // let nombre = "Mauro";
//   // let nombres = ["Martin", "Manuel", "Sebastian"];
//   // let nombres = [<p>Martin</p>, <p>Manuel</p>, <p>Sebastian</p>];
//   let personas =[
//     {id:22, nombre: "Pedro", edad: 27},
//     {id:23, nombre: "Martin", edad: 22},
//     {id:24, nombre: "Lucia", edad: 21},
//   ]
//   return (
//     <div className="App">
//         {/* <h1>Titulo</h1> */}
//         {/* <h2>{nombre}</h2> */}

//         {/* <Informacion nombre={nombre} apellido="Nacimento"/>
//         <Informacion  nombre="Pepe" apellido="Suarez"/> */}
//         {/* <Informacion/>
//         <Informacion/>
//         <Informacion/> */}

//         <Informacion  nombre="Pepe" apellido="Suarez"/> 
//         {/* <p>{nombres[0]}</p>
//         <p>{nombres[1]}</p>
//         <p>{nombres[2]}</p> */}

//         {/* {nombres.map(nom => <p>{nom}</p>)} */}

//         {/* {nombres.map((nom, i) => <Persona key={i} nombre={nom}/>)} */}

//         {/* {personas.map((p, i )=> <Persona key={i} nombre={p.nombre}/>)} */}

//         {/* {personas.map(p=> <Persona key={p.id} nombre={p.nombre} edad={p.edad}/>)} */}

//         {personas.map(p=> <Persona key={p.id} {...p}/>)}

//           <Contador/>

//           <Texto/>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Editar <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
