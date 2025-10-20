
import express from "express";

const app = express(); //create object
const port = 3000;

//request(call back) - response(handler)
app.get("/", (req, res) => {
    res.send("Hello duong tuan")
})

app.get("/about", (req, res) => {
    res.send("This is page about")
})


app.listen(3000, () => {
    console.log(`my app is running on port: ${port}`)
})

