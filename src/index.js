const express = require("express");

const expressConfig = require("./config/expressCongig");
const handlebarsConfig = require("./config/handlebarsConfig");

const routes = require("./routes");

const PORT = 5000;
const app = express();
expressConfig(app);
handlebarsConfig(app);
app.use(routes);
//app.get('/',homeController.getHome);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}... `);
});
