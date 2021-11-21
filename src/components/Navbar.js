import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div style={{display:"flex",padding:'0.6'}}>
            <Link to="/" style={{textDecoration:'none'}}>  <h1>Movies Web</h1></Link>
          
           <Link to="/favourites" style={{textDecoration:'none'}}> <h2 style={{marginLeft:"2.2rem",marginTop:'1.6rem'}}>Your List </h2></Link>
        </div>
     
    )
}
