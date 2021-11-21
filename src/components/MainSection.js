import React from 'react'
import { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { movies } from './getMovies';
import MovieDetails from './MovieDetails'
export default class MainSection extends Component{
   constructor(){
     super();
     this.state={
       par:[1],
       currPage:1,
       movies:[],
       favourites:[],
     }
   }
  async componentDidMount(){
     const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d9a5b66e2e43cdefa669c36d94de8369&language=en-US&page=${this.state.currPage}`)
     let data=res.data;
      this.setState({
        movies:[...data.results]
      })
   }
   chnageSection=async()=>{
     const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=d9a5b66e2e43cdefa669c36d94de8369&language=en-US&page=${this.state.currPage}`)
     let data = res.data
   
     this.setState({
         movies:[...data.results]
     })
   }
   rightHandle=()=>{
          let temp=[];
          for(let i=1;i<=this.state.par.length+1;i++)
          temp.push(i);
          
          this.setState({
            par:[...temp],
            currPage:this.state.currPage+1
          },this.chnageSection)
   }
   leftHandle=()=>{
     if(this.state.currPage!=1){
       this.setState({
         currPage:this.state.currPage-1
       },this.chnageSection)
     }
   }
   handleClick=(e)=>{
     if(e!=this.state.currPage){
       this.setState({
         currPage:e
       },this.chnageSection)
     }
   }
   addToList=(res)=>{
     let initial=JSON.parse(localStorage.getItem("movies")||"[]")
     if(this.state.favourites.includes(res.id)){
       initial=initial.filter((e)=>e.id!=res.id)
     }else{
      initial.push(res)
     }
    
     localStorage.setItem("movies",JSON.stringify(initial))
     console.log(initial);
     this.handleaddToList();
    
   }
   handleaddToList=()=>{
    let initial=JSON.parse(localStorage.getItem("movies")||"[]")
    let tmp=initial.map((res)=>res.id)
    this.setState({
      favourites:[...tmp]
    })
   }
   showDetails=(item)=>{
    
     <MovieDetails info={item}/>
     console.log(item);
   }
   render(){ 
    return (
        <>
        {
            this.state.movies.length==0?<div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>:
          <div>
              <h3 style={{textAlign:'center',fontWeight:'bold'}}>Latest Movies</h3>
              <div className="movie-comp">
              {
                        this.state.movies.map((item)=>(
                            <div className="card main-section">
                     <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}   alt={item.title} className="card-img-top main-img"/>
                {/* <div className="card-body"> */}
                  <h5 className="card-title main-title">{item.original_title}</h5>
                  {/* <p className="card-text main-text">{item.overview}</p> */}
                 
                  <div class="btn-group btn-add" role="group" aria-label="Basic example">
                   {/* <Link to="/details"><button type="button" class="btn btn-secondary button-add">Know More</button></Link> */}
                {/* <Link to="/details"> <a className="btn btn-secondary button-add" onClick={()=>this.showDetails(item)}>Know More</a></Link> */}
                <MovieDetails item={item}/>
                     <a className="btn btn-primary button2" onClick={()=>this.addToList(item)}>{!this.state.favourites.includes(item.id)?"Add To List":"Remove from List"}</a>
                      </div>
                 
                {/* </div> */}
              </div>
                          ))
              }
              </div>
             <div className="main-pagination">
             <nav aria-label="Page navigation example">
                 <ul class="pagination">
                 <li class="page-item"><a class="page-link" onClick={this.leftHandle}>Previous</a></li>
                   {
                     this.state.par.map((e)=>(
                      <li class="page-item"><a class="page-link" onClick={()=>this.handleClick(e)}>{e}</a></li>
                     ))
                   }
                 
                <li class="page-item"><a class="page-link" onClick={this.rightHandle}>Next</a></li>
            </ul>
          </nav>

             </div>
            

          </div>
        }
        </>
    )
      }
}
