require("dotenv").config();
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
	const ip = req.ip;
	const userAgent = req.headers["user-agent"];
	const language = req.headers["accept-language"];

	res.json({
		ipaddress: ip,
		language: language,
		software: userAgent,
	});
});

var listener = app.listen(PORT, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
