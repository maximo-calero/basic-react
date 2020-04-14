import React from 'react';
import './SearchParameters.css';
import searchIcon from '../../images/search-icon.png';

interface Props {
  queryText: string;
  onChangeQueryText: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickSearchButton: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

class SearchParameters extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    console.log('SearchParameters constructor');
    this.state = {};
  }
  componentDidMount() {
    console.log('SearchParameters componentDidMount');
  }

  static getDerivedStateFromProps(props: Props, state: any) {
    console.log(`SearchParameters getderivedStateFromProps. queryText: ${props.queryText}` );
    return null;
  }

  componentDidUpdate() {
    console.log('SearchParameters componentDidUpdate');
  }

  render() {
    console.log('SearchParameters render');
    return (
        <div className='search-parameters-container'>
          <input onChange={this.props.onChangeQueryText} className='search-text-box' type='text' value={this.props.queryText} placeholder='Introduzca el nombre de una película'/>
          <button onClick={this.props.onClickSearchButton} className='search-button' value='Buscar'> 
            <img alt='search icon' className='search-icon' src={searchIcon} />            
          </button>
        </div>        
    );
  }
}

// const SearchParameters = (props: Props) => {
// }

export default SearchParameters;