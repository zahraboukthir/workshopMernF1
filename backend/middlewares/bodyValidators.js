const { body, validationResult } = require("express-validator");
const registerRules = () => [
  body("fullName", "ful Name is required").notEmpty(),
  body("email", "email is not valid").isEmail(),
  body("password", "password must be between 8 and 20 carts").isLength({
    min: 8,
    max: 20,
  }),
];
const loginRules = () => [

    body("email", "email is not valid").isEmail(),
    body("password", "password must be between 8 and 20 carts").isLength({
      min: 8,
      max: 20,
    }),
  ];
  const validator = (req,res,next) => { 
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(costumeerror(errors.array()) );
    }
else next();
}
const costumeerror = (tab) => tab.map(err=>({msg:err.msg}))
    
 module.exports={registerRules,loginRules,validator}