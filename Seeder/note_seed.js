const mongoose = require('mongoose')
const db = require("../models/index");

mongoose.connect('mongodb://localhost/thelistv2_db', {
  useNewUrlParser: true,
  useFindAndModify: false
})

const note_seed = [
  {
    title: "words",
    body: "words",
    folder_id: "",
    priority: "Low",
    category_id: "words",
    scheduled: false,
    scheduled_date: "",
    scheduled_time: "",
    completed: false,
    completed_at: "",
    archived: false,
    archived_at: "",
    deleted_at: "",
    createdAt: new Date(Date.now() - 12),
    modifiedAt: new Date(Date.now())
  },
];

db.Notes.deleteMany({})
  .then(() => db.Notes.insertMany(note_seed))
  .then(data => {
    console.log(data.length + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
