const userModel=require("../models/userModel")

const getAllusers = async (req, res) => {
  try {
    const allUsers = await userModel.find({});
    // console.log(products);
    res.send({ allUsers });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: error.message });
  }
};
module.exports={getAllusers}
