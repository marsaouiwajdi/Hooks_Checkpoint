
import React, { useEffect, useState } from 'react';
import "../App.css"
import MoviesList from '../components/MoviesList.js';
import Movies from '../Movies.js';
import Navbar from './Navbar.js';
import { useNavigate } from 'react-router-dom';


function Home() {
  
  const [MoviesData , SetMoviesData] = useState(Movies)
  const[newpost,Setnewpost]=useState({
    title:"", descreption:"", postUrl:"",rating:null
  })
  const handelechange=(e)=>{
    
    Setnewpost({
      ...newpost,
      [e.target.name] : e.target.value
    })
  } 

 const handleClick = () => {
  SetMoviesData([...MoviesData , newpost])
 }
 const[search , setsearch] = useState({
  title : "",
  rating : ""
 })
 const handlesearch = (e) => {
  setsearch({
    ...search,
    [e.target.name] : e.target.value
  })
  console.log(search)
 }
useEffect(() => {
  if(search.title == "" && search.rating == "")
  {
    SetMoviesData(Movies)
  }
  else if (search.title !== "" && search.rating == "") {
    const filtered = MoviesData.filter((movie) => movie.title.includes(search.title) )
    SetMoviesData(filtered)
  }
  else {
    const filtered = MoviesData.filter((movie) => movie.title.includes(search.title) && movie.rating == search.rating )
    SetMoviesData(filtered)
  }
  
},[search])
  
  return (
    <div className="App">
      
      <div>
        <input type="text"  placeholder='Title' name='title' onChange={handlesearch}/>
        <input type="number" placeholder='Rating' name='rating' onChange={handlesearch}/>
      </div>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      add Movie
    </button>
    
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">add Movie</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="text" placeholder='enter the title here'  name='title' onChange={handelechange} />
            <input type="text" placeholder='enter the Description here' name='descreption' onChange={handelechange} />
            <input type="text" placeholder='enter the Image here' name='postUrl' onChange={handelechange} />
            <input type="number" placeholder='enter the Rating here' name='rating' onChange={handelechange} />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onClick={handleClick}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
      
      <MoviesList Movies={MoviesData}/>


    </div>
  );
}

export default Home;
