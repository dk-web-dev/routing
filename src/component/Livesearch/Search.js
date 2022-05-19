import React, { useState } from 'react';
import Sresult from './Sresult';

const Search = () => {
    const [img,setImg] = useState("");
    const handerevent =(event) =>
    {
        setImg(event.target.value);
    }
  return(
      <>
       
       <div className="searchbar">
           <input type="text" placeholder="search anything"
                  onChange={handerevent}
                  value={img}
                  />
             <br/><br/>  
            { img==="" ? null:<Sresult name={img} /> }   
       </div>
      </>
  )
}
export default Search;