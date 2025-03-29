const app = require('express');

const router = app.Router();


router.get("/home",(req,res) => {
res.send("hi kimi")
});

module.exports = router;