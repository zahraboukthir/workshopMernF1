const express = require("express");
const {
  addproduct,
  getProductById,
  getAllproduct,
  updateProduct,
  deleteProduct,
  getMyproducts,
} = require("../controllers/productController");
const isAuth = require("../middlewares/isAuth");
const { isSaler, isAutorized } = require("../middlewares/isAutorized");
const router = express.Router();
const upload = require("../utils/multer");
/**
 * @Params POST /product/addprod
 * @description add new product
 * @acces protected (authorizer=  authentifier + role / saler)
 */
router.post(
  "/addprod",
  isAuth(),
  isSaler,
  upload("products").single("file"),
  addproduct
);
/**
 * @Params Get /product
 * @description get Allproduct
 * @acces public
 */
router.get("/", getAllproduct);
/**
 * @Params Get /product/myprods
 * @description get Allproduct
 * @acces protected
 */
router.get("/myprods", isAuth(), isSaler, getMyproducts);
/**
 * @Params Get /product/:idprod
 * @description get one product by id
 * @acces public
 */
router.get("/:idprod", getProductById);

/**
 * @Params Put /product/:idprod
 * @description Update one product
 * @acces protected
 */
router.put(
  "/:idprod",
  isAuth(),
  isAutorized,
  upload("products").single("file"),
  updateProduct
);

/**
 * @Params Delete /product/:idprod
 * @description Delete one product
 * @acces protected
 */
router.delete("/:idprod", isAuth(), isAutorized, deleteProduct);


module.exports = router;
