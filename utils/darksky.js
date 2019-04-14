const request = require("request");


const darksky = (lat, long, cb) => {

    const url = "https://api.darksky.net/forecast/576da4765654cbca4553a3341faae74f/"+lat+","+long;


    request({url: url, json:true}, function(e,{body}){
        //Network error; server repsonse with error no connection.
        if(e){
            cb("Cannot find connection.", undefined)
        }else if(body.error){
                cb("Unable to find location." , undefined)
        }else{
            //getting data from weather api
            console.log(body)
            const data = body.currently
            let condition = data.summary + ". It is currently " + data.temperature+". With a " + data.precipProbability+ "% chance of rain."
            cb(undefined, condition)
        }
      
    })
}
console.log("loading dark skies")
module.exports = darksky;

