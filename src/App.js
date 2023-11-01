import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton.js';
import Contador from './componentes/Contador.js'
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';

function App() {

  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    return setContador((c) => c + 1);
  };

  const reducirContador = () => {
    return setContador((c) => c - 1);
  };

  const reiniciarClic = () => {
    return setContador(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={contador}/>
        <div className='contenedor-btn-clics'>
          <Boton 
            texto='-'
            esBotonDeClic={true}
            manejarClic={reducirContador}
          />
          <Boton 
            texto='+'
            esBotonDeClic={true}
            manejarClic={aumentarContador}
          />
        </div>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarClic}
        />
      </div>
    </div>
  );
}

export default App;
