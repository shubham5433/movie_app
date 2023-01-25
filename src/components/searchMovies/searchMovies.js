import React ,{ useState } from "react";
import "./searchMovies.css"
import Cards from "../card/card"



export default function SearchMovies(){

   //states- input query,movies
   //useState is used to track 
    const [query,setQuery] = useState("");
    const [movies,setMovies]=useState([]);
    const [showResults, setShowResults] = React.useState(false)
    const onClick1 = () => setShowResults(true);
    const onClick2 = () => {
        setShowResults(false);
        setQuery("");
    }
    
    
    const searchMovies =async(e)=>{
        e.preventDefault();
       // console.log("submit");
        
        const url=`https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&query=${query}&include_adult=false`;
        

        try{
            const res = await fetch(url);
            const data= await res.json();
            //console.log(data.results);
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <>      
        <form className="form" onSubmit={searchMovies}>
        <input type="text" 
        name="query" 
        placeholder="Search here"
        value={query} 
        onChange={(e)=>setQuery(e.target.value)}
        />
        <button className="submit-search" type="submit" onClick={onClick1} ><i className="fa fa-search fa-lg"></i></button>
        </form>
         
        { showResults ? <div className="movie__list">
            
            <h2 className="list__title">{(query).toUpperCase()}</h2>
            <button className="close" onClick={onClick2}><i className="fa fa-times fa-2x"></i></button>

            <div className="list__cards" onClick={onClick2}>
                {
                    movies.filter(movie=>movie.poster_path).map(movie => (
                        <Cards movie={movie}  />
                    ))
                }
            </div>
            <div style={{height: "500px"}}>
      </div>
        </div>: null }
        
        

        </>
    )
}