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
        }
        )

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


function name(param){
    body
}

const funcName(params) => {
    body
}




        
         
        

        // {"message":{"affenpinscher":[],"african":[],"airedale":[],"akita":[],"appenzeller":[],"australian":["shepherd"],"basenji":[],"beagle":[],"bluetick":[],"borzoi":[],"bouvier":[],"boxer":[],"brabancon":[],"briard":[],"buhund":["norwegian"],"bulldog":["boston","english","french"],"bullterrier":["staffordshire"],"cairn":[],"cattledog":["australian"],"chihuahua":[],"chow":[],"clumber":[],"cockapoo":[],"collie":["border"],"coonhound":[],"corgi":["cardigan"],"cotondetulear":[],"dachshund":[],"dalmatian":[],"dane":["great"],"deerhound":["scottish"],"dhole":[],"dingo":[],"doberman":[],"elkhound":["norwegian"],"entlebucher":[],"eskimo":[],"finnish":["lapphund"],"frise":["bichon"],"germanshepherd":[],"greyhound":["italian"],"groenendael":[],"havanese":[],"hound":["afghan","basset","blood","english","ibizan","plott","walker"],"husky":[],"keeshond":[],"kelpie":[],"komondor":[],"kuvasz":[],"labrador":[],"leonberg":[],"lhasa":[],"malamute":[],"malinois":[],"maltese":[],"mastiff":["bull","english","tibetan"],"mexicanhairless":[],"mix":[],"mountain":["bernese","swiss"],"newfoundland":[],"otterhound":[],"ovcharka":["caucasian"],"papillon":[],"pekinese":[],"pembroke":[],"pinscher":["miniature"],"pitbull":[],"pointer":["german","germanlonghair"],"pomeranian":[],"poodle":["miniature","standard","toy"],"pug":[],"puggle":[],"pyrenees":[],"redbone":[],"retriever":["chesapeake","curly","flatcoated","golden"],"ridgeback":["rhodesian"],"rottweiler":[],"saluki":[],"samoyed":[],"schipperke":[],"schnauzer":["giant","miniature"],"setter":["english","gordon","irish"],"sheepdog":["english","shetland"],"shiba":[],"shihtzu":[],"spaniel":["blenheim","brittany","cocker","irish","japanese","sussex","welsh"],"springer":["english"],"stbernard":[],"terrier":["american","australian","bedlington","border","dandie","fox","irish","kerryblue","lakeland","norfolk","norwich","patterdale","russell","scottish","sealyham","silky","tibetan","toy","westhighland","wheaten","yorkshire"],"vizsla":[],"waterdog":["spanish"],"weimaraner":[],"whippet":[],"wolfhound":["irish"]},"status":"success"}



})
