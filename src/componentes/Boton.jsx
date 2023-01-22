import React from "react";
import '../hojas-de-estilos/Boton.css';
import ReactHowler from 'react-howler';
import Sonido from '../Sonido/sonido2.mp3';

function Boton({ texto, BotonClic, manejarClic}){
  return(
    <button
      className={BotonClic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}>
        <ReactHowler src={Sonido} playing={manejarClic}/>
      {texto}
      
    </button>
  );   
}
export default Boton;