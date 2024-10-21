const fs = require("fs");

async function generateJsonDB() {
  // TODO: fetch data pokemon api dan buatlah JSON data sesuai dengan requirement.
  // json file bernama db.json. pastikan ketika kalian menjalankan npm run start
  // dan ketika akses url http://localhost:3000/pokemon akan muncul seluruh data
  // pokemon yang telah kalian parsing dari public api pokemon
  try{
    const pokemonApiURL = "https://pokeapi.co/api/v2/pokemon/?limit=100";
    const getPokemon = await fetch(pokemonApiURL).then((res) => res.json());
    const pokemonArray = [];

    for (let i = 0; i < getPokemon.results.length; i++) {
      const pokemonInfo = getPokemon.results[i];
      const pokemonDetail = await fetch(pokemonInfo.url).then((res) => res.json());
      const pokemonSpecies = await fetch(pokemonDetail.species.url).then((res) => res.json());
      const pokemonEvolution = await fetch(pokemonSpecies.evolution_chain.url).then((res) => res.json());
      const pokemonEvolutionChain = [pokemonEvolution.chain.species.name];
      let pokemonEvolveTo = pokemonEvolution.chain.evolves_to[0];
      while (pokemonEvolveTo) {
        pokemonEvolutionChain.push(pokemonEvolveTo.species.name);
        pokemonEvolveTo = pokemonEvolveTo.evolves_to[0];
      }

      const pokemon = {
        id: pokemonDetail.id,
        name: pokemonDetail.name,
        types: pokemonDetail.types.map((ty) => ty.type.name),
        abilities: pokemonDetail.abilities.map((ab) => ab.ability.name),
        height: pokemonDetail.height,
        weight: pokemonDetail.weight,
        cries: pokemonDetail.cries,
        pokemonEvolutionChain
      };
      pokemonArray.push(pokemon);
    }
    console.log(pokemonArray);
    fs.writeFileSync("db.json", JSON.stringify({pokemon: pokemonArray}, null, 2), "utf-8");

  } catch(error) {
    console.error("Gagal Mengambil Data Pokemon",error)
  }
}

generateJsonDB();
