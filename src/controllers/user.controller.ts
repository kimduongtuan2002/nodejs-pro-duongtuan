import e, { Request, Response } from "express";
import { getAllUsers, handleCreateUser } from "../services/user-create";
import { name } from "ejs";

const getHomePage = async (rep: Request, res: Response) => { 
   // get data users
   const users = await getAllUsers();
   return res.render("home.ejs", {
      users: users
   })
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