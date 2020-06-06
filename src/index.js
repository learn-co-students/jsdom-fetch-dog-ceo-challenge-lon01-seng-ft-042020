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

  // CHECK if fetch is working at Dev tools/ Network
  function parseJSONIntoJSObject(JSONDataAboutBreeds) {
    return JSONDataAboutBreeds.json();
  }

  function renderBreeds(breedsData) {
    showBreeds(breedsData);
  }

  function handleError(error) {
    console.error(error);
    alert('YIKES!');
  }

  const breedUrl = 'https://dog.ceo/api/breeds/list/all';

  fetch(breedUrl)
    .then(parseJSONIntoJSObject)
    .then(renderBreeds)
    .catch(handleError);
  
  // ANOTHER WAY
  // fetch('https://dog.ceo/api/breeds/list/all')
  //   .then(function (JSONDataAboutBreed) {
  //     return JSONDataAboutBreed.json();
  //   })
  //   .then(function (breedsData) {
  //     showBreeds(breedsData);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //     alert('Error');
  //   });
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

// ---------------------------------------------------------
// Show breeds
// ---------------------------------------------------------

function showBreeds(breedsData) {
  // debugger
  // write in the console breedsData and see how the data has been built
  // breedData.message
  for (let key in Object(breedsData.message)) {
    addBreed(key);
  }
}

// ANOTHER WAY to literate through object
// for (let i = 0; i < Object.keys(breedsData.message).length; i++) {
//   addBreed(Object.keys(breedsData.message)[i]);
// }
// }

function addBreed(breed) {
  const breedUl = document.querySelector('#dog-breeds');
  const breedElementLi = document.createElement('li');
  breedElementLi.textContent = breed;
  breedUl.append(breedElementLi);

  // ---------------------------------------------------------
  // change color at tag li
  // ---------------------------------------------------------

  function changeColorBackground(domNode, color) {
    domNode.style.background = color;
  }

  breedElementLi.addEventListener(
    'mouseover',
    function (event) {
      changeColorBackground(breedElementLi, 'yellow');

      // reset the color after a short delay
      setTimeout(function () {
        // event.target.style.color = "";
        changeColorBackground(breedElementLi, '');
      }, 800);
    },
    false
  );

  function changeColorText(domNode, color) {
    domNode.style.color = color;
  }

  breedElementLi.addEventListener('click', function (event) {
    changeColorText(breedElementLi, 'green');
  });
}

// -----------------------------------------------------
// dropdown menu section
// -----------------------------------------------------

// const optionArray = [e, f, g, h, i, j, k, l, m, n, o, p, r, s, t, u, w, z]

function addOptionSelect() {
  const dropdownMenu = document.querySelector('#breed-dropdown');
  const letterE = document.createElement('option');
  letterE.textContent = 'e';
  console.log(letterE);
  // add, append, appendChild ??? check
  dropdownMenu.append(letterE, dropdownMenu[4]);
  console.log(dropdownMenu);
}

// function showSpecificBreed(BreedsData) {
//   // debugger
//   //for...in  for object
//   for (let key in Object(breedsData.message)) {
//     if (key.charAt(0) === option) {
//       return key;
//     }
//   }
// }
