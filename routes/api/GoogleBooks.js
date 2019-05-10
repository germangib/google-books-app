const router = require("express").Router();
const booksController = require("../../controllers/GBooksController");

// Matches with "/api/books"
router.route("/")
  .get(GBooksController.findAll)
  .post(GBooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(GBooksController.remove);

module.exports = router;