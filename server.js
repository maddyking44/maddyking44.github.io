// var express = require('express')
// var bodyParser = require('body-parser')
// var server = express()
// server.use(express.static('public'))
// server.use(bodyParser.urlencoded({ extended: false }))

// server.get('/', function (req, res) {
//     //renders the form
//         res.sendFile(__dirname + '/form.html')
//     })

// server.post('/form', function (req, res) {
//     //post to receive the data from the named-compliment form
//     var data = req.body 
//     var name = data.firstname
//     // // console.log({data})
//     console.log(data)
//     console.log(name)
//     res.redirect('/nextPage')
// })

function profileObj(){
    var userOne = document.getElementById("firstname").value
    console.log(userOne)
}


// module.exports = server