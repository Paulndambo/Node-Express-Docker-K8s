import express from "express";
import os from "os";
import morgan from "morgan";

//const fetch = require("node-fetch");
import fetch from "node-fetch";

const PORT = 5000;
const app = express();

app.use(morgan('tiny'));

app.get("/", function(req, res) {
    const helloMessage = `Hello from ${os.hostname()}!`;
    console.log(helloMessage)
    res.status(200).send(helloMessage);
})

app.get("/nginx", async (req, res) => {
    const url = "http://nginx"
    const response = await fetch(url);
    const body = await response.text();
    res.status(200).send(body);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})