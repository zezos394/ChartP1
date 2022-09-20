const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Account = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  });

  module.exports = mongoose.model('Account', Account); 
  // model name , Schema name