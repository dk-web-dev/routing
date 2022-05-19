import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';



const Useparam = () => {
    const {movie,id} = useParams();
    const location = useLocation();
    const history = useHistory();
    
    const goback = () => {
        history.push('/');
    }
   return (
       <>
       <div><b>this is Useparams</b>  
            <p>movie name:{movie}</p> 
            <p>and id: {id}</p>
        </div>
        <div>
            <b>this is uselLocation</b>
            <p>my current Path : {location.pathname}</p>
            {location.pathname===`/Useparam/movie/5`?(<button onClick = {goback}>click me</button>):null}
        </div> 
        <p>In our React app sometimes we want to access the
        parameters of the current route in this case useParams hook 
        comes into action. The react-router-dom package has useParams 
        hooks that let you access the parameters of the current route
        </p>
       <p>What I wanted was for a user to see a list of movie genres (action, adventure, comedy, etc.), 
           click on a genre, and be redirected to a list of movies that 
           fell into that genre</p>
       <p>The useLocation hook returns the location object that represents
          the current URL</p>
          <p>he useHistory hook gives you access to the history 
              instance that you may use to navigate.</p>   
       </>
   )
   
}

export default Useparam;