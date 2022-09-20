const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Chart = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    type: { type: String },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },  //neu trung slug thi se co 1 cai random short_id 
  },{
    timestamps: true,
  });

  module.exports = mongoose.model('Chart', Chart); 
  // model name , Schema name