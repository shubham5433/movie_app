import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import img from "../images/logo3.png"
import SearchMovies from "../searchMovies/searchMovies"

const Header = () => {
    return (
        <div className="header" id="hidden-mobile">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" alt="png" src={img} /></Link>
                <Link to="/" style={{textDecoration: "none"}}><span class="hover-underline-animation">Home</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span class="hover-underline-animation">Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span class="hover-underline-animation">Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span class="hover-underline-animation">Upcoming</span></Link>
                <div class="dropdown">
                <button class="dropbtn"><span class="hover-underline-animation">My list</span></button>
                <div class="dropdown-content">
                <ul>    
                <li><Link to="/watchlist" style={{textDecoration: "none"}}>Watchlist</Link></li>    
                <li><Link to="/watched" style={{textDecoration: "none"}}>Watched</Link></li>    
                <li><Link to="/add" style={{textDecoration: "none"}}>Search/Add</Link></li>    
                </ul>
                </div>
                </div>

                <SearchMovies/>
                
               
            </div>
        </div>
    )
}

export default Header