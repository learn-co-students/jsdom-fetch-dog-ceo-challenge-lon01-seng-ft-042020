console.log('%c HI', 'color: firebrick');

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(function (JSONdataAboutImages) {
      return JSONdataAboutImages.json();
    })
    .then(function (imagesData) {
      showImages(imagesData);
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
  const image_div = document.querySelector('#dog-image-container');
  // creating a src tag - the DOM node that will be append to div
  const imageElement = document.createElement('img');
  imageElement.src = image;
  // add element to div
  // append - all elements, appendChild - one element 
  image_div.append(imageElement);
}
