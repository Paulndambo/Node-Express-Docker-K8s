const express = require("express");
const os = require("os");
const morgan = require("morgan");

const PORT = 5000;
const app = express();

app.use(morgan('tiny'));

app.get("/", function(req, res) {
    const helloMessage = `Hello from ${os.hostname()}!`;
    console.log(helloMessage)
    res.status(200).send(helloMessage);
})

app.get("/hello", (req, res) => {
    res.status(200).send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})