async function getPokemon () {
  const getPokemonName = document.getElementById("getName").value.toLowerCase();
  const getPokemonImg = document.getElementById("pokemonImg");
  const name = document.getElementById ("name");
  try {
 const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${getPokemonName}`);
 if (!response.ok) {
  throw new Error("Could Not fecth Resourch")
  
 }

 const data = await response.json();
 const sprite = data.sprites.front_default;
 getPokemonImg.src = sprite;
 getPokemonImg.style.display = "block";
 name.innerHTML = data.name;
 console.log(data);
 
 
 }
 catch (wrong) {
  console.log(wrong.error);
  
 }

 }
//  getPokemon()
// https://pokeapi.co/api/v2/pokemon/