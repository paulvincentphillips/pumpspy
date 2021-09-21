const router = require('express').Router();

//registering

router.post("/", async(res, req)=> {
    try {
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
})

module.exports = router;