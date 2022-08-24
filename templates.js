function pokeCards(i, pokemonName, currentPokemon, pokeImg) {
    return /*html*/`

    <a href="#" class="pokemonCardLink">
        <div onclick="loadPokeInfo(${i})" class="pokemon-card" id="pokemonCard${i}">
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
    </a>
`;
}


function openOnePokecard(i) {

    let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`;

    return /*html*/`
    <div class="center"> 
        <button onclick="slideDown(${i})" id="slideDown" class="slideButton1"><img src="img/arrowLeft.png"></button>

        <div class="pokeInfoCard">
        <img class="closePokemon" onclick="closePokemon()" src="./img/close.png">
                <div id="pokeInfoTop${i}" class="pokeInfoTop">
                    <div>
                        <div class="h1HeadlineOpenPokeCard">
                            <h1> #${currentPokemon['id']} </h1>
                            <h1>${currentPokemon['name']}</h1>
                        </div>
                        <div id="pokeInfoTypes${i}" class="pokeInfoTypes"></div>
                    </div>
                    <img id="pokeInfoImg" class="pokeInfoImg" alt="Image not found" loading="lazy" src= ${url}>
                </div>

                <div class="pokeInfoDetails_bg">

                    <div id="infoDetails" class="infoDetails">
                        <h1>Base Stats</h1>
                        <div id="stats${i}" class="stats"></div>
                    </div>
                </div>
            </div>

        <button onclick="slideUp(${i})" class="slideButton2"><img src="img/arrowRight.png"></button>
    </div>
`;
}

function showStats(i, j, info) {
    return /*html*/ `
    <div class="infoStats">
        <div id="infoTitle"> ${info['stat']['name']}</div>
        
        <div class="baseStat">
            <div class="processbar">
                <div id="processbarValue${i}${j}" class="processbarValue">
                    <span>${info['base_stat']}</span>
                </div>
            </div>
        </div>
    </div>
    `
}