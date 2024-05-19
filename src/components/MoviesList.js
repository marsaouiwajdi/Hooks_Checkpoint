
import React from 'react';
import MoviessCard from './MoviessCard';



function MoviesList(props){
    return(
        <div>
            {
                props.Movies.map(
                    (m)=>

                    <MoviessCard Movie={m}/>
                )
            } 
        </div> 
    )
}
export default MoviesList;