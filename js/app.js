const Http = new XMLHttpRequest();
const url = 'https://swapi.dev/api/starships/';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}