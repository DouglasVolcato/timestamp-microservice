var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.json());

app.get("/api/:date", (req, res) => {
  let date = req.params.date.includes("-")
    ? req.params.date
    : Number(req.params.date);

  const newDate = new Date(date);

  const checkInvalidDate = newDate.toUTCString();

  if (checkInvalidDate == "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({ unix: Number(newDate), utc: newDate.toUTCString() });
  }
});

app.get("/api", (req, res) => {
  const newDate = new Date();

  res.json({ unix: Number(newDate), utc: newDate.toUTCString() });
});

//Show webpage
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/views/index.html');
// });
//Request Header Parser Microservice
// app.get('/api/whoami', function (req, res) {
//   res.json({ ipaddress : req.header('x-forwarded-for'), language : req.header('accept-language') , software : req.header('user-agent')});
// });

app.listen(3000, () => {
  console.log("App running at port 3000");
  console.log("Access at http://localhost:3000/");
});
