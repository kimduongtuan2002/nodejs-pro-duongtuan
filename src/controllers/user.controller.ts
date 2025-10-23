import e, { Request, Response } from "express";
import { handleCreateUser } from "../services/user-create";

const getHomePage = (rep: Request, res: Response) => { 
   return res.render("home.ejs")
};

const getCreateUserPage = (rep: Request, res: Response) => { 
   return res.render("create-user.ejs")
};

const postCreateUser = (req: Request, res: Response) => {
   const { fullName, email, address } = req.body; //get data objects
   
   // Handle create user
   handleCreateUser(fullName, email, address);

   return res.redirect("/")
};

export { getHomePage, getCreateUserPage, postCreateUser };