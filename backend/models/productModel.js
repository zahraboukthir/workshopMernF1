const mongoose = require("mongoose");
const { Schema } = mongoose;

const prodSchema = new Schema({
  title: { type: String, required: true, trim: true }, // String is shorthand for {type: String}
  description: String,
  category: {
    type: String,
    enum: ["Femme", "Homme", "Enfant", "Electro", "Informatique"],
    required: true
  },
  price: {type:Number,required:true},
  dateCreation: { type: Date, default: Date.now },
  disponible: { type: Boolean, default: true },
  qteS: {type:Number,required:true},
  img: String,
  imgD: [String],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

const productModel = mongoose.model("Product", prodSchema);
module.exports=productModel