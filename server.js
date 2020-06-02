const express = require('express');
const mongoose = require('mongoose');
// const routes = require('./routes/index')
const note_routes = require('./routes/note_routes')
// const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3001



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/thelist_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(bodyParser.json())
app.use("/api/notes", note_routes)
// app.use("/api/folders", routes.folder_routes)
// app.use("/api/categories", routes.category_routes)



// require('./routes/category_routes')(app);
// require('./routes/note_routes')(app);
// require('./routes/folder_routes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});


