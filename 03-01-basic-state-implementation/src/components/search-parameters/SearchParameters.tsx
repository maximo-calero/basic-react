import React from 'react';
import './SearchParameters.css';
import searchIcon from '../../images/search-icon.png';

const SearchParameters = () => {
    return (
        <div className='search-parameters-container'>
          <input className='search-text-box' type='text' value='' placeholder='Introduzca el nombre de una película'/>
          <button className='search-button' value='Buscar'>
            <img alt='search icon' className='search-icon' src={searchIcon} />            
          </button>
        </div>        
    );
}

export default SearchParameters;