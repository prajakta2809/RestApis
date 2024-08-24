const User = require('../models/user')

async function handleGellAllUser(req,res){
    const allDbUsers = await User.find({});
       const html =
       `<ul>
       ${allDbUsers.map((user)=> `<li>${user.firstName}- ${user.email} - ${user.gender}</li>`).join("")}
       <ul/>`;
       res.send(html)
}

async function handlegetUSerById(req,res){
    const user =await  User.findById(req.params.id)
    if(!user){
      return res.status(404).json({error: "user not found"})
    }
    return res.json(user);
}


async function handleUpdateUserById(req,res){
   await User.findByIdAndUpdate(req.params.id,{firstName: "Changed"})
   return res.json({status: "Success"});
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({status: "Success"});
}

async function handleCreateNewUser(req,res){
    const body =req.body;
    console.log("body:",body);
    
    if(!body || !body.firstName || !body.email || !body.gender){
      return res.status(400).json({msg: "All fields required"})
    }
   const result_user=await User.create({
    firstName: body.firstName,
    email:body.email,
    gender:body.gender
   });
   return res.status(201).json({msg:"Created!",id:result_user._id});  
}

module.exports ={
    handleGellAllUser,
    handlegetUSerById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}