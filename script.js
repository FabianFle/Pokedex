let allpokemons = [];
let currentPokemon;
let startNumber = 1;
let pokemonNumbers = 100;


async function loadPokemon() {
    for (let i = 1; i < pokemonNumbers; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let res = await fetch(url);
        currentPokemon = await res.json();
        allpokemons.push(currentPokemon);
        // console.log(currentPokemon);
        renderPokemonCard(currentPokemon, i);
    }
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


function searchPokemon() {
    let search = document.getElementById("search-field").value;
    search = search.toLowerCase();
    console.log(search);
    for (let i = 1; i < pokemonNumbers; i++) {
        let pokemonCard = document.getElementById(`pokemonCard${i}`);
        let pokemonName = document.getElementById(`pokemonName${i}`).innerHTML;
        let pokemonId = document.getElementById(`pokemonId${i}`).innerHTML;
        if (!pokemonName.includes(search) || !pokemonId.includes(search)) {
            pokemonCard.classList.add('d-none');
        }
        else {
            if (pokemonCard.classList.contains('d-none')) {
                pokemonCard.classList.remove('d-none');
            }
        }
    }
}


function openResponsivMenu() {
    document.getElementById('responsMenu').classList.remove('nav-header')
    document.getElementById('responsMenu').classList.add('navHeaderRespons')
    document.getElementById('closeMenu').classList.remove('d-none')
    document.getElementById('openMenu').classList.add('d-none')
    document.getElementById('h1').classList.remove('d-none')
    document.getElementById('search-field').classList.remove('d-none')
}

function closeResponsMenu() {
    document.getElementById('responsMenu').classList.add('nav-header')
    document.getElementById('responsMenu').classList.remove('navHeaderRespons')
    document.getElementById('closeMenu').classList.add('d-none')
    document.getElementById('openMenu').classList.remove('d-none')

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
    loadInfoDetails(i);
    setPokeInfoType(i);
    setColorPokeInfoBg(i);
    checkSlideNumber(i);
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
        let pokeClass = types[j]['type']['name'];
        document.getElementById(`pokeInfoTypes${i}`).innerHTML += `<button id="pokeInfoType${i}${j}">${pokeClass}</button>`;
        setColorInfoType(i, j, pokeClass);
    }
}


function setColorInfoType(i, j, pokeClass) {
    document.getElementById(`pokeInfoType${i}${j}`).classList.add(`card-${pokeClass}`);
}


function setColorPokeInfoBg(i) {
    let pokeClass = currentPokemon['types'][0]['type']['name'];
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
    document.getElementById(`processbarValue${i}${j}`).style.width = `${info['base_stat']}px`;
}