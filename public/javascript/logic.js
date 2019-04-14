// fetch("http://localhost:3000/weather?address=Plano").then((response) => {
//     response.json().then((data) => {

//         console.log("xxxx")

//         if(data.error){ 
//             document.querySelector("#location").text = data.error
//         }

//         console.log(data.location)
//         console.log(data.forecast)
//         document.querySelector("#location").textContent = data.location;
//         document.querySelector("#forecast").textContent = data.forecast
//     })})




var weatherForm = document.querySelector("form");
console.log("iii")
weatherForm.addEventListener("submit", function(event){

    event.preventDefault()

    location = weatherForm.address.value;
    document.querySelector("#location").textContent = "Loading...";
    console.log("xxxx")
    fetch("http://localhost:3000/weather?address="+ location).then((response) => {
    response.json().then((data) => {

        console.log("xxxx")

        if(data.error){ 
            document.querySelector("#location").text = data.error
        }

        console.log(data.location)
        console.log(data.forecast)
        document.querySelector("#location").textContent = data.location;
        document.querySelector("#forecast").textContent = data.forecast
    })
})

})
