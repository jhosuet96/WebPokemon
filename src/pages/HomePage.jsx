import React, { useContext } from 'react';
import { PokemonList } from '../components/PokemonList';
import { PokemonContext } from '../context/PokemonContext';

export const HomePage = () => {
  const {setUrl, setPokemons,nextUrl,prevUrl} = useContext(PokemonContext)
	
  return (
    <>

      <div className="container-btn-load-more container">
        <div>
          {  prevUrl && <button  className="btn btn-prev" onClick={()=>{
              setPokemons([])
              setUrl(prevUrl) 
          }}>Previous</button>}

          { nextUrl && <button className='btn btn-netx' onClick={()=>{
              setPokemons([])
              setUrl(nextUrl)
          }}>Next</button>}

        </div>            
      </div> 
      <PokemonList />
    </>
  );
};
