const mongoose = require('mongoose')
const db = require("../models/index");

mongoose.connect('mongodb://localhost/hero_db', {
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
  { title: 'Iron Man' },
  { title: 'Thor' },
  { title: 'Hulk' },
  { title: 'Captain America' },
  { title: 'Black Widow' },
  { title: 'Dr. Strange' },
  { title: 'War Machine' },
  { title: 'Spider Man' },
  { title: 'Black Panther' },
  { title: 'Vision' },
  { title: 'Scarlet Witch' },
  { title: 'Falcon' },
  { title: 'Winter Soldier' },
  { title: 'Loki' },
  { title: 'Heimdall' },
  { title: 'Eitri' },
  { title: 'Wong' },
  { title: 'Mantis' },
  { title: 'Nebula' },
  { title: 'Drax The Destroyer' },
  { title: 'Gamora' },
  { title: 'Groot' },
  { title: 'Gamora' },
  { title: 'Thanos' },
  { title: 'Star-Lord' },
  { title: 'Nick Fury' },
  { title: 'Maria Hill' }
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
