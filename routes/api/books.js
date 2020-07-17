const router = require("express").Router();
const booksController = require("../../controllers/booksController");

module.exports = function(app){
    // Matches with "/api/books"
    app.get('/', function(req, res){
        booksController.findAll;
    });

    app.post('/', function(req, res){
        booksController.create;
    });

    // Matches with "/api/books/:id"
    app.get('/:id', function(req, res){
        booksController.findById;
    });

    app.put('/:id', function(req, res){
        booksController.update;
    });

    app.delete('/:id', function(req, res){
        booksController.remove;
    });
}
