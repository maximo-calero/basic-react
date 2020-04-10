import React from 'react';
import './App.css';
import defaultImage from './images/default-image_300.png'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Buscador de películas</h1>
        <div>
          <input type='text' value='' placeholder='Introduzca el nombre de una película'/>
          <button value='Buscar'>Buscar</button>
        </div>
        <div>
          <h2>Resultados búsqueda</h2>
          <div>
            <div>
              <img src={defaultImage} />
              <span>Titulo película</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
