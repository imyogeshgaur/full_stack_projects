const mongoose = require('mongoose');

const schema = mongoose.Schema;

const gradientSchema = new schema({
   name:{
       type:String,
       default:"unamed",
   },
   downloads:{
       type:Number,
       default:0,
   },
   colors:{
       start:String,
       end:String,
       dirrection:{
           type:String,
           default:"TO-BOTTOM",
       }
   }
});

module.exports = mongoose.model("gradients",gradientSchema);