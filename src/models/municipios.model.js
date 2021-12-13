'use strict'


const mongoose = require('mongoose')

const Schema = mongoose.Schema


const municipiosScheme = new Schema({
    nombre: {
      type: String,
      maxlength: 45,
    },
  }, {
    timestamps: true,
  })

  
module.exports = mongoose.model('municipios', municipiosScheme)
