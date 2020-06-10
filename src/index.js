// all works apart from the fact that the drop down doesn't filter the current page
// so you have to comment out 'a' from the select options and refresh to see it working
console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    // when returning here I get "Illegal return statement" and an error
    // also ends  the statement so cant be right?
    fetch(imgUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (json){
        addDogstoDOM(json);
    });

    fetch(breedUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json){
        addBreedstoDOM(json);
    });
});

function addDogstoDOM(dogsArrayJson) {
    // find the dogs-image-container
    const dogsImageContainer = document.querySelector('#dog-image-container');
    // make the array of dog images
    const dogsArray = dogsArrayJson.message;
    // go through every dog in the array
    for (const dog in dogsArray) {
        //  make an img tag with the dog image src
        const dogImg = document.createElement('img');
        dogImg.setAttribute("src",dogsArray[dog]);
        dogImg.setAttribute("alt", "random dog");
        // append every img to the dog-image-container div
        dogsImageContainer.appendChild(dogImg);
    };
    
}

function addBreedstoDOM (breedsObjectJson) {
    // find dog breeds Ul
    const dogBreedsUl = document.querySelector('#dog-breeds');
    // go through all dog breeds
    const fullDogBreeds = dogBreedsArray(breedsObjectJson);
    //make an li for every dog breed & append to UL
    for (const i in fullDogBreeds) {
        const dogLi = document.createElement("li");
        dogLi.textContent = fullDogBreeds[i];
        addEventListenerToDogLi(dogLi);
        dogBreedsUl.appendChild(dogLi);
    };
}

function dogBreedsArray(breedsObjectJson) {
    finalArray = [];
    const breedsObject = breedsObjectJson.message;
    const checkedBreedsObject = checkBreeds(breedsObject);
    // go through each main breed
    for (const mainBreed in checkedBreedsObject) {
        const mainBreedArray = breedsObject[mainBreed];
        
        // go through every sub breed per main breed 
        for (const mainBreedIndex in mainBreedArray) {
            const subBreed = mainBreedArray[mainBreedIndex];
            // make the full breed name
            const fullName = subBreed.concat(` ${mainBreed}`);
            // add fullName to finalArray
            finalArray.push(fullName);
        };
    };
    return finalArray;
}

function addEventListenerToDogLi(dogLi) {
    dogLi.addEventListener("click", function(e) {
        e.target.style.color = "red";
    })
}

function checkBreeds(breedsObject) {
    //find out what letter is currently showing
    const currentLetter = document.getElementById("breed-dropdown").value;
    const newBreedsObject = {}
    //go through each key and add the key value pairs where keys are present to new object
    for (const breed in breedsObject) {
        const breedFirst = breed[0]
        if (breedFirst == currentLetter) {
            newBreedsObject[breed] = breedsObject[breed]
        }
    };
    return newBreedsObject
}