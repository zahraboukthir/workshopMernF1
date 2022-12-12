const { getAllusers } = require("../controllers/userControllers");
const { isAdmin } = require("../middlewares/isAutorized");
const isAuth = require("../middlewares/isAuth");
const express=require("express")
const router=express.Router()
/**
 * @Params Get /user
 * @description get Allusers
 * @acces protected( authentifier et admin)
 */
router.get("/",isAuth(),isAdmin, getAllusers);

module.exports=router
