import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo1 from './imagenes/logo1.png';
import { useState } from 'react';


function App() {

  const [numeroClic, setnumeroClic]= useState(0);

  const manejarClic = () => {
    setnumeroClic(numeroClic+1);
  }

  const reiniciaContador = () => {
    setnumeroClic(numeroClic-1);
  }


  return (
    <div className='App'>
      <div className='logo-contendor'>
        <img 
            className='logo-dibujo'
            src={logo1}
            alt='Logo de pagina'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numeroClic={numeroClic}/>
        <Boton
          texto='Haceme Clic'
          BotonClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Mejor no'
          BotonClic={false}
          manejarClic={reiniciaContador}/>
      </div>
    </div>
  );
}

export default App;
