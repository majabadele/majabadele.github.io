//reference parts of HTML in variables
var franklin = document.querySelector('div.town-events');


//JSON url stored into variable
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//create and open request
var request = new XMLHttpRequest();
request.open('GET', requestURL);

//get response and convert from JSON to Javascript
request.responseType = 'json';
request.send();

//waiting for response and dealing with it when it arrives
request.onload = function () {
    var cityInfo = request.response;
    displayCity(cityInfo);
}


//create city information sections
function displayCity(jsonObj) {
    var city = jsonObj['towns'];

    for (var i = 0; i < city.length; i++) {
        var myPara = document.createElement('p');
        var myList = document.createElement('ul');

        myPara.textContent = 'Events:';

        var events = city[i].events;
        for (var j = 0; j < events.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = events[j];
            myList.appendChild(listItem);
        }

        myPara.appendChild(myList);
        if (city[i].name == "Franklin") {
            franklin.appendChild(myPara);
        }
    }
}