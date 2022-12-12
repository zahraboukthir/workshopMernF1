const productModel = require("../models/productModel");
const isAutorized = async (req, res, next) => {
  
  try {
    const produit = await productModel.findOne({ _id: req.params.idprod });

    console.log({ userauth:req.user._id ,usepd:produit.user  });
   if (req.user._id.toString() != produit.user.toString() && req.user.role != "admin") {
    return res.status(400).send({ msg: "you are not authorized" });
   } 
   next()
  } catch (error) {
    console.log(error)
    return res.status(400).send({ msg: error.message });
  }
};
const isSaler = (req, res, next) => {
  if (req.user.role != "saler" && req.user.role != "admin") {
    return res.status(400).send({ msg: "you are not saler" });
  }
  next();

};

const isAdmin = (req, res, next) => {
  if (req.user.role != "admin") {
    return res.status(400).send({ msg: "you are not admin" });
  }
  next();
};

module.exports = { isAdmin, isAutorized, isSaler };
