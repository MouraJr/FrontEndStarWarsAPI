// const Http = new XMLHttpRequest();
// const url = 'https://swapi.dev/api/starships/';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//     const data = Http.responseText
//     console.log(data)
// }

const results = document.querySelector('#results');

// Event listener to seach for spaceship
document.querySelector('#search').addEventListener('click', () => {
    console.log('Hello');
    // When clicked will fetch all starships from API
    // Get the word from input field
    const searchWord = document.querySelector('input').value;
    asyncFetch(searchWord);
    // Getting the value from input
})

// let text = 'Death Star';

async function fetchData(value) {
    // fetch('https://swapi.dev/api/starships/')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    const res = await fetch(`https://swapi.dev/api/starships/?search=${value}`);
    const data = await res.json();
    console.log(data)
}

// fetchData(text);

// fetchData();




