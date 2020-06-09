console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    // Use the key "message" from the JSON object 
    // To access the array of image URLs
    .then(json => renderImages(json.message))
}

// Add image elements to the DOM for each image in the array
function renderImages(imageArray) {
    const div = document.querySelector("#dog-image-container")
    // Loop over imageArray, each element is a URL pointing to a dog image
    for (const element of imageArray) {
    const image = document.createElement("img")
    image.setAttribute("src", element)
    div.appendChild(image)
}}

// Add the list breeds to the page
function fetchBreeds(){
fetch("https://dog.ceo/api/breeds/list/all")
.then(resp => resp.json())
//Returns an array containing all the keys at the top level of the message key
.then(json => renderBreeds(Object.keys(json.message)))
}

function renderBreeds(arrayOfBreeds) {
    const dogBreedsUl = document.querySelector("#dog-breeds")
    for (const element of arrayOfBreeds){
    const breed = document.createElement("li")
    breed.innerHTML = element
    dogBreedsUl.appendChild(breed)
    //The font color of a breed changes on click
    breed.addEventListener("click", function(e){
        breed.style.color = "blue";
    })
}
}

//string.startsWith("a")
//string.startsWith("b")
//string.startsWith("c")
//string.startsWith("d")