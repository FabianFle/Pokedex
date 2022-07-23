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
`;}


function openOnePokecard() {
    return /*html*/`

    <div class="single-pokemon">
        <div class="single-poke-top">
            <div class="single-poke-close">
                <img onclick="closePokemon()" src="./img/close.png">
            </div>
            <h1 id="pokemon-name"></h1>
            <h1 id="pokemon-id">#</h1>
        </div>
        <div class="poke-info-container">
            <div class="img-container">
                <img id="pokemon-img" src="">
            </div>
        </div>
    </div>
`;}