// const Http = new XMLHttpRequest();
// const url = 'https://swapi.dev/api/starships/';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//     const data = Http.responseText
//     console.log(data)
// }

const results = document.querySelector('#results');

let text = 'r2';

async function fetchData(value) {
    // fetch('https://swapi.dev/api/starships/')
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    const res = await fetch(`https://swapi.dev/api/people/?search=${value}`);
    const data = await res.json();
    console.log(data)
}

fetchData(text);

// fetchData();

// Event listener to seach for spaceship
// document.querySelector('#search').addEventListener('click', () => {
//     // When clicked will fetch all starships from API
//     asyncFetch('starships');
//     // Getting the value from input
//     // const searchWord = document.querySelector('input').value;

//     // console.log(data);
// })


