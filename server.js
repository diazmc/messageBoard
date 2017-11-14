var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.use(express.static(path.join(__dirname + '/client/static')));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');


routes_setter(app)

app.listen(6789, function() {
    console.log("listening on port 6789");
})

// app.get('/', function(req, res){
//    Animal.find({}, function(err, animals){
//         if (animals) {
//         res.render('index', {animals: animals});
//         }
//     })
// })

// app.get('/mongooses/new', function(req, res){
//     res.render('new')
// })

// app.get('/mongooses/:id', function(req, res){
//     Animal.find({_id: req.params.id}, function(err, animal){
//         if (err) {
//             console.log('Error', err)
//         }
//         else { 
//         res.render('info', {animal: animal});
//         }
//     })
// })

// app.get('/mongooses/edit/:id', function(req, res){
//     Animal.find({_id: req.params.id}, function(err, animal){
//         if (err) {
//             console.log('Error', err)
//         }
//         else { 
//         res.render('edit', {animal: animal});
//         }
//     })
// })


// app.post('/mongooses', function(req, res) {
//   console.log("POST DATA", req.body);
//   // create a new User with the name and age corresponding to those from req.body
//   var animal = new Animal({name: req.body.name, info: req.body.info});
//   // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
//   animal.save(function(err) {
//     // if there is an error console.log that something went wrong!
//     if(err) {
//       console.log('something went wrong');
//       res.redirect('/mongooses/new')
//     } 
//     else { // else console.log that we did well and then redirect to the root route
//       console.log('successfully added a animal!');
//       res.redirect('/');
//     }
//   })
// })

// app.post('/mongooses/:id', function(req, res){
//     Animal.update(
//         {_id: req.params.id}, 
//         {$set: {'name': req.body.name}}, 
//         function(err){
//             if (err){
//                 console.log('Error:', err)
//             }
//             else {
//                 res.redirect('/mongooses/' + req.params.id)
//             }
//         });
//     });

// app.post('/mongooses/destroy/:id', function(req, res){
//     Animal.remove({_id: req.params.id}, function(err){
//     })
//     res.redirect('/')
// })




