import React, { Component } from 'react'
import { movies } from './getMovies' 
export default class Header extends Component{
  
  render(){

  let movie=movies.results[4]
  let movie1=movies.results[10]
  console.log(movie1)
  let movie2=movies.results[4]
  return (
    <>
    { movie==''||movie1==''||movie2==''?<div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
    :
  //   <div id="carouselExampleIndicators" class="carousel slide " data-ride="carousel">
  //   <ol className="carousel-indicators">
  //     <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
  //     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  //     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  //   </ol>
  //   <div className="carousel-inner ">
  //     <div className="carousel-item active header-section">
  //       <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}  alt="First slide"/>
  //       <div className="carousel-caption d-none d-md-block">
  //   <h1>{movie.original_title}</h1>
  //   <p>{movie.overview}</p>
  // </div>
  //     </div>
  //     <div className="carousel-item header-section">
  //       <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${movie1.backdrop_path}`}  alt="Second slide"/>
  //       <div className="carousel-caption d-none d-md-block">
  //       <h1>{movie1.original_title}</h1>
  //   <p>{movie1.overview}</p>
  // </div>
  //     </div>
  //     <div className="carousel-item header-section">
  //       <img className="d-block w-100" src={`https://image.tmdb.org/t/p/original${movie2.backdrop_path}`} alt="Third slide"/>
  //       <div className="carousel-caption d-none d-md-block">
  //       <h1>{movie2.original_title}</h1>
  //   <p>{movie2.overview}</p>
  // </div>
  //     </div>
  //   </div>
  //   <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  //     <span className="sr-only">Previous</span>
  //   </a>
  //   <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
  //     <span className="sr-only">Next</span>
  //   </a>
  // </div>
    <div className="card header-section">
   <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="img-top header-img"/>
    {/* <div className="card-body"> */}
      <h1 className="card-title header-title">{movie.original_title}</h1>
      <p className="card-text header-text">{movie.overview}</p>
      {/* <a href="#" classNameName="btn btn-primary">Go somewhere</a> */}
    {/* </div> */}
  </div>
  }
  </>
  )
}
}
