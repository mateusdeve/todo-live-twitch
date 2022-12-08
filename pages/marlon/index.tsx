import React, { useEffect, useState } from "react";

function Marlon() {
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    const handleGetPokemon = async () => {
      const pok = await fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(
        (response) => response.json()
      );
      console.log("pok ->", pok);
      setPokemon(pok);
    };
    handleGetPokemon();
  }, []);

  return (
    <div>
      {pokemon?.abilities.map((abilidade: any, index: number) => (
        <div key={index}>{abilidade.ability.name}</div>
      ))}
    </div>
  );
}

export default Marlon;
