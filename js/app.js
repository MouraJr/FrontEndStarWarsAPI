// const Http = new XMLHttpRequest();
// const url = 'https://swapi.dev/api/starships/';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//     const data = Http.responseText
//     console.log(data)
// }

const results = document.querySelector('#results');

// Using async function to get data and turn into Json
async function fetchData(value) {
    const res = await fetch(`https://swapi.dev/api/starships/?search=${value}`);
    const data = await res.json();
    console.log(data)
}

// Event listener to seach for spaceship
document.querySelector('#search').addEventListener('click', () => {
    // When clicked will fetch all starships from API
    // Get the word from input field
    const searchWord = document.querySelector('input').value;
    console.log(searchWord);
    fetchData(searchWord);
})




