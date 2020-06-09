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
    const breedUl = document.querySelector("#dog-breeds")

    for (const breed of arrayOfBreeds){
    const breedLi = document.createElement("li")
    breedLi.innerHTML = breed
    //   breedUl.appendChild(breedLi)

    //Find the dropdown menu for letter selection & add a change event listener
    dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener("change", function(event) {
    //Store the value of the letter that was selected in chosenLetter
    const chosenLetter = dropdown.options[dropdown.selectedIndex].value ;
    // If the breed starts with the letter that was selected by the user
    //Add that breed to the list displayed to the user
    if (breed.startsWith(chosenLetter)) {
        breedUl.appendChild(breedLi)}
        // breedUl.hasChildNodes()? breedUl.removeChild() & breedUl.appendChild(breedLi) : breedUl.appendChild(breedLi)
   })
  
    // The font color of a breed changes on click
    breedLi.addEventListener("click", function(e){
        breedLi.style.color = "blue";
    })
} }

    // if (element.startsWith(chosenLetter){ 
    //     if (dogBreedsUl.childElementCount == 0) {
    //     dogBreedsUl.appendChild(breed)
    // } 
    // else {dogBreedsUl.appendChild(breed) }
    // }

    // breedUl.childElementCount == 0?  breedUl.appendChild(breedLi) : breedUl.removeChile(); breedUl.appendChild(breedLi)