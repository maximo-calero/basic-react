import React from 'react';
import './ResultSearch.css';
import { Movie } from '../../common/interfaces/movie';
import defaultImage from '../../images/default-image_300.png';

interface Props {
    movies: Movie[];
}

const ResultSearch = (props: Props) => {
    return (
        <div className='result-search'>
            <div className='result-items'>
            {props.movies && props.movies.length > 0 &&
                props.movies.map(movie => {
                    return (
                    <div key={movie.id} className='result-item'>
                        <img alt={movie.title} src={movie.imageUrl ? movie.imageUrl : defaultImage} />
                        <span>{movie.title}</span>
                    </div>
                    );
                })
            }
            {props.movies && props.movies.length === 0 &&
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

export default ResultSearch;