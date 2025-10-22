import { Request, Response } from "express";

const getHomePage = (rep: Request, res: Response) => { 
   return res.render("home.ejs")
};

const getCreateUserPage = (rep: Request, res: Response) => { 
   return res.render("create-user.ejs")
};

const postCreateUser = (req: Request, res: Response) => {
    console.log(">>> Check Body: ", req.body);
   return res.redirect("/")
};

export { getHomePage, getCreateUserPage, postCreateUser };