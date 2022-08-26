let allpokemons = [];
let currentPokemon;
let start = 1;
let pokemonNumbers = 20;


async function loadPokemon() {
    for (let i = start; i < pokemonNumbers; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let res = await fetch(url);
        currentPokemon = await res.json();
        allpokemons.push(currentPokemon);
        renderPokemonCard(currentPokemon, i);
    }
    document.getElementById('loadingScreen').classList.add('d-none');
    document.body.style.overflow = "auto";
    console.log('Pokemons= ', currentPokemon);
}


async function renderPokemonCard(currentPokemon, i) {
    let pokemonName = firstLetter(currentPokemon['name']);
    let pokeImg = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    let pokeCard = document.getElementById('allpokemon');
    pokeCard.innerHTML += pokeCards(i, pokemonName, currentPokemon, pokeImg);
    loadPokeClasses(i);
}


function loadPokeClasses(i) {
    for (let c = 0; c < currentPokemon['types'].length; c++) {
        let pokeClass = firstLetter(currentPokemon['types'][c]['type']['name']);
        if (c == 0) {
            document.getElementById(`classes${i}`).innerHTML += `<span class="pokemon-card-class card-${pokeClass}">${pokeClass}</span>`;
            document.getElementById(`pokemonCard${i}`).classList.add(`card-${pokeClass}`);
        } else {
            document.getElementById(`classes${i}`).innerHTML += `<span class="pokemon-card-class card-${pokeClass}">${pokeClass}</span>`;
        }
    }
}


function firstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function closePokemon() {
    document.getElementById('onePokemon').classList.add('d-none');
}


async function loadPokeInfo(i) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    currentPokemon = await response.json();
    document.getElementById('onePokemon').innerHTML = openOnePokecard(i);
    document.getElementById('onePokemon').classList.remove('d-none');
    loadInfoDetails(i);
    setPokeInfoType(i);
    setColorPokeInfoBg(i);
    checkSlideNumber(i);
}


function loadingScreenON() {
    document.getElementById('loadingScreen').classList.remove('d-none');
    document.body.style.overflow = "hidden";
}


function loadInfoDetails(i) {
    let infoStats = document.getElementById(`stats${i}`);
    infoStats.innerHTML = '';
    let stats = currentPokemon['stats'];
    for (let j = 0; j < stats.length; j++) {
        let info = stats[j];
        infoStats.innerHTML += showStats(i, j, info);
        loadProcessbarValue(i, j, info);
    }
}


function setPokeInfoType(i) {
    let types = currentPokemon['types'];
    for (let j = 0; j < types.length; j++) {
        let pokeClass = firstLetter(types[j]['type']['name']);
        document.getElementById(`pokeInfoTypes${i}`).innerHTML += `<span id="pokeInfoType${i}${j}">${pokeClass}</span>`;
        setColorInfoType(i, j, pokeClass);
    }
}


function setColorInfoType(i, j, pokeClass) {
    document.getElementById(`pokeInfoType${i}${j}`).classList.add(`card-${pokeClass}`);
}


function setColorPokeInfoBg(i) {
    let pokeClass = firstLetter(currentPokemon['types'][0]['type']['name']);
    document.getElementById(`pokeInfoTop${i}`).classList.add(`card-${pokeClass}`);
}


function checkSlideNumber(i) {
    if (i == 1) {
        document.getElementById(`slideDown`).disabled = true;
        document.getElementById(`slideDown`).style.opacity = 0.3;
    } else {
        document.getElementById(`slideDown`).disabled = false;
    }
}


function slideDown(i) {
    i--;
    loadPokeInfo(i);
}


function slideUp(i) {
    i++;
    loadPokeInfo(i);
}

function loadProcessbarValue(i, j, info) {
    document.getElementById(`processbarValue${i}${j}`).style.width = `${info['base_stat']}%`;
    let pokeClassBar = firstLetter(currentPokemon['types'][0]['type']['name']);
    document.getElementById(`processbarValue${i}${j}`).classList.add(`card-${pokeClassBar}`);
}


async function showMorePokeCards() {
    pokemonNumbers += 19;
    start += 19;
    await loadPokemon();
}