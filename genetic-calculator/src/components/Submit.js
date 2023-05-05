import React, { useState } from 'react';

export default function Submit(props) {

    const genes = props.genes

    const handleButtonClick = () => {
        
        console.log(genes);
      };
    
      
  return (
    <div>
      <div>
        <button className='submitBtn'  onClick = {handleButtonClick}>Calculate Genetics</button>
      </div>
    </div>
  )
}
