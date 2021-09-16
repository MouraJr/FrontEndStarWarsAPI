// https://geraldomoura-firstfrontend-swapi.surge.sh/

// Using async function to get data and turn into Json
async function fetchData(url, searchWord) {
    // Await is making sure the promise is loaded before moving to next line
    const res = await fetch(url);
    const data = await res.json();
    console.log(url);
    if (url === `https://swapi.dev/api/starships/?search=${searchWord}`) {
        displayStarshipsResults(data);
    };

    if (url === `https://swapi.dev/api/people/?search=${searchWord}`) {
        displayPeopleResults(data);
    };

    if (url === `https://swapi.dev/api/planets/?search=${searchWord}`) {
        displayPlanetsResults(data);
    };
}

function displayStarshipsResults(data) {
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

function displayPeopleResults(data) {
    const results = document.querySelector('#results');
    let output = '';

    if (data.count === 0) {
        output = `
        <div class="col-sm-12">
            <div class='card p-4 m-3'>
                <h4 class='card-header'>No Results</h4>
                <div class='card-body text-center'>
                    <p>No Character with given name.</p>
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
                        <p class='card-text'>Height: ${element.height}</p>
                        <p class='card-text'>Mass: ${element.mass}</p>
                        <p class='card-text'>Hair Color: ${element.hair_color}</p>
                        <p class='card-text'>Skin Color: ${element.skin_color}</p>
                        <p class='card-text'>Eye Color: ${element.eye_color}</p>
                        <p class='card-text'>Birth Year: ${element.birth_year}</p>
                        <p class='card-text'>Gender: ${element.gender}</p>
                    </div>
                </div>    
            </div>    
        `
    });

    results.innerHTML = output;
}

function displayPlanetsResults(data) {
    const results = document.querySelector('#results');
    let output = '';

    if (data.count === 0) {
        output = `
        <div class="col-sm-12">
            <div class='card p-4 m-3'>
                <h4 class='card-header'>No Results</h4>
                <div class='card-body text-center'>
                    <p>No Character with given name.</p>
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
                        <p class='card-text'>Rotation Period: ${element.rotation_period}</p>
                        <p class='card-text'>Orbital Period: ${element.orbital_period}</p>
                        <p class='card-text'>Diameter: ${element.diameter}</p>
                        <p class='card-text'>Gravity: ${element.gravity}</p>
                        <p class='card-text'>Terrain: ${element.terrain}</p>
                        <p class='card-text'>Surface Water: ${element.surface_water}</p>
                        <p class='card-text'>Population: ${element.population}</p>
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
    fetchData(url, searchWord);
});

const inputSearch = (btnToSearch, inputToSearch) => document.querySelector(btnToSearch).addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        // When enter will fetch all starships from API
        // Get the word from input field
        const searchWord = document.querySelector(inputToSearch).value;
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