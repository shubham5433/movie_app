import React from "react";
import './App.css';
import "./Ap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import SearchMovies from './components/searchMovies/searchMovies';
import SideBar from './components/SideBar/SideBar';
/* ******************************* */ 
import Add from "./components/component/Add";
import Watched from "./components/component/Watched";
import WatchList from "./components/component/WatchList";
import { GlobalContextProvider } from "./components/context/GlobalState";

/* ******************************* */ 
function App() {
  return (
    <div className="App">
       <GlobalContextProvider>
        <Router>
          <Header/>
          <SideBar/>
            <Routes>
                <Route path="/" index element={<Home />}></Route>
                <Route path="/movie_app" element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="movies/search" element={<SearchMovies />}></Route>
                <Route path="/watchlist" element={<WatchList/>}></Route>
                <Route path="/watched" element={<Watched/>}></Route>
                <Route path="/add" element={<Add/>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
        </GlobalContextProvider>
    </div>
  );
}

export default App;
