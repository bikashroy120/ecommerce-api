const Blog = require("../models/blogMadel");
const User = require("../models/userModal");
const asyncHandler = require("express-async-handler");

const creactBlog = asyncHandler(async(req,res,next)=>{
    try {
      const newBlog = await Blog.create(req.body);
        res.json(newBlog)
    } catch (error) {
        throw new Error(error)
    }
});


const updateBlog = asyncHandler(async(req,res,next)=>{
    const {id} = req.params;
    try {
        const update = await Blog.findByIdAndUpdate(id,req.body,{
            new:true
        })

        res.json(update);
    } catch (error) {
        throw new Error(error)
    }
})

const getBlog = asyncHandler(async(req,res,next)=>{
    const {id} = req.params;

    try {
        const blog = await Blog.findById(id)
        .populate("likes")
        .populate("dislikes");
        await Blog.findByIdAndUpdate(id,
            {
                $inc:{numViews:1}
            },
            {
                new:true
            })
        res.json(blog)
    } catch (error) {
        throw new Error(error)
    }
})

const getAllBlog  = asyncHandler(async(req,res,next)=>{
    try {
        const blog = await Blog.find();
        res.json(blog)
    } catch (error) {
        throw new Error(error)
    }
})

const deleteBlog = asyncHandler(async(req,res,next)=>{
    const {id} = req.params;

    try {
        const deletedblog = await Blog.findByIdAndDelete(id);
        rs.json("blog is Delete")
    } catch (error) {
        throw new Error(error)
    }
})

const liketheBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    validateMongoDbId(blogId);
    // Find the blog which you want to be liked
    const blog = await Blog.findById(blogId);
    // find the login user
    const loginUserId = req?.user?._id;
    // find if the user has liked the blog
    const isLiked = blog?.isLiked;
    // find if the user has disliked the blog
    const alreadyDisliked = blog?.dislikes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
    );
    if (alreadyDisliked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        },
        { new: true }
      );
      res.json(blog);
    }
    if (isLiked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(blog);
    } else {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $push: { likes: loginUserId },
          isLiked: true,
        },
        { new: true }
      );
      res.json(blog);
    }
  });
  const disliketheBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.body;
    // Find the blog which you want to be liked
    const blog = await Blog.findById(blogId);
    // find the login user
    const loginUserId = req?.user?._id;
    // find if the user has liked the blog
    const isDisLiked = blog?.isDisliked;
    // find if the user has disliked the blog
    const alreadyLiked = blog?.likes?.find(
      (userId) => userId?.toString() === loginUserId?.toString()
    );
    if (alreadyLiked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { likes: loginUserId },
          isLiked: false,
        },
        { new: true }
      );
      res.json(blog);
    }
    if (isDisLiked) {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $pull: { dislikes: loginUserId },
          isDisliked: false,
        },
        { new: true }
      );
      res.json(blog);
    } else {
      const blog = await Blog.findByIdAndUpdate(
        blogId,
        {
          $push: { dislikes: loginUserId },
          isDisliked: true,
        },
        { new: true }
      );
      res.json(blog);
    }
  }); 


  module.exports = {disliketheBlog,liketheBlog,deleteBlog,getAllBlog,getBlog,updateBlog,creactBlog}