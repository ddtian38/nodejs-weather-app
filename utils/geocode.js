const axios = require("axios")

const geocode = (address , cb) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address+".json?access_token=pk.eyJ1IjoiZGR0aWFuMzgiLCJhIjoiY2p1MnR5OWd0MGc2MzN5cWd5ZDN4ZGJlMiJ9.ebwksBhoUBubUt0uJMLJrg"

    axios.get(url)
        .then(({data}) => {
            if(data.features.length > 0){
                const longitude = data.features[0].center[0];
                const latitude = data.features[0].center[1];
                const location = data.features[0].place_name;
                cb(undefined, 
                    {
                    longitude:longitude, 
                    latitude:latitude, 
                    location: location
                    }
                )
            }else{cb("Unable to find address", undefined)}

        })
        .catch((err) => {
            if (err) {cb("Unable to find connect. Please check your connection", undefined)}
        })
}

module.exports = geocode;