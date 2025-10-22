import express, {Express} from 'express';
const router = express.Router();

const webRoutes = (app: Express) => {
    //request(call back) - response(handler)
    router.get("/", (req, res) => {
        res.render("home.ejs")
    });
    
    router.get("/about", (req, res) => {
        res.send("This is page about")
    });
    
    app.use("/", router);
}

export default webRoutes;