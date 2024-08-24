const express =require("express")
const router =express.Router();
const {handleGellAllUser,handlegetUSerById, handleUpdateUserById,handleDeleteUserById,handleCreateNewUser} = require('../controller/user')
// router.use((req,res,next)=>{
//     console.log("Hello from middleware");
//     next();
//   })
  
//   router.get('/',async(req,res)=>{
//     const allDbUsers = await User.find({});
//     //res.setHeader("X-MyName","Prajakta");
//     return res.json(allDbUsers);
//   })
  
  router.route("/").get(handleGellAllUser)
  .post(handleCreateNewUser);

  router.route("/:id")
  .get(handleUpdateUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById)

  

  module.exports=router;