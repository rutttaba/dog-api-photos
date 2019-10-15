'use strict';



function getNewUrl(num) {
    let url = 'https://dog.ceo/api/breeds/image/random/' ;
    return url + num;
}


function getDogImage(num) {
    fetch(getNewUrl(num))
        .then(response => response.json())
        .then(responseJson => 
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let num = parseInt($('#number').val());
        getDogImage(num);
       
    });
}

function displayResults(responseJson) {
    console.log(responseJson);
    $('.results-img').replaceWith(
        photoCollection(responseJson)
    );
    $('.results').removeClass('hidden');
}


function photoCollection(responseJson) {
    let arr = responseJson.message;
    return arr.map(el => `<img src="${el}" class="results-img">`).join(" ");
}


$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
    
});