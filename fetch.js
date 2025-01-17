let fetchBtn = document.getElementById(`fetchBtn`);
fetchBtn.addEventListener(`click`, function (){
    fetch("https://swapi.dev/api/people/1")
    .then(function(response){
        return response.text()
    })
    .then(function(result){
        let parsedResult = JSON.parse(result)
        console.log(parsedResult);
        document.getElementById(`fetchDiv`).innerText = parsedResult.name;
        document.getElementById(`fetchDiv`).innerText += parsedResult.height;
        document.getElementById(`fetchDiv`).innerText += parsedResult.mass;


    })
})