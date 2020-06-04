console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function (JSONDataAboutImages) {
      return JSONDataAboutImages.json();
    })
    .then(function (imagesData) {
      showImages(imagesData);
    })
    .catch(function (error) {
      console.error(error);
      alert('Error');
    });

  // checking if fetch is working at Dev tools/ Network
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(function (JSONDataAboutBreed) {
      return JSONDataAboutBreed.json();
    })
    .then(function (breedsData) {
      showBreeds(breedsData);
    })
    .catch(function (error) {
      console.error(error);
      alert('Error');
    });
});

function showImages(imagesData) {
  // debugger - to check what we have at our data exactly
  for (let i = 0; i < imagesData.message.length; i++) {
    addImage(imagesData.message[i]);
  }
}

function addImage(image) {
  // selecting the target of the operation
  // debugger - to check if all works
  const imageDiv = document.querySelector('#dog-image-container');
  // creating a src tag - the DOM node that will be append to div
  const imageElement = document.createElement('img');
  // define the tag
  imageElement.src = image;
  // add element to div
  // append - all elements, appendChild - one element
  imageDiv.append(imageElement);
}

function showBreeds(breedsData, key, value) {
  // debugger
  for (let [key, value] of Object.entries(breedsData)) {
    addBreed('${key}: ${value}');
  }
}

function addBreed(breed) {
  const breedUl = document.querySelector('#dog-breeds');
  const breedElementLi = document.createElement('li');
  breedElementLi.textContent = breed.title
  breedUl.append(breedElementLi);
}
