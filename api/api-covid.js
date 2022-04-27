window.onload = function() {
    
    callAPI();

}

function callAPI() {

    let xmlhttp = new XMLHttpRequest();
    let url = "https://api.covid19api.com/dayone/country/brazil";

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            let myArr = JSON.parse(xmlhttp.responseText);
            getResponse(myArr);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function getResponse(resp) {
    
    for (let i = 0; i < resp.length; i++) {
        let data = new Date(resp[i].Date);
        let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();

        document.getElementById("box").innerHTML += "<ul class='box-content'>" +
        "<li>Cidade: " + resp[i].City + "</li>" +
        "<li>UF: " + resp[i].CityCode + "</li>" +
        "<li>Casos confirmados: " + resp[i].Confirmed + "</li>" +
        "<li>Mortes: " + resp[i].Deaths + "</li>" +
        "<li>Recuperados: " + resp[i].Recovered + "</li>" +
        "<li>Ativos: " + resp[i].Active + "</li>" +
        "<li>Data: " + dataFormatada + "</li>" +
        "</ul>";
    
    }
}