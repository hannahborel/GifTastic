function sendApiRequest(){
    var userInput = document.getElementById("input").value
    console.log(userInput)
    
    var APIKEY = "12pav36GYvNLT6Hz68imiF0j0Q7RiiWH";
    var URL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&api_key=${APIKEY}&rating=g&limit=10`



    fetch(URL)
        .then((res) => {
            res.json()
        })
        .then((giphyOBJ) => {
            console.log(giphyOBJ.data)
        })
        .catch(err =>{
            console.log(err)
        })
    };









    // .then(function(json){
    //     console.log(json.data[0].images.fixed_height.url)
    //     var imgPath = json.data[0].images.fixed_height.url
    //     var img = document.createElement("img")
    //     img.setAttribute("src", imgPath)
    //     document.body.appendChild(img)
    // })
