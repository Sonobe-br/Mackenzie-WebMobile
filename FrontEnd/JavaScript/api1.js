function getJSON (get, callback) {

    let xhr = new XMLHttpRequest ();
    xhr.open ('get', url, true);
    xhr.respenseType = 'json';
    xhr.onLoad = function () {

        if (xhr.status === 200) {
            callback(xhr.status, xhr.response);
        
        } else {
            alert ('Problemas ao tentar se conectar com o servidor.');

        }

    }
    xhr.send ();
}