const BASE_URL = 'https://superheroapi.com/api.php/5387975534559627'; 
const API_KEY = ''; /* Token */
let url = BASE_URL + "/341";

/* Posição bloco1 */

let minhaCarta = [12, 33, 44];
let cartaSelecionada = 12;

window.onload = function () {

    this.getAndShowHero(getRandom ());
};

function getRandom () {

    return Math.floor (Math.random () * 731) + 1;

}

function getAndShowHero () {

    let url = BASE_URL + "/" + API_KEY + "/" + id;

    callAPI (url, function (status, data) {
        let name = data.name
        let intelligence = data.powerstats.intelligence
        let speed = data.powerstats.speed
        let durability = data.powerstats.durability
        let power = data.powerstats.power
        let combat = data.powerstats.combat
        let image = data.powerstats.image

        document.getElementById('content').innerHTML += 
        "<article> <img src ='" + image + "'/>" + 
        "<h1>" + name + "</h1>" + 
        "<p>Intelligence:   <span style='width:" + intelligence +  "%; background-color: #F9B32F'></span></p>" +  
        "<p>Speed:          <span style='width:" + speed +         "%; background-color: #22A7F0'></span></p>" + 
        "<p>Durability:     <span style='width:" + durability +    "%; background-color: #3EDC81'></span></p>" + 
        "<p>Power:          <span style='width:" + power +         "%; background-color: #AB69C6'></span></p>" + 
        "<p>Combat:         <span style='width:" + combat +        "%; background-color: #9CAAB9'></span></p>" + 
        "</article>";

    });

};

/* Posição bloco1 */

callAPI (url, function (status, response) {

    console.log (response, status);

}); 

function callAPI (url, callback) {

    let xhr = new XMLHttpRequest ();
    xhr.responseType = 'json';
    xhr.open ('GET', url, true);
    xhr.onload = function () {

        if (xhr.status === 200) {
            callback(xhr.status, xhr.response);
        
        } else {
            alert ('Problemas ao tentar se conectar com o servidor.');

        }

    }
    xhr.send ();
}