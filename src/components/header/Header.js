import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import SearchMovies from "../searchMovies/searchMovies"
import img from "../images/logo3.png"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src={img} /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <SearchMovies/>
            </div>
        </div>
    )
}

export default Header