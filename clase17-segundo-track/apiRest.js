let offset = 0;

function cargarPokemones() {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No cargo la API");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const pokemonList = data.results;
      return Promise.all(
        pokemonList.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        )
      );
    })
    .then((pokemones) => {
      console.log("Detalles de Pokemon:", pokemones);
      mostrarPropiedades(pokemones);
      offset += 9;
    })
    .catch((err) => {
      console.error("Error:", err);
    });

  function mostrarPropiedades(pokemones) {
    const pokemonesList = document.getElementById("pokemonesList");

    pokemones.forEach((pokemon) => {
      const card = document.createElement("div");
      card.classList.add("pokemonesList");

      const habilidades = pokemon.abilities
        .map((ability) => ability.ability.name)
        .join(", ");

      card.innerHTML = `
            <div class="pokePadre">
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/>
            <p><strong>Habilidades:</strong> ${habilidades}</p>
            </div>
          `;

      pokemonesList.appendChild(card);
    });
  }
}
cargarPokemones();

const cargarMasPokes = document.getElementById("cargarMasPokes");
cargarMasPokes.addEventListener("click", cargarPokemones);
