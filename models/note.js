const mongoose = require('mongoose');
const { Schema } = mongoose;

const note_schema = new Schema({
  title: {
    type: String,
  },
  body: String,
  folder_id: String,
  list_id: {
    type: String,
    default: "Dump"
  },
  priority: {
    type: String,
    default: "Low"
  },
  category_id: String,
  scheduled: {
    type: Boolean,
    default: false
  },
  scheduled_date: Date,
  scheduled_time: String,
  completed: {
    type: Boolean,
    default: false
  },
  completed_at: Date,
  archived: Boolean,
  archived_at: Date,
  deleted_at: false,
}, { timestamps: true });



const Note = mongoose.model('Note', note_schema);


module.exports = Note;