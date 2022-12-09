const express = require("express");
const { signUp, signIn, getcurrentUser } = require("../controllers/authControllers");
const { registerRules, validator, loginRules } = require("../middlewares/bodyValidators");
const isAuth = require("../middlewares/isAuth");
const router = express.Router();

/**
 * @params POST /auth/signup
 * @description register new user
 * @access public
 */
router.post("/signup", registerRules(), validator, signUp);
/**
 * @params POST /auth/signin
 * @description login user
 * @access public
 */
 router.post("/signin", loginRules(), validator, signIn);
 /**
 * @params GET /auth/
 * @description get current user
 * @access private
 */
  router.get("/", isAuth(), getcurrentUser);
module.exports = router;
