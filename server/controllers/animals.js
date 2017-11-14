var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports = {
    show: function(req, res) {
        Animal.find({}, function(err, animals){
            if (animals) {
            res.render('index', {animals: animals});
            }
        })
    },

    create: function(req, res) {
        console.log("POST DATA", req.body);
        var animal = new Animal({name: req.body.name, info: req.body.info});
        animal.save(function(err) {
    
            if(err) {
            console.log('something went wrong');
            res.redirect('/mongooses/new')
            } 
            else { 
            console.log('successfully added a animal!');
            res.redirect('/');
            }
        })
    },

    displayOne: function(req, res){
        Animal.find({_id: req.params.id}, function(err, animal){
            if (err) {
                console.log('Error', err)
            }
            else { 
            res.render('info', {animal: animal});
            }
        })
    },

    edit: function(req, res){
        Animal.find({_id: req.params.id}, function(err, animal){
            if (err) {
                console.log('Error', err)
            }
            else { 
            res.render('edit', {animal: animal});
            }
        })
    },

    update: function(req, res) {
        Animal.update(
            {_id: req.params.id}, 
            {$set: {'name': req.body.name}}, 
            function(err){
                if (err){
                    console.log('Error:', err)
                }
                else {
                    res.redirect('/mongooses/' + req.params.id)
                }
        });
        
    },

    del: function(req, res) {
        Animal.remove({_id: req.params.id}, function(err){
        })
        res.redirect('/')
    }


}