const productModel = require("../models/productModel");
const addproduct = async (req, res) => {
  try {
    const url = `${req.protocol}://${req.get("host")}`;
    // console.log(url)
    // console.log(req.file)
    const { file } = req;
    const produit = new productModel({ ...req.body, user: req.user._id });
    produit.img = `${url}/${file.path}`;
    const findpd = await productModel.findOne({ title: req.body.title });
    if (findpd) {
      return res.status(400).send({ msg: " produit est déja existe " });
    }

    await produit.save();
    //   console.log(produit);
    res.send({ product: produit, msg: "produit ajoutée avec succée" });
    // console.log(req.body)
  } catch (error) {
    // console.log(error);
    res.status(400).send({ msg: error.message });
  }
};
const getAllproduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    // console.log(products);
    res.send({ products });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
};

const getMyproducts =async (req,res) => {
  try {
    
    const products = await productModel.find({user:req.user._id});
    // console.log(products);
    res.send({ myproducts:products });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
 }
const getProductById = async (req, res) => {
  try {
    const { idprod } = req.params;
    const prod = await productModel.findOne({ _id: idprod });
    // const prod = await productModel.findById(idprod);
    // console.log(prod);
    res.send({ product: prod });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { idprod } = req.params;
  const url = `${req.protocol}://${req.get("host")}`;
  // console.log(url)
  // console.log(req.file)
  const { file } = req;
  try {
    const prod = await productModel.findByIdAndUpdate(idprod, {
      $set: { ...req.body, img: `${url}/${file.path}` },
    }, { new: true });
    // console.log(prod);
    res.send({ updatedproduct: prod, msg: "product successefully updated" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productModel.deleteOne({ _id: req.params.idprod });
    res.send({ msg: "Product successefully deleted" });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};
module.exports = {
  addproduct,
  getAllproduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getMyproducts
};
