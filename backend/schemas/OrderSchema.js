const {Schema} = require('mongoose');

const OrderSchema = new Schema({
  name:String,
  qtr:Number,
  price:Number,
  mode:String,
});

module.exports = {OrderSchema}