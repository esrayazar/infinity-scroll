//Unsplash API
const count = 10;
const apiKey = 'aNO97Pccxf4pnr-T-ljDYdiDMfYDFvtK9GL1wIz8l3I';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

//Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        //Catch error here
    }   
}

//On Load
getPhotos();