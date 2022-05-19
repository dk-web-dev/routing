import React from 'react';

const Sresult = (props) => {
      
    //template literals
  const liveImg = `https://source.unsplash.com/600x400?${props.name}`;
    return(
      <>
      <div>
        <img src={liveImg} alt="livesearch-img" />
        </div>
      </>
  )
}

export default Sresult;

