import React from 'react';
import './SearchParameters.css';
import searchIcon from '../../images/search-icon.png';

interface Props {
  queryText: string;
  onChangeQueryText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchParameters = (props: Props) => {
    return (
        <div className='search-parameters-container'>
          <input onChange={props.onChangeQueryText} className='search-text-box' type='text' value={props.queryText} placeholder='Introduzca el nombre de una película'/>
          <button className='search-button' value='Buscar'> 
            <img alt='search icon' className='search-icon' src={searchIcon} />            
          </button>
        </div>        
    );
}

export default SearchParameters;