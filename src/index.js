console.log('%c HI', 'color: firebrick')

function parseJSON(data){
    return data.json();
}

document.addEventListener("DOMContentLoaded", function(event){

    fetch("https://dog.ceo/api/breeds/image/random/1")
        .then(parseJSON)
        .then( function(json){
            json.message.forEach(imgURL => {
               const imgElement = document.createElement("img");
               imgElement.setAttribute("src", imgURL);               
               const dogImagesDiv = document.getElementById("dog-image-container");
               dogImagesDiv.appendChild(imgElement);
            });
        })

    fetch("https://dog.ceo/api/breeds/list/all")
        .then(parseJSON)
        .then(function(json){
            for ( let [key, value] of Object.entries(json.message)){
                const breedLi = document.createElement("li");
                breedLi.innerText = key;
                breedLi.className = "breed-item"
                breedLi.addEventListener("click", function(event){
                    event.target.style.color = "MediumSeaGreen";

                })

                const breedListDiv = document.getElementById("dog-breeds");
                breedListDiv.appendChild(breedLi);
            }
        })

        const selectALetterBox = document.getElementById("breed-dropdown");
        selectALetterBox.addEventListener("change", function(event){
            // Clear the list of all of the current breeds.
            const breedListItems = document.querySelectorAll(".breed-item");
            breedListItems.forEach( element =>{
                element.remove();
            });

            //fetch the breeds and populate with our letter.
            fetch("https://dog.ceo/api/breeds/list/all")
                .then(parseJSON)
                .then(function(json){
                    for ( let [key, value] of Object.entries(json.message)){
                        if(key.startsWith(selectALetterBox.value)){
                            const breedLi = document.createElement("li");
                            breedLi.innerText = key;
                            breedLi.className = "breed-item"
                            breedLi.addEventListener("click", function(event){
                                event.target.style.color = "MediumSeaGreen";
                                
                            })                            
                            const breedListDiv = document.getElementById("dog-breeds");
                            breedListDiv.appendChild(breedLi);
                            }
                        }
                    })
        })
})
