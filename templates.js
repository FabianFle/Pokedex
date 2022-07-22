function pokeCards(i, pokemonName, currentPokemon, pokeImg) {
    return /*html*/`

<div onclick="openPokemon()" class="pokemon-card" id="pokemonCard${i}">
    <div class="pokeBackground">        
        <div class="info-top">
            <h2 class="info-top-id" id="pokemonName${i}">${pokemonName}</h2> 
            <h2 class="info-top-id" id="pokemonId${i}">#${currentPokemon['id']}</h2>
        </div>        
        <div class="info-bottom">
            <div id="classes${i}"></div>
        </div>
        <img src="${pokeImg}">   
    </div>     
</div>
    `;
}

function openOnePokecard(i, pokemonName, currentPokemon, pokeImg) {

}