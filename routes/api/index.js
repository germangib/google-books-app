const router = require("express").Router();
const bookRoutes = require("./GoogleBooks");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;