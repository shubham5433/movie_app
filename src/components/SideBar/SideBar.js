import React from "react"
import "./SideBar.css"
import { Link } from "react-router-dom"
const SideBar = () => {
    return (
    <div class="wrapper">
      <input type="checkbox" id="btn" hidden />
      <label for="btn" class="menu-btn">
        <i class="fas fa-bars"></i>
        <i class="fas fa-times"></i>
      </label>
      <nav id="sidebar">
        <div class="title">Menu</div>
        <ul class="list-items">
        <li><Link to="/" style={{textDecoration: "none"}}><span style={{color: "white"}}>Home</span></Link></li>
        <li><Link to="/movies/popular" style={{textDecoration: "none"}}><span style={{color: "white"}}>Popular</span></Link></li>
        <li><Link to="/movies/top_rated" style={{textDecoration: "none"}}><span style={{color: "white"}}>Top Rated</span></Link></li>
        <li><Link to="/movies/upcoming" style={{textDecoration: "none"}}><span style={{color: "white"}}>Upcoming</span></Link></li>    
        <li><Link to="/watchlist" style={{textDecoration: "none"}}><span style={{color: "white"}}>Watchlist</span></Link></li>    
        <li><Link to="/watched" style={{textDecoration: "none"}}><span style={{color: "white"}}>Watched</span></Link></li>    
        <li><Link to="/add" style={{textDecoration: "none"}}><span style={{color: "white"}}>Search/Add</span></Link></li>    
        
        
        </ul>
      </nav>
    </div>
    )
}

export default SideBar