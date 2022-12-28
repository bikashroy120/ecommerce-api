const User  = require("../models/userModal")
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../config/jwtToken");

const creactUser = asyncHandler(async(req,res,next)=>{
    const email = req.body.email;
    
    const findUser = await User.findOne({email:email})
    if(!findUser){
        const newUser = await User.create(req.body)
        res.json(newUser)
    }else{
        throw new Error("User Already Exists");
    }

})

const loginUserctrl = asyncHandler(async(req,res,next)=>{
    const {email,password} = req.body;

    const findUser = await User.findOne({email:email})
    if(findUser && (findUser.password === password)){
        res.json({
            _id:findUser?._id,
            firstname:findUser?.fastname,
            lastname:findUser?.lastname,
            email:findUser?.email,
            mobile:findUser?.mobile,
            token:generateToken(findUser?._id)
        })
    }else{
        throw new Error("Invalid Credentials")
    }
})

const getallUser = asyncHandler(async (req,res)=>{
    try {
        const getUsers = await User.find();
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
})

const getOneUser = asyncHandler(async (req,res,next)=>{
    const {id} = req.params

    try {
        const getUser = await User.findById(id)
        res.json(getUser)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteUser = asyncHandler(async (req,res,next)=>{
    const {id} = req.params

    try {
        const getUser = await User.findByIdAndDelete(id)
        res.json({
            message:"user delete sussesfully"
        })
    } catch (error) {
        throw new Error(error)
    }
})


const updateUser = asyncHandler(async (req,res,next)=>{
    const {id} = req.params

    try {
        const getUser = await User.findByIdAndUpdate(id,{
            fastname:req.body.fastname,
            lastname:req.body.lastname,
            mobile:req.body.mobile
        },
        {
            new:true
        })
        res.json({
            message:"user update sussesfully",
            
        })
    } catch (error) {
        throw new Error(error)
    }
})

const blockUser = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    try {
        const block = User.findByIdAndUpdate(id,
            {isBlocked:true},
            {new:true})

           res.json({
            message:"User Blocked",
           }) 
    } catch (error) {
        throw new Error(error)
    }
})

const unblockUser = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    try {
        const unblock = User.findByIdAndUpdate(id,
            {isBlocked:true},
            {new:true})
            res.json({
                message:"User Blocked",
               }) 
    } catch (error) {
        throw new Error(error)
    }
})



module.exports = {creactUser,blockUser,unblockUser,loginUserctrl,getallUser,getOneUser,deleteUser,updateUser}