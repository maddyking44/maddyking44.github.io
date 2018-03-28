var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var express = require('express-handlebars')
// server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))

server.get('/', function (req, res) {
    //renders the form
        res.sendFile(__dirname + '/form.html')
    })

server.post('/displayPage', function (req, res) {
    //post to receive the data from the named-compliment form
    var data = req.body 
    var name = data.firstname + data.lastname
    var tag = data.tagline
    var email = data.email 
    //need to do something with email
    var profilepic = data.profilepic
    // // console.log({data})
    console.log(data)
    console.log(name)
    res.redirect('/displayPage')
})

server.get('/displayPage', function (req, res) {
    //renders the form
        res.sendFile(__dirname + '/displayPage')
    })






// var userOne = []

// function profileObj(){
//     var userOne = {
//         firstname: (document.getElementById("firstname").value),
//         lastname: (document.getElementById("lastname").value),
//         tagline: (document.getElementById("tagline").value),
//         email: (document.getElementById("email").value),
//         profilepic: (document.getElementById("profilepic").value)
//     }
//     console.log(userOne)
// }

// var userTwo = {
//     firstname: "Sam",
//     lastname: "Jae",
//     tagline: "fish soup",
//     email: "sam.j@hotmail.com"
// }

// function printDisplay () {
// document.getElementById("displayName").innerHTML(userOne.firstname);
// }

// printDisplay()


module.exports = server