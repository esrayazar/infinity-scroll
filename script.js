const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey = 'aNO97Pccxf4pnr-T-ljDYdiDMfYDFvtK9GL1wIz8l3I';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`
//Helper setAttributes on DOM Elements
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}
// Create Elements for links & Photos, add to DOM
function displayPhotos() {
    //Run function for each object in photosArray
    photosArray.forEach((photo) => {
    //create<a> to link to Unsplash
    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item,{
        href:photo.links.html,
        target: '_blank',
    })
    //create <img> for photo
    const img = document.createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);
    setAttributes(img,{
        src:photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description
    })
    //Put <img> inside <a>, then put both inside image Container element
    item.appendChild(img);
    imageContainer.appendChild(item);
    })
}


//Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos()
    }catch(error){
        //Catch error here
    }   
}

//On Load
getPhotos();