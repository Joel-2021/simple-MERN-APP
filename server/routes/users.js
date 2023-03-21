import express  from "express";
import User from "../models/user.js";
const router=express.Router()

router.get('/',async(req,res)=>{
    try {
        const users=await User.find()
        res.json(users)
    } catch (error) {
       res.status(500).json({message:error.message})
    }
})
router.get('/:id',getUser,(req,res)=>{
    res.json(res.user)
})
router.post('/',async(req,res)=>{
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        phone_number:req.body.phone_number,
        user_name:req.body.user_name,
    })
    try {
        const newUser= await user.save()
        res.status(201).json(newUser)
    } catch (error) {
       res.status(400).json({message:error.message})
    }
})
router.patch('/:id',getUser,async(req,res)=>{
    if (req.body.name !== null) res.user.name = req.body.name;
    if (req.body.user_name !== null) res.user.user_name= req.body.user_name;
    if (req.body.phone_number !== null) res.user.phone_number = req.body.phone_number;
    if (req.body.email !== null) res.user.email = req.body.email;
    try {
      const updatedUser = await res.user.save();
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

router.delete('/:id',getUser,async(req,res)=>{
    try {
        await res.user.deleteOne()
        res.status(200).json({message:"User Deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

async function getUser(req,res,next){
    let user
    try {
        user=await User.findById(req.params.id)
        if(user==null){
            return res.status(404).json({message:'Cannot find the user'})
        }
    } catch (error) {
       return res.status(500).json({message:error.message})
    }
    res.user=user
    next()
}
export default router