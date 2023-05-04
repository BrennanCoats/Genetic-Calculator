import React, { useEffect, useState } from 'react';
import theHead from './components/head';
import Multiselect from "multiselect-react-dropdown";



function App() {

  const [genes, setGenes] = useState(["Albino", "Melanistic", "Leucistic", "Dwarf", "Giant"])

  return (
    <>
      <div>    
        <Multiselect
          isObject={false}
          onRemove={(event) => {console.log(event);}}
          onSelect={(event) => {console.log(event);}}
          options={genes}
          placeholder="Select Male Genes"
          style={{
            chips: {
              background: 'light blue'
            },
            multiselectContainer: {
              color: 'red'
            },
            searchBox: {
              border: 'none',
              'border-bottom': '1px solid blue',
              'border-radius': '0px',
              width: '15%'
            }
          }}
        />
      </div>
      <div>    
        <Multiselect
          isObject={false}
          onRemove={(event) => {console.log(event);}}
          onSelect={(event) => {console.log(event);}}
          options={genes}
          placeholder="Select Female Genes"
          style={{
            chips: {
              background: 'light blue'
            },
            multiselectContainer: {
              color: 'red'
            },
            searchBox: {
              border: 'none',
              'border-bottom': '1px solid blue',
              'border-radius': '0px',
              width: '15%'
            }
          }}
          />
      </div>
    </>
    
      
  );
}

export default App;
