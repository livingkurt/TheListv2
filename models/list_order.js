const mongoose = require('mongoose');
const { Schema } = mongoose;

const list_order_schema = new Schema({
  lists: [
    {
      type: Schema.Types.ObjectId,
      ref: "lists"
    }
  ],
}, { timestamps: true });



const Note = mongoose.model('ListOrder', list_order_schema);


module.exports = Note;