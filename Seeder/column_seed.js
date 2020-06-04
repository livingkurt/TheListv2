const mongoose = require('mongoose')
const db = require("../models/index");

mongoose.connect('mongodb://localhost/hero_db', {
  useNewUrlParser: true,
  useFindAndModify: false
})

const note_seed = [
  {
    list_name: "Master",
    notes: []
  },
  {
    list_name: 'Dump',
    notes: [],
  },
  {
    list_name: 'Calender',
    notes: [],
  }
];

db.Lists.deleteMany({})
  .then(() => db.Lists.insertMany(note_seed))
  .then(data => {
    console.log(data.length + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
