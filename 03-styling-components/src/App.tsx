import React from 'react';
import './App.css';
import defaultImage from './images/default-image_300.png'
import searchIcon from './images/search-icon.png';

class App extends React.Component {
  movies: any[] = [
    {
      imageUrl: '',
      title: 'Movie 01'
    },
    {
      imageUrl: '',
      title: 'Movie 02'
    },
    {
      imageUrl: '',
      title: 'Movie 03'
    },
    {
      imageUrl: '',
      title: 'Movie 04'
    },
    {
      imageUrl: '',
      title: 'Movie 05'
    },
    {
      imageUrl: '',
      title: 'Movie 06'
    },
    {
      imageUrl: '',
      title: 'Movie 07'
    },
    {
      imageUrl: '',
      title: 'Movie 08'
    },
    {
      imageUrl: '',
      title: 'Movie 09'
    },
    {
      imageUrl: '',
      title: 'Movie 10'
    },
  ];
  render() {
    this.movies = [];
    return (
      <div className="main-container">
        <h1 className='title'>Buscador de películas</h1>
        <div className='search-parameters-container'>
          <input className='search-text-box' type='text' value='' placeholder='Introduzca el nombre de una película'/>
          <button className='search-button' value='Buscar'>
            <img className='search-icon' src={searchIcon} />            
          </button>
        </div>
        <div className='result-search'>
          <div className='result-items'>
          {this.movies && this.movies.length > 0 &&
            this.movies.map(movie => {
              return (
                <div key={movie.title} className='result-item'>
                  <img src={movie.imageUrl ? movie.imageUrl : defaultImage} />
                  <span>{movie.title}</span>
                </div>
              );
            })
          }
          {this.movies && this.movies.length === 0 &&
            (
              <div>
                <span>La búsqueda no devolvió resultados</span>
              </div>  
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
