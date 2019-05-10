const db = require("../models");

module.exports = {
    //Find all
    findAll: function(req, res){
        db.GoogleBooks
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, 

    //Create
    create: function(req, res){
        db.GoogleBooks.find({
            apiId: req.body.apiId
        }, function(err, data){
            if(err) {
                console.log(err);
            }
            // checks if book is already in db
            if (data.length === 0){
                db.GoogleBooks
                    .create(req,body)
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            }
        });
    },

    // Delete
    remove: function(req, res) {
        db.GoogleBooks
            .findById({ _id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}; 
