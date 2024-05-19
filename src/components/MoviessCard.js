import React from 'react';

function MoviessCard(proops){
    return(
        <div class="card" style={{width: "30%"}}>
        <img src={proops.Movie.postUrl} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{proops.Movie.title}"</h5>
          <p class="card-text">{proops.Movie.descreption}</p>
          <a href="#" class="btn btn-primary">{proops.Movie.rating}</a>
        </div>
      </div>
    )

}
export default MoviessCard;