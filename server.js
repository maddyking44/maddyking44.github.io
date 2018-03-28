var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var hbs = require('express-handlebars')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: false }))
var person = {}

//get handlebars working
var hbsConfig = {
    extname: 'hbs'
  }
server.engine('hbs', hbs(hbsConfig)) 
server.set('view engine', 'hbs')

//render the form
server.get('/', function (req, res) {
   res.sendFile(__dirname + '/form.html')
})

server.post('/displayPage', function (req, res) {
//get data from form.html and put each part into variables
    var data = req.body 
    // var person = {
    //     name: data.firstname + data.lastname,
    //     tag: data.tagline,
    //     email: data.email 
    // }
    
    //need to do something with email
    var profilepic = data.profilepic
    console.log(data)
    // console.log(name)
    res.redirect('/displayPage')
})

//attaches the displayPage.hbs file to the /displayPage url
server.get('/displayPage', function (req, res) {
    res.render('displayPage')
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