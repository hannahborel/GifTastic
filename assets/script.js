

function sendApiRequest(){
    var userInput = document.getElementById("input").value
    console.log(userInput)
    
    var APIKEY = "12pav36GYvNLT6Hz68imiF0j0Q7RiiWH";
    var URL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${APIKEY}&rating=g&limit=12`



    fetch(URL)
        .then((res) => res.json())
        .then((giphyOBJ) => {
           console.log(giphyOBJ.data)
           console.log(giphyOBJ.data[0].images.fixed_height.url)
           dataOBJ = giphyOBJ.data
 

           for(var i = 0; i<dataOBJ.length; i++){

            let img = document.createElement("img")
            img.src = giphyOBJ.data[i].images.fixed_height.url
            let main = document.querySelector("#main")
            main.appendChild(img)
            userInput = "";

            console.log(img.src)                  
            }
          
        })
        .catch(err =>{
            console.log(err)
        })

    };


// function printObj(dataOBJ){

    
// }


    



    // .then(function(json){
    //     console.log(json.data[0].images.fixed_height.url)
    //     var imgPath = json.data[0].images.fixed_height.url
    //     var img = document.createElement("img")
    //     img.setAttribute("src", imgPath)
    //     document.body.appendChild(img)
    // })
