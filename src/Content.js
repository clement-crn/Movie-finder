
import {useEffect,useState} from 'react';
function Content() {

    const [movie, setMovie] = useState({});
    const [search, setSearch] = useState('');
    const API_KEY = "3831191a";
    const url = `http://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`;
  
    const getMovie = async () => {
      try {
         const response = await fetch(url);
          const data = await response.json()
          setMovie(data);
       } catch (e) {
           console.error(e.toString);
       } 
    }
    useEffect(()=> {
      getMovie(); //fetch data from api
   }, []);
  
   const onInputChange = e => {
    setSearch(e.target.value);
  }
  
      return(
        
        <div>
          <input className="barre" type="text" value={search} onChange={onInputChange}/>
          <button type="submit" onClick={getMovie}>Search</button>
          <div className='principal'>
          <img src={movie.Poster} alt=""/>
          <h4>Titre: {movie.Title}</h4>
          <p>Année: {movie.Year}</p>
          <p>Réalisateur: {movie.Writer}</p>
        </div>
        </div>
     );
  }

  export default Content;