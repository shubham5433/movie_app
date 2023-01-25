import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Result = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchList,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchList.find((mov) => mov.id === movie.id);
  let storedMovieWatched = watched.find((mov) => mov.id === movie.id);

  const watchListDisabled = storedMovie? true: storedMovieWatched? true: false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div>     
        <div className="controls">
          <button
          style={{marginRight : "5px"}}
            className="btn"
            disabled={watchListDisabled}
            onClick={() => {
              addMovieToWatchlist(movie);
              console.log("action added");
            }}
          >
            Add to Watchlist
          </button>

          <button
          style={{marginLeft : "5px"}}
            className="btn"
            disabled={watchedDisabled}
            onClick={() => {
              addMovieToWatched(movie);
              console.log("action watched");
            }}
          >
            Add to Watched
          </button>
        </div>
      </div>
   
  );
};
