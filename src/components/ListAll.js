import React, { Component } from 'react'

export default class ListAll extends Component {
    constructor(){
        super();
        this.state={
            arr:[],
            currList:'All Lists',
            movies_map:[],
            currTxt:'',
            rows:5,
            pageCurr:1
        }
    }
    componentDidMount(){
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
        let data=JSON.parse(localStorage.getItem("movies") || "[]")
       
        let temp=[];
        data.forEach((res)=>{
            if(!temp.includes(genreids[res.genre_ids[0]])){
                temp.push(genreids[res.genre_ids[0]]);
            }
           
        })
        temp.unshift('All Lists')
        
        this.setState({
           arr:[...temp],
          movies_map:[...data]
        })
        
    }
    handlegenreChange=(res)=>{
        this.setState({
            currList:res
        })
        
    }
    ratingSort=()=>{
        let tmp=this.state.movies_map;
        tmp.sort(function(a,b){
            return b.vote_average-a.vote_average
        })
        this.setState({
            movies_map:[...tmp]
        })
    }
   ratingSortAsc=()=>{
    let tmp=this.state.movies_map;
    tmp.sort(function(a,b){
        return a.vote_average-b.vote_average
    })
    this.setState({
        movies_map:[...tmp]
    })
   }
    popularitySort=()=>{
        let tmp=this.state.movies_map;
        tmp.sort(function(a,b){
            return b.popularity-a.popularity
        })
        this.setState({
            movies_map:[...tmp]
        })
    }
    popularitySortAsc=()=>{
        let tmp=this.state.movies_map;
        tmp.sort(function(obja,objb){
           
            return (obja.popularity-objb.popularity);
        })
        this.setState({
            movies_map:[...tmp]
        })
    }
    handlePageChange=(page)=>{
        this.setState({
            pageCurr:page
        })
    }
    deleteMovie=(_id)=>{
        let tmp=[];
        tmp=this.state.movies_map.filter((res)=>res.id!=_id)
        this.setState({
            movies_map:[...tmp]
        })
       localStorage.setItem("movies",JSON.stringify(tmp))
    }
    render() {
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
       
        let dispArr=[];
        if(this.state.currTxt===''){
            dispArr=this.state.movies_map;
        }else{
            dispArr=this.state.movies_map.filter((res)=>{
                let txt=res.original_title.toLowerCase();
                return txt.includes(this.state.currTxt.toLowerCase())
            })
        }
       
           
      
        if(this.state.currList!="All Lists"){
            dispArr=this.state.movies_map.filter((res)=>genreids[res.genre_ids[0]]==this.state.currList)
           
        }
       let pages=Math.ceil(dispArr.length/this.state.rows);
       let arrPage=[];
       for(let i=1;i<=pages;i++)arrPage.push(i);
       let s=(this.state.pageCurr-1)*this.state.rows;
       let e=s+this.state.rows;
       dispArr=dispArr.slice(s,e);
        return (
            <div>
                <div className="list-all">
                   <div className="row">
                   <div className="col-lg-3 col-sm-12">
                   <ul className="list-group list-movie">
                       {
                            this.state.arr.map((res)=>(
                                this.state.currList===res?
                                <li className="list-group-item active" style={{cursor:'pointer'}}>{res}</li>:
                                <li className="list-group-item" style={{background:'white',color:'#3f51b5',cursor:'pointer'}} onClick={()=>this.handlegenreChange(res)}>{res}</li>
                            ))
                       }


                      </ul>
                   </div>
               
                <div className="col-lg-9 list-table col-sm-12">
                 <div className="row">
                    <input type="text" className="input-group-text col" placeholder="Search Any Movie" value={this.state.currTxt} onChange={(e)=>this.setState({currTxt:e.target.value})}/>
                    <input type="number" className="input-group-text col" placeholder="Number of Rows" value={this.state.rows} onChange={(e)=>this.setState({rows:e.target.value})}/>
                 </div>
                 <div className="row">
                 <table class="table">
       <thead>
       <tr>
     
      <th scope="col">Heading</th>
      <th scope="col">Genre</th>
      <th scope="col"><i class="fas fa-sort-up" onClick={this.popularitySort}/>Popularity<i class="fas fa-sort-down" onClick={this.popularitySortAsc}></i></th>
     <th scope="col"><i class="fas fa-sort-up" onClick={this.ratingSort}></i>Rating<i class="fas fa-sort-down" onClick={this.ratingSortAsc}></i></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {
          dispArr.map((res)=>(
            <tr>
            <td><img src={`https://image.tmdb.org/t/p/original${res.backdrop_path}`} alt={res.title} style={{width:'5.2rem'}}/> {res.original_title}</td>
            <td>{genreids[res.genre_ids[0]]}</td>
            <td>{res.popularity} </td>
            <td>{res.vote_average}</td>
            <td><button type="button" class="btn btn-danger" onClick={()=>this.deleteMovie(res.id)}>Delete</button></td>
           
          </tr>
          ))
      }
     </tbody>
        </table>
     </div>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
  {
      arrPage.map((res)=>(
          <li className="page-item"><a className="page-link" onClick={()=>this.handlePageChange(res)}>{res}</a></li>
      ))
  }
  </ul>
</nav>
            </div>
         </div>
    </div>
                
            </div>
        )
    }
}
