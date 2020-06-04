console.log('%c HI', 'color: firebrick')
const imageUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
document.addEventListener("DOMContentLoaded", () => {
    makeImagesHappen(),  makeBreedsHappen()
})

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
const makeBreedsHappen = () => {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(data => renderBreeds(Object.entries(data.message)))
        .catch(error => console.log(error.message));
}

const renderBreeds = (breeds) => {
    const container = document.querySelector('#dog-image-container')
    const list = document.createElement("ul")
    container.append(list)
    breeds.forEach(breed => {
        const item = document.createElement("li")
        item.innerText = `${breed}`
        list.append(item)

        item.addEventListener("click", function (e) {e.target.style.color = "red"})
    })
}

document.addEventListener("click", function(e) {e.target.style.backgroundColor = "pink"})

// const makeThemScared = () => {
//     const button = document.createElement("button")
//     button.innerText = "Click me"
//     const container = document.querySelector('#dog-image-container')
//     container.append(button)

//     button.addEventListener("click", makeImagesHappen)
// }