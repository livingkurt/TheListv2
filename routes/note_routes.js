const db = require("../models/index");
const axios = require("axios");
const express = require('express');
// const mongojs = require('mongojs')

const router = express.Router();
// Export API Routes to Express

router.post('/', async (req, res) => {
  try {
    const request = await db.Notes.create({
      title: req.body.title,
      body: req.body.body,
      folder_id: req.body.folder_id,
      list_id: req.body.list_id,
      priority: req.body.priority,
      category_id: req.body.category_id,
      scheduled: req.body.scheduled,
      scheduled_date: req.body.scheduled_date,
      scheduled_time: req.body.scheduled_time,
      completed: req.body.completed,

      // date_completed: req.body.completed ? new Date().setDate(new Date().getDate()) : "Not Complete",
      date_created: new Date().setDate(new Date().getDate()),
      date_modified: new Date().setDate(new Date().getDate())
    })
    // Send the request back to the front end
    res.send(request)
  }
  catch (err) {
    console.log(err);
  }

});

router.get('/', async (req, res) => {

  try {
    const request = await db.Notes.find({}).sort({ x: 1 })
    // Send the request back to the front end
    res.send(request)
  }
  catch (err) {
    console.log(err);
  }

});

router.get('/:list_id', async (req, res) => {

  try {
    const request = await db.Notes.find({ list_id: req.params.list_id }).sort({ _id: -1 })
    // Send the request back to the front end
    res.send(request)
  }
  catch (err) {
    console.log(err);
  }

});

router.get('/:priority', async (req, res) => {

  try {
    const request = await db.Notes.find({ priority: req.params.priority })
    // Send the request back to the front end
    res.send(request)
  }
  catch (err) {
    console.log(err);
  }

});

router.get('/:id', async (req, res) => {

  try {
    const request = await db.Notes.findOne({ _id: req.params.id })
    // Send the request back to the front end
    res.send(request)
  }
  catch (err) {
    console.log(err);
  }

});

router.put('/:id', async (req, res) => {

  try {
    const note = await db.Notes.updateOne({ _id: req.params.id },
      {
        title: req.body.title,
        body: req.body.body,
        folder_id: req.body.folder_id,
        list_id: req.body.list_id,
        priority: req.body.priority,
        category_id: req.body.category,
        // category_id: req.body.category_id ? req.body.category_id : "5e8f7c48d4e1a46221ddb732",
        scheduled: req.body.scheduled,
        scheduled_date: req.body.scheduled_date,
        scheduled_time: req.body.scheduled_time,
        completed: req.body.completed,
        // date_completed: req.body.completed ? new Date().setDate(new Date().getDate()) : "",
        date_completed: new Date().setDate(new Date().getDate()),
        date_modified: new Date().setDate(new Date().getDate())
      })
    // Send the request back to the front end
    res.send(note)
    console.log({ "note.data": note.data })

  }
  catch (err) {
    console.log(err);
  }

});

router.delete('/:id', async (req, res) => {

  try {
    const request = await db.Notes.remove({ _id: req.params.id })
    // Send the request back to the front end
    res.send(request)
  }
  catch (err) {
    console.log(err);
  }

});

router.delete('/', async (req, res) => {

  try {
    const request = await db.Notes.deleteMany({ title: "" })
    // Send the request back to the front end
    res.send(request)
  }
  catch (err) {
    console.log(err);
  }

});

module.exports = router

