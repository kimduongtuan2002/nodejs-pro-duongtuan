
import express from "express";
import 'dotenv/config'
import webRoutes from "./routes/web";

const app = express(); //create object
const port = process.env.PORT || 8080;

//Config Template engine | use EJS | Render .ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// get file router
webRoutes(app);

// config static file: image, css, js file
app.use(express.static('public'));




app.listen(3000, () => {
    console.log(`my app is running on port: ${port}`);
    console.log("Port:", process.env.PORT)
})

