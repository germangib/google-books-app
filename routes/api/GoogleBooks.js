const router = require("express").Router();
const GBooksController = require("../../controllers/GBooksController");

// console.log("Googlebooks...");
// Matches with "/api/books"
router.route("/")
  .get(GBooksController.findAll)
  .post(GBooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(GBooksController.remove);

module.exports = router;