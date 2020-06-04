const mongoose = require('mongoose')
const db = require("../models/index");

mongoose.connect('mongodb://localhost/hero_db', {
  useNewUrlParser: true,
  useFindAndModify: false
})

const note_seed = [{ lists: [] }]

db.ListOrder.deleteMany({})
  .then(() => db.ListOrder.insertMany(note_seed))
  .then(data => {
    console.log(data.length + ' records inserted!')
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
