import axios from "axios"



export async function sendRegister(userData){
  try{
      let {data} = await axios.post(`https://linked-posts.routemisr.com/users/signup`, userData)
    console.log(data)
    return data
     }catch(err){
        
        return err.response.data.error
  
    }
}
 

export async function  sendLogin(userData){
  try{
      let {data} = await axios.post(`https://linked-posts.routemisr.com/users/signin`, userData)
    console.log(data)
    return data
     }catch(err){
        
        return err.response.data.error
  
    }
}
  







export async function getUserDataApi(userData){
  try{
      let {data} = await axios.get(`https://linked-posts.routemisr.com/users/profile-data`, {
        headers: {
          token : localStorage.getItem('token')
        }
      })
    console.log(data)
    return data
     }catch(err){
        
        return err.response.data.error
  
    }
}