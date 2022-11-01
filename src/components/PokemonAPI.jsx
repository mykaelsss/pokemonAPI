import React, { useState } from 'react'

const PokemonAPI = () => {
    const [ pokemon, setPokemon ] = useState([])
    const fetchData = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0")
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response.results);
            setPokemon(response.results);
        })
        .catch((err) => {
            console.log(err)
        });
    }
    const wipeData = (idx) =>{
        const filteredPokemon = pokemon.filter((_poke, i) =>  {
            return idx === i
        });
        setPokemon(filteredPokemon)
    }

    const wipePokemon = (idx) =>{
        const filteredPoke = pokemon.filter((_poke, i) =>  {
            return i !== idx
        });
        setPokemon(filteredPoke)
    }

    return (
        <div>
            <h1>PokemonAPI</h1>
            <br/>
            <div className='d-flex gap-3 justify-content-center p-4'>
            <button onClick={fetchData} className='btn btn-outline-warning'>Fetch Pokémon</button>
            <button onClick={wipeData} className='btn btn-outline-danger'> Wipe Pokémon</button>
            </div>
            <div>
                {
                    pokemon.map((poke, idx) => {
                        return(
                            <div key={idx}>
                            <h2> Pokémon: {poke.name}</h2>
                            <button onClick={() => {
                                wipePokemon(idx)
                            }} className='btn btn-outline-success'>Delete Pokémon</button>
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

export default PokemonAPI
