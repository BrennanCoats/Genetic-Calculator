import React, { useState } from 'react';
import Multiselect from "multiselect-react-dropdown";

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
          placeholder="Select Genes"
          style={{
            chips: {
              background: 'light blue'
            },
            multiselectContainer: {
              height: '300px'
            },
            searchBox: {
              margin: '10px'
            }
          }}
        />
      </div>
      <div>    
        <label>Female</label>
        <Multiselect
          isObject={false}
          onRemove={(event) => {console.log(event);}}
          onSelect={(event) => {console.log(event);}}
          options={genes}
          placeholder="Select Genes"
          style={{
            chips: {
              background: 'light blue'
            },
            multiselectContainer: {
              height: '300px'
            },
            searchBox: {
              margin: '10px'
            }
          }}
          />
      </div>
    </section>
  )
}
