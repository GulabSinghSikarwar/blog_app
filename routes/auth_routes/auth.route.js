const router = require('express').Router()


router.post('/register', async (req, resp) => {

    resp.send("register routes")


})

router.post('/login', async (req, resp) => {

    resp.send("login route ")
})

router.post('/refresh-token', async (req, resp) => {

    resp.send("resfresh token routes ")
})

router.delete('/logout', async (req, resp) => {

    resp.send(" logout route ")

})

module.exports=router