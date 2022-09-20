const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },  //neu trung slug thi se co 1 cai random short_id 
  },{
    timestamps: true,
  });

  module.exports = mongoose.model('Stadium', Course); 
  // model name , Schema name
  