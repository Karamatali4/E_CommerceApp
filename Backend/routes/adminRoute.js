const app = require('express');
const adminRoutes = app.Router();
const { verifyAdmin } = require('../middleware/authMiddleware');
const { getSingleUser, getAllUserData } = require('../controllers/adminControllers');


// Get All Users
adminRoutes.get("/users", verifyAdmin,getAllUserData);



// Get Single User
adminRoutes.get("/users/:id", verifyAdmin,getSingleUser);





module.exports = adminRoutes;