const express = require('express')
const path = require('path')
const app = express();
const port = 8000;

app.use(express.static("dist"))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});