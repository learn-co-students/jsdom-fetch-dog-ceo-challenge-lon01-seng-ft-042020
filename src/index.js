const imageUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
document.addEventListener("DOMContentLoaded", () => {
    makeImagesHappen(),  makeBreedsHappen(), blueBackground(), whiteBackground()
})

// ---------------------------------------------------------------------
// Allow Images to render 
// ---------------------------------------------------------------------
const makeImagesHappen = () => {
    fetch(imageUrl)
        .then(resp => resp.json())
        .then(data => renderImages(data.message))
        .catch(error => console.log(error.message));
}

const renderImages = (urls) => {
    const container = document.querySelector('#dog-image-container')
    urls.forEach(image => {
        const pic = document.createElement("img")
        pic.src = image
        pic.width = 300
        pic.height = 230
        container.append(pic)
    })
}

// ---------------------------------------------------------------------
// Allow Breeds to render 
// ---------------------------------------------------------------------

const makeBreedsHappen = () => {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => renderBreeds(Object.keys(data.message)))
        .catch(error => console.log(error.message));
}

const renderBreeds = (breeds) => {
    const container = document.querySelector('#dog-image-container')
    const list = document.createElement("ul")
    container.append(list)
    breeds.forEach(breed => {
        const item = document.createElement("li")
        item.innerText = `${breed}`
        item.style.color = "salmon"
        list.append(item)
        item.style.fontSize = "x-small"

        item.addEventListener("click", function (e) {e.target.style.color = "red"})
    })
}

// ---------------------------------------------------------------------
// Change Background Colour Backgrounds
// ---------------------------------------------------------------------

const blueBackground = () => {
    const bb = document.createElement("button");
    const container = document.querySelector('#dog-image-container');
    container.append(bb)
    bb.innerText = "Blue Background Colour";
    bb.addEventListener('click', (e) => {document.body.style.backgroundColor = "blue"})
}

const whiteBackground = () => {
    const wb = document.createElement("button");
    const container = document.querySelector('#dog-image-container');
    container.append(wb)
    wb.innerText = "White Background Colour";
    wb.addEventListener('click', (e) => {document.body.style.backgroundColor = "white"})
    }


