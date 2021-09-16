// https://geraldomoura-firstfrontend-swapi.surge.sh/

// Using async function to get data and turn into Json
async function fetchData(url) {
    // Await is making sure the promise is loaded before moving to next line
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    // displayResults(data);
}

function displayResults(data) {
    const results = document.querySelector('#results');
    let output = '';

    if (data.count === 0) {
        output = `
        <div class="col-sm-12">
            <div class='card p-4 m-3'>
                <h4 class='card-header'>No Results</h4>
                <div class='card-body text-center'>
                    <p>No Spaceship with given name.</p>
                </div>
            </div>    
        </div> 
        `
    }

    data.results.forEach(element => {
        output += `
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
                <div class='card p-4 m-3'>
                    <h4 class='card-header'>${element.name}</h4>
                    <div class='card-body text-start'>
                        <p class='card-text'>Model: ${element.model}</p>
                        <p class='card-text'>Manufacturer: ${element.manufacturer}</p>
                        <p class='card-text'>Max Atmosphering Speed: ${element.max_atmosphering_speed}</p>
                        <p class='card-text'>Crew: ${element.crew}</p>
                        <p class='card-text'>Passengers: ${element.passengers}</p>
                        <p class='card-text'>Cargo Capacity: ${element.cargo_capacity}</p>
                        <p class='card-text'>Consumables: ${element.consumables}</p>
                        <p class='card-text'>Hyperdrive Rating: ${element.hyperdrive_rating}</p>
                        <p class='card-text'>Starship Class: ${element.starship_class}</p>
                    </div>
                </div>    
            </div>    
        `
    });

    results.innerHTML = output;
}

// Event listener to seach for spaceship
const btnSearch = (btnToSearch, inputToSearch) => document.querySelector(btnToSearch).addEventListener('click', () => {
    // When clicked will fetch all starships from API
    // Get the word from input field
    const searchWord = document.querySelector(inputToSearch).value;
    // Declare variable for url
    let url = '';
    if (inputToSearch === '#inputSearchStarships') {
        url = `https://swapi.dev/api/starships/?search=${searchWord}`;
    };

    if (inputToSearch === '#inputSearchCharacters') {
        url = `https://swapi.dev/api/people/?search=${searchWord}`;
    };

    if (inputToSearch === '#inputSearchPlanets') {
        url = `https://swapi.dev/api/planets/?search=${searchWord}`;
    };

    // Invoke data with fetch function
    fetchData(url);
});

const inputSearch = (btnToSearch, inputToSearch) => document.querySelector(btnToSearch).addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        // When enter will fetch all starships from API
        // Get the word from input field
        const searchWord = document.querySelector(inputToSearch).value;
        const url = `https://swapi.dev/api/starships/?search=${searchWord}`;
        fetchData(url);
    }
});

// Firing the Searching Starships
btnSearch('#searchBtnStarships', '#inputSearchStarships');
inputSearch('#searchBtnStarships', '#inputSearchStarships');

// Firing the Searching Characters
btnSearch('#searchBtnCharacters', '#inputSearchCharacters');
inputSearch('#searchBtnCharacters', '#inputSearchCharacters');

// Firing the Searching Planets
btnSearch('#searchBtnPlanets', '#inputSearchPlanets');
inputSearch('#searchBtnPlanets', '#inputSearchPlanets');