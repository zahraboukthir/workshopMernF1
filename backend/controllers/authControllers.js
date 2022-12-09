const userModel=require('../models/userModel')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const signUp = async(req, res) => {
 const {email,password}=req.body
 try {
    //1 check if user exist
    const user=await userModel.findOne({email})
    if (user) {
        return res.status(400).send({msg:"user already exist"})
    }
    //2 create user 
    const newuser= await new userModel({...req.body})
    //3 hash password
 const hachedpasw=await bcrypt.hash(password, 10)
 newuser.password=hachedpasw
   //4 save user 
   await newuser.save()
   //5 send res
    res.send({user:newuser,msg:"user succesfully registred"})
 } catch (error) {
    res.status(400).send({msg:error.message})
 }
};
const signIn = async(req,res) => {
    const {email,password}=req.body
    try {
       //1 check if user exist
    const user=await userModel.findOne({email})
    if (!user) {
        return res.status(400).send({msg:"bad credentiels(email)"})
    }
    // 2 check password
    const match=await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(400).send({msg:"bad credentiels(password)"})
    }
    //3 token
  const payload={userid:user._id}
  const token=jwt.sign(payload, process.env.SECRET, { expiresIn: '1h' });
  //4 send res
    res.send({user,token})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
 }
 const getcurrentUser = (req,res) => { res.send({user:req.user})}
module.exports = { signUp,signIn,getcurrentUser };
