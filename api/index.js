const express = require("express");
const requestIp = require("request-ip");
const app = express();
const { v4 } = require("uuid");

app.get("/api", (req, res) => {
	const path = `/api/item/${v4()}`;
	res.setHeader("Content-Type", "text/html");
	res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
	var clientIp = requestIp.getClientIp(req);
	res.send(`Your IP Address is ${clientIp}.`);
});

app.get("/api/item/:slug", (req, res) => {
	const { slug } = req.params;
	res.end(`Item: ${slug}`);
});

module.exports = app;
