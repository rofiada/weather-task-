const request = require ('request')
//================================================/////////////////////////////
const forecast = (address , callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address + '.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw'
    
    request ({url , json : true} , (error , response) => {
        if (error) {
          callback("nable to connect geocode Service" , undefined)
        }
        else if (response.body.error) {
          callback(response.body.error.message , undefined)
        }
        else {
          callback (undefined , response.body.location.name + "It Is " + response.body.current.condition.text 
          + " And Temp   " + response.body.current.temp_c    )
  }
    } )
    }
///===============================================================/////////////////////
  module.exports = forecast;