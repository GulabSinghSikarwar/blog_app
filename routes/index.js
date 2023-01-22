const router =require('express').Router()


 
const authRoutes=require('./auth_routes/auth.route')

router.use('/auth',authRoutes);


module.exports=router;



