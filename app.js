const express =require("express");
const geocode = require("./utils/geocode.js")
const darksky = require("./utils/darksky.js")

const exphbs = require("express-handlebars")

const app = express();
const PORT = 3000;


//Setting up handlebars engine and views location

app.use(express.static("public"));
console.log(__dirname)

//setting up engine and default page layout
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/help", function(req, res){

    res.render("help", {
        title: "Help",
        name: "Daniel Tian"
    }) 

})

app.get("/about", function(req, res){

    res.render("about", {
        title: "About Me",
        name: "Daniel Tian"
    })

})


app.get("/weather", function(req, res){


    geocode(req.query.address, function(err, {latitude, longitude, location} = {}){
        if(err){
            return res.send({error: err})
        }

        if (location){
            darksky(latitude, longitude, function(err, forecast){
                if(err) { return res.send({error: err}) }

                res.send({
                    forecast: forecast,
                    location: location,
                    address: req.query.address
                })
            })

        }
    })

})

app.get("/", function(req, res){

    res.render("index", {
        title: "Weather App",
        name: "Daniel Tian"
    })

})

app.get("/help/*", function(req, res){

    res.render("error", {
        message: "help article not found.",
        name: "Daniel Tian"
    })

})

app.get("*", function(req, res){

    res.render("error", {
        message: "404 error",
        name: "Daniel Tian"
    })

})

app.listen(PORT, function(){
    console.log("Listen on http://localhost:"+PORT)
})