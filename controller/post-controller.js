
import Post from '../schema/post-schema.js';

export const createPost = async (request, response) =>{
    console.log(request.body);
    try{
        const post = await new Post(request.body);
        post.save();
        response.status(200).json('blog saved successfully');
    }catch(error){
        response.status(500),json(error);
    }
}

export const getAllPosts = async (request, response) =>{
    let userId = request.query.user_id;
    let category = request.query.category;
    let reqPost;
    try{
        if(userId)
            reqPost = await Post.find({ user_id: userId });
        else if(category)
            reqPost = await Post.find({ categories: category });
        else
            reqPost = await Post.find({});
        response.status(200).json(reqPost);
    }catch(error){
        response.satus(500).json(error);
    }
}

export const getPost = async (request, response) => {
    try{
        let post = await Post.findById(request.params.id);
        response.status(200).json(post);
    }catch (error){
        response.satus(500).json(error);
    }
}

export const updatePost = async (request, response) =>{

    try{
        console.log(request.body);
        await Post.findByIdAndUpdate(request.params.id, { $set: request.body }) // $set (replaces the object) $push (pushes object) $addToSet (pushing in already existing object)
        response.status(200).response('Plog updated successfully');
    }catch(error){
        response.status(500).json(error);
    }
}

export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('Post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}