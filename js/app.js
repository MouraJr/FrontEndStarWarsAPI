// https://geraldomoura-firstfrontend-swapi.surge.sh/

// Using async function to get data and turn into Json
async function fetchData(value) {
    // Await is making sure the promise is loaded before moving to next line
    const res = await fetch(`https://swapi.dev/api/starships/?search=${value}`);
    const data = await res.json();
    displayResults(data, value);
    console.log(data)
}

function displayResults(data, value) {
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
            <div class="col-sm-6">
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
                        <p class='card-text'>Crew: ${element.crew}</p>
                    </div>
                </div>    
            </div>    
        `
    });

    results.innerHTML = output;
}

// Event listener to seach for spaceship
document.querySelector('#search').addEventListener('click', () => {
    // When clicked will fetch all starships from API
    // Get the word from input field
    const searchWord = document.querySelector('input').value;
    fetchData(searchWord);
});

document.querySelector('#inputSearch').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        // When clicked will fetch all starships from API
        // Get the word from input field
        console.log('works')
        const searchWord = document.querySelector('input').value;
        fetchData(searchWord);
    }
});