
import express from "express";
import 'dotenv/config'


const app = express(); //create object
const port = process.env.PORT || 8080;

//request(call back) - response(handler)
app.get("/", (req, res) => {
    res.send("Hello World Tuan ")
})

app.get("/about", (req, res) => {
    res.send("This is page about")
})


app.listen(3000, () => {
    console.log(`my app is running on port: ${port}`);
    console.log("Port:", process.env.PORT)
})

