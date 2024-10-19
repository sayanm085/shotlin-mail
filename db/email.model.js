const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({ 

   email:{
         type: String,
         required: true
   }
}, { timestamps: true });

module.exports = mongoose.model('Email', emailSchema);