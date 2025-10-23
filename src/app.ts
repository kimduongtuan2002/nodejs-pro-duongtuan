
import express from "express";
import 'dotenv/config'
import webRoutes from "./routes/web";

const app = express(); //create object
const port = process.env.PORT || 8080;

//Config Template engine | use EJS | Render .ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// config static file: image, css, js file
app.use(express.static('public'));

//Config req.body | setting check if have data from HTML FORM
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// get file router
webRoutes(app);


app.listen(3000, () => {
    console.log(`my app is running on port123: ${port}`);
})

