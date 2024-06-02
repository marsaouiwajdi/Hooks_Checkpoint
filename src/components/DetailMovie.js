import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movies from '../Movies'

function DetailMovie () {
    const [IsLoaded , setIsLoaded] = useState(false)
    const [Movie , setMovie] = useState({
        id : "",
        title:"", 
        descreption:"", 
        postUrl:"",
        VideoLink : "",
        rating: 0
    });
    const params = useParams();
    useEffect(() => {
            const M =  Movies.find(m => m.id === params.id);
            setMovie(
                {   
                    id : M.id,
                    title:M.title, 
                    descreption:M.descreption, 
                    postUrl:M.postUrl,
                    VideoLink :M.VideoLink,
                    rating: M.rating
                } ) ;
        setIsLoaded(true);
        console.log(Movie);
    },[IsLoaded])

    return (
        <div>
            <iframe src={Movie.VideoLink} frameborder="0"></iframe>
            {Movie.id}
        </div>
    )
}
export default DetailMovie;