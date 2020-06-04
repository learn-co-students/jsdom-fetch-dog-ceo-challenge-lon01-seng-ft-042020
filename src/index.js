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
  // debugger
  for (let i = 0; i < imagesData.message.length; i++) {
    addImage(imagesData.message[i]);
  }
}

function addImage(image) {
  // selecting the target of the operation
  debugger;
  const image_list = document.querySelector('#dog-image-container');
  const imageElement = document.createElement('img');
  imageElement.src = image;
  image_list.append(imageElement);
}
