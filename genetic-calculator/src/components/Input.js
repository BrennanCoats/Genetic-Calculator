import React, { useState } from 'react';
import Multiselect from "multiselect-react-dropdown";
import Submit from "./Submit";

export default function Input() {

  const [genes, setGenes] = useState(["Albino", "Melanistic", "Leucistic", "Dwarf", "Giant"])

  return (    
    <section className='mainPage'>
      <div className='male'>  
      <label>Male</label>  
        <Multiselect
          isObject={false}
          onRemove={(event) => {console.log(event);}}
          onSelect={(event) => {console.log(event);}}
          options={genes}
          placeholder="select genes"
          style={{
            chips: {
              background: 'light blue'
            },
            multiselectContainer: {
              height: '310px'
            },
            searchBox: {
              margin: '10px',
              width: '350px',
              height: '45px'
            }
          }}
        />
      </div>
      <div className='female'>    
        <label>Female</label>
        <Multiselect
          isObject={false}
          onRemove={(event) => {console.log(event);}}
          onSelect={(event) => {console.log(event);}}
          options={genes}
          placeholder="select genes"
          style={{
            chips: {
              background: 'light blue'
            },
            multiselectContainer: {
              height: '310px'
            },
            searchBox: {
              margin: '10px',
              width: '350px',
              height: '45px'
            }
          }}
          />
      </div>
      <div>
        <Submit genes = {genes} />
      </div>
    </section>
  )
}
