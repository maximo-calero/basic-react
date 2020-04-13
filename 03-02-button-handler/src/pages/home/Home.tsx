import React from 'react';
import './Home.css';
import SearchParameters from '../../components/search-parameters/SearchParameters';
import ResultSearch from '../../components/result-search/ResultSearch';
import { Movie } from '../../common/interfaces/movie';

export interface Props {

}

export interface State {
  queryText: string;
  movies: Movie[];
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      queryText: '',
      movies: []
    };
  }

  handleQueryText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    this.setState(prevState => ({
      ...prevState,
      queryText: target.value
    }));
  }

  handleSearchClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const movies: Movie[] = [
          {
            id: '1',
            imageUrl: '',
            title: 'Movie 01'
          },
          {
            id: '2',
            imageUrl: '',
            title: 'Movie 02'
          },
          {
            id: '3',
            imageUrl: '',
            title: 'Movie 03'
          },
          {
            id: '4',
            imageUrl: '',
            title: 'Movie 04'
          },
          {
            id: '5',
            imageUrl: '',
            title: 'Movie 05'
          },
          {
            id: '6',
            imageUrl: '',
            title: 'Movie 06'
          },
          {
            id: '7',
            imageUrl: '',
            title: 'Movie 07'
          },
          {
            id: '8',
            imageUrl: '',
            title: 'Movie 08'
          },
          {
            id: '9',
            imageUrl: '',
            title: 'Movie 09'
          },
          {
            id: '10',
            imageUrl: '',
            title: 'Movie 10'
          },
    ];
    this.setState(prevState => (
      {
        ...prevState,
        movies: movies
      }
    ));
  }

  render() {
    return (
      <div className="main-container">
        <h1 className='title'>Buscador de películas</h1>
        <SearchParameters onClickSearchButton={this.handleSearchClick} onChangeQueryText={this.handleQueryText} queryText={this.state.queryText} />
        <ResultSearch movies={this.state.movies} />
      </div>
    );
  }
}

export default Home;
