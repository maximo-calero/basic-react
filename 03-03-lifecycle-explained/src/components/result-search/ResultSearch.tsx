import React from 'react';
import './ResultSearch.css';
import { Movie } from '../../common/interfaces/movie';
import defaultImage from '../../images/default-image_300.png';

interface Props {
    movies: Movie[];
}

class ResultSearch extends React.Component<Props,{}> {
    constructor(props: Props) {
        super(props);
        this.state = {};
        console.log('ResultSearch constructor');
    }
    componentDidMount() {
        console.log('ResultSearch componentDidMount');
    }
    
    static getDerivedStateFromProps(props: Props, state: any) {
        console.log(`ResultSearch getderivedStateFromProps. Number of movies: ${props.movies.length}`);
        return null;
    }
    
    componentDidUpdate() {
        console.log('ResultSearch componentDidUpdate');
    }

    render() {
        console.log('ResultSearch render');
        return (
            <div className='result-search'>
                <div className='result-items'>
                {this.props.movies && this.props.movies.length > 0 &&
                    this.props.movies.map(movie => {
                        return (
                        <div key={movie.id} className='result-item'>
                            <img alt={movie.title} src={movie.imageUrl ? movie.imageUrl : defaultImage} />
                            <span>{movie.title}</span>
                        </div>
                        );
                    })
                }
                {this.props.movies && this.props.movies.length === 0 &&
                (
                    <div className='no-results-message'>
                        <span>La búsqueda no devolvió resultados</span>
                    </div>  
                )
                }
                </div>
            </div>        
        );
    
    }
}

export default ResultSearch;