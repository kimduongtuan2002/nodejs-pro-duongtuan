import e, { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDeleteUser } from "services/user-create";
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

const postCreateUser = async (req: Request, res: Response) => {
   const { fullName, email, address } = req.body; //get data objects
   
   // Handle create user
   await handleCreateUser(fullName, email, address);

   return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
   const { id } = req.params; //get id
   
   await handleDeleteUser(id);

   return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser };