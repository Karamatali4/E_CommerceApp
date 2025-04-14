const  express =  require("express");
const productRouter = express.Router();

const productAdd = require("../controllers/productControllers");
const  { verifyAdmin } = require("../middleware/authMiddleware");



productRouter.post("/product", verifyAdmin,productAdd);

module.exports = productRouter;
