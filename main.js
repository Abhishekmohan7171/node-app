// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const server = require("http").Server(app);
// const port = 4000;
// const helmet = require("helmet");

// app.use(helmet());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// //pre-flight requests
// app.options("*", function (req, res) {
//   res.send(200);
// });

// server.listen(port, (err) => {
//   if (err) {
//     throw err;
//   }
//   /* eslint-disable no-console */
//   console.log("Node Endpoints working :)");
// });

// app.get("/webhooks", (err, res) => {
//   console.log("<------------Response------------>", res);
//   res.status(200);
//   res.json({ working: true });
//   res.end();
// });

// module.exports = server;

// app.listen(process.env.PORT || port, ()=> console.log(`Listening to ${port}`))

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").Server(app);
const port = 4000;
const helmet = require("helmet");

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept"
  );
  next();
});

//pre-flight requests
app.options("*", function (req, res) {
  res.send(200);
});

server.listen(port, (err) => {
  if (err) {
    throw err;
  }
  /* eslint-disable no-console */
  console.log("Node Endpoints working :)");
});

app.get("/webhooks", (err, res) => {
  console.log("<------------Response------------>", res);
  res.status(200);
  res.json({ working: true });
  res.end();
});

app.post("/webhooks", (err, res) => {
  console.log("<------------Response------------>", res);
  console.error("<----------Error--------------->", err);
  res.status(200);
  res.json({ working: true });
  res.end();
});

module.exports = server;

