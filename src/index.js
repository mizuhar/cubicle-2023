const express = require("express");
const mongoose = require("mongoose");
const dbConnect = require("./config/dbconfig");
const errorHandler = require('./middlewares/errorHandlerMiddleware');
const expressConfig = require("./config/expressCongig");
const handlebarsConfig = require("./config/handlebarsConfig");

const routes = require("./routes");

const PORT = 5000;
const app = express();
expressConfig(app);
handlebarsConfig(app);

dbConnect()
  .then(() => console.log("DB Connecting succesfully!"))
  .catch(err => console.log("DB error: ", err.message));

app.use(routes)
//app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}... `);
});
