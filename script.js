//Challenge1

document.addEventListener("DOMContentLoaded", function(){
    let dogImageContainer = document.getElementById('dog-image-container')



    fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(function(jsonObject){
    let arrayOfURLs= jsonObject.message
    arrayOfURLs.forEach(url => {
        dogImageContainer.innerHTML += makeImageTag(url)
    })
})
//DOMCONTENT LOADED

})

function makeImageTag(url){
   return `<img src="${url}"/>`
}