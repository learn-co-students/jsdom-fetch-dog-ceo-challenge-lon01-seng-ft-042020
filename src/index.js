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

function showBreeds(breedsData) {
// debugger
// write in the console breedsData and see how the data has been built
// breedData.message
  for (let key in Object(breedsData.message)) {
    addBreed(key);
  }
}

// another way to literate through object 
// for (let i = 0; i < Object.keys(breedsData.message).length; i++) {
//   addBreed(Object.keys(breedsData.message)[i]);
// }
// }

function addBreed(breed) {
  const breedUl = document.querySelector('#dog-breeds');
  const breedElementLi = document.createElement('li');
  // the line below breed.title??
  breedElementLi.textContent = breed
  breedUl.append(breedElementLi);


// ---------------------------------------------------------
// change color at tag li 
// ---------------------------------------------------------

function changeColorBackground(domNode, color) {
    domNode.style.background = color;
}

breedElementLi.addEventListener('mouseover', function (event) {
    changeColorBackground(breedElementLi, "salmon");
})

function changeColorText(domNode, color) {
    domNode.style.color= color;
}

breedElementLi.addEventListener('click', function (event) {
    changeColorText(breedElementLi, "grey");
})
}


















// another way 

// const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// function parseJSONIntoJSObject(JSONDataAboutBreed) {
//   return JSONDataAboutBreed.json();
// }

// function renderBreeds(breedsArray) {
//   showBreeds(breedsArray);
// }

// function handleError(error) {
//   console.error(error);
//   alert('Error');
// }

// function getAllBreeds() {
//   //debugger
//   fetch(breedUrl)
//     .then(parseJSONIntoJSObject)
//     .then(renderBreeds)
//     .catch(handleError);
// } 
