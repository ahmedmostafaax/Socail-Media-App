


import * as zod from 'zod'



export const schema = zod.object({
       
  email : zod.string().nonempty('Email is reguired').regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , 'inValid Email Address') ,      
  password : zod.string().nonempty('password is required')
  .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/ , 'inVaild Password'),
  
})

