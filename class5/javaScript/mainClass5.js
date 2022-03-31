const BASE_URL = 'https://superheroapi.com/api.php/' + '5387975534559627';

let url = BASE_URL + "/208";

callAPI (url, function (status, response) {

    console.log (response);

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