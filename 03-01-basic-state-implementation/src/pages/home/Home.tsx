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

  render() {
    return (
      <div className="main-container">
        <h1 className='title'>Buscador de películas</h1>
        <SearchParameters onChangeQueryText={this.handleQueryText} queryText={this.state.queryText} />
        <ResultSearch movies={this.state.movies} />
      </div>
    );
  }
}

export default Home;
