import axios from "axios"


        // get all posts
export  async function GetAllPosts(){
   try{
     const {data} = await axios.get('https://linked-posts.routemisr.com/posts' , {
        headers:{
            token:localStorage.getItem('token')
        },
        params:{
            limit:30,
            sort:'-createdAt'
        }
    })
    console.log(data);
    return data
   }catch(err){
    console.log(err)
   }
}




// get single post

export  async function GetSinglePost(postId){
   try{
     const {data} = await axios.get('https://linked-posts.routemisr.com/posts/'+postId , {
        headers:{
            token:localStorage.getItem('token')
        }
    })
    console.log(data);
    return data
   }catch(err){
    console.log(err)
   }
}






   //   add post



   export  async function CreatePostApi( formData){
   try{
     const {data} = await axios.post('https://linked-posts.routemisr.com/posts', formData ,
    {
        headers:{
            token:localStorage.getItem('token')
        }
    })
    console.log(data);
    return data
   }catch(err){
    console.log(err)
   }
}