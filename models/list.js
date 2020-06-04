const mongoose = require('mongoose');
const { Schema } = mongoose;

const list_schema = new Schema({
  list_name: {
    type: String,
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "notes"
    }
  ],
  hidden: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });



const Note = mongoose.model('List', list_schema);


module.exports = Note;