// module.exports = function (app) {

  // ==================================================
  // Note Routes
  // ==================================================

  // app.post('/api/note', async (req, res) => {
  //   // console.log({ "api_routes.js": "Hello" })
  //   // console.log({ "api_routes.js - post": req.body })
  //   // Save Need to Database
  //   try {
  //     const request = await db.Notes.create({
  //       title: req.body.title,
  //       body: req.body.body,
  //       folder_id: req.body.folder_id,
  //       list_id: req.body.list_id,
  //       priority: req.body.priority,
  //       category_id: req.body.category_id,
  //       scheduled: req.body.scheduled,
  //       scheduled_date: req.body.scheduled_date,
  //       scheduled_time: req.body.scheduled_time,
  //       completed: req.body.completed,
  //       date_completed: req.body.date_completed,
  //       // date_completed: req.body.completed ? new Date().setDate(new Date().getDate()) : "Not Complete",
  //       date_created: new Date().setDate(new Date().getDate()),
  //       date_modified: new Date().setDate(new Date().getDate())
  //     })
  //     // Send the request back to the front end
  //     res.send(request)
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // })
  // app.get('/api/notes', async (req, res) => {
  //   // console.log({ "api_routes.js - get all": req.body })
  //   try {
  //     const request = await db.Notes.find({}).sort({ x: 1 })
  //     // Send the request back to the front end
  //     res.send(request)
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // })
  // app.get('/api/notes/:list_id', async (req, res) => {
  //   // console.log({ "api_routes.js - get by list_id": req.body })
  //   try {
  //     const request = await db.Notes.find({ list_id: req.params.list_id }).sort({ _id: -1 })
  //     // Send the request back to the front end
  //     res.send(request)
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // })
  // app.get('/api/notes/:priority', async (req, res) => {
  //   // console.log({ "api_routes.js - get by priority": req.body })
  //   try {
  //     const request = await db.Notes.find({ priority: req.params.priority })
  //     // Send the request back to the front end
  //     res.send(request)
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // })
  // app.get('/api/note/:id', async (req, res) => {
  //   // console.log({ "api_routes.js - get one": req.body })
  //   try {
  //     const request = await db.Notes.findOne({ _id: req.params.id })
  //     // Send the request back to the front end
  //     res.send(request)
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // })
  // app.put('/api/note/:id', async (req, res) => {
  //   // Create an empty workout object ready for exercises to get put into it
  //   console.log({ "api_routes.js - update one note": req.body })
  //   try {
  //     // if (!req.body.category_id) {
  //     //   try {
  //     //     const category = await db.Categories.create({
  //     //       category_name: "Uncategorized",
  //     //       priority: "Low",
  //     //       notes: [req.params.id],
  //     //       hidden: false,
  //     //       date_created: new Date().setDate(new Date().getDate()),
  //     //       date_modified: new Date().setDate(new Date().getDate())
  //     //     })
  //     //     // Send the request back to the front end
  //     //     res.send(category)
  //     //     console.log({ "request.data": category._id })
  //     //   }
  //     //   catch (err) {
  //     //     console.log(err);
  //     //   }
  //     // }
  //     // const category_data = {
  //     //   category_name: "Uncategorized",
  //     //   priority: "Low",
  //     //   notes: [],
  //     //   hidden: false,
  //     //   date_created: new Date().setDate(new Date().getDate()),
  //     //   date_modified: new Date().setDate(new Date().getDate())
  //     // }
  //     // const category = await axios.post('/api/category', category_data);
  //     // console.log({ "category.data": category.data })
  //     const note = await db.Notes.updateOne({ _id: req.params.id },
  //       {
  //         title: req.body.title,
  //         body: req.body.body,
  //         folder_id: req.body.folder_id,
  //         list_id: req.body.list_id,
  //         priority: req.body.priority,
  //         category_id: req.body.category,
  //         // category_id: req.body.category_id ? req.body.category_id : "5e8f7c48d4e1a46221ddb732",
  //         scheduled: req.body.scheduled,
  //         scheduled_date: req.body.scheduled_date,
  //         scheduled_time: req.body.scheduled_time,
  //         completed: req.body.completed,
  //         // date_completed: req.body.completed ? new Date().setDate(new Date().getDate()) : "",
  //         date_completed: new Date().setDate(new Date().getDate()),
  //         date_modified: new Date().setDate(new Date().getDate())
  //       })
  //     // Send the request back to the front end
  //     res.send(note)
  //     console.log({ "note.data": note.data })

  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // })
  // app.delete('/api/note/:id', async (req, res) => {
  //   // Create an empty workout object ready for exercises to get put into it
  //   // console.log({ "api_routes.js - delete one": req.body })
  //   try {
  //     const request = await db.Notes.remove({ _id: req.params.id })
  //     // Send the request back to the front end
  //     res.send(request)
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // })

  // app.delete('/api/notes', async (req, res) => {
  //   // Create an empty workout object ready for exercises to get put into it
  //   // console.log({ "api_routes.js - delete one": req.body })
  //   try {
  //     const request = await db.Notes.deleteMany({ title: "" })
  //     // Send the request back to the front end
  //     res.send(request)
  //   }
  //   catch (err) {
  //     console.log(err);
  //   }
  // })

// }
