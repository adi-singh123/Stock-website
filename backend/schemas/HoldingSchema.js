const { Schema } = require('mongoose');

const HoldingSchema =  new Schema({
  name:String,
  qtr:Number,
  avg:Number,
  price:Number,
  net:String,
  day:String,
})

module.exports = {HoldingSchema};