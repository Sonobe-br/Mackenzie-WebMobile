const BASE_URL = 'https://superheroapi.com/api.php/' + '5387975534559627';

let url = BASE_URL + "/208";

callAPI (url, function (status, response) {

    console.log (response);

});

function getJSON (get, callback) {

    let xhr = new XMLHttpRequest ();
    xhr.open ('get', url, true);
    xhr.respenseType = 'json';
    xhr.onload = function () {

        if (xhr.status === 200) {
            callback(xhr.status, xhr.response);
        
        } else {
            alert ('Problemas ao tentar se conectar com o servidor.');

        }

    }
    xhr.send ();
}