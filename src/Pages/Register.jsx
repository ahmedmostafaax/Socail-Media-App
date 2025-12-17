import { Button, Form, Input, Select, SelectItem } from '@heroui/react'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import { sendRegister } from '../Services/AuthServices.js';
import { useNavigate } from 'react-router-dom';
import { schema } from '../Schema/RegisterSchema.js';
 

export default function Register() {

  const [loading , setLoading ] = useState(false)
  const [apiError , setApiError ] = useState(null)


  const {handleSubmit , register ,control, formState:{errors}} = useForm({
    defaultValues: {
    name:'',
    email:'',
    password:'',
    rePassword:'',
    dateOfBirth:'',
    gender:''
},
    resolver:zodResolver(schema),
    mode:'onBlur',
    reValidateMode:'onBlur',


  })


  const navigate = useNavigate()

  async function signUp (userData){
    setLoading(true)
    const response = await sendRegister(userData)
    if(response.message){
      navigate('/login')
    }else{
      setApiError(response.error)
    } 
    setLoading(false) 
  }


 
  return <>
    <div className='bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md' >
      <h1 className='text-2xl mb-4 text-center text-danger'>Register Now</h1>
      
      <Form onSubmit={handleSubmit(signUp)} className="w-full flex-col gap-6 max-w-xs ">
          <Input isInvalid={Boolean(errors.name)} errorMessage={errors.name?.message} variant='bordered' className=' min-w-sm' {...register('name')} label="name" type="text" />
          <Input isInvalid={Boolean(errors.email)} errorMessage={errors.email?.message} variant='bordered' className=' min-w-sm' {...register('email')} label="Email" type="email" />
          <Input isInvalid={Boolean(errors.password)} errorMessage={errors.password?.message} variant='bordered' className=' min-w-sm' {...register('password')} label="password" type="password" />
          <Input isInvalid={Boolean(errors.rePassword)} errorMessage={errors.rePassword?.message} variant='bordered' className=' min-w-sm' {...register('rePassword')} label="rePassword " type="password" />
          <Input isInvalid={Boolean(errors.dateOfBirth)} errorMessage={errors.dateOfBirth?.message} variant='bordered' className=' min-w-sm' {...register('dateOfBirth')} label="Date Of Birth" type="date" />
          <Controller
  name="gender"
  control={control}
  render={({ field }) => (
    <Select
      {...field}
      isInvalid={Boolean(errors.gender)}
      errorMessage={errors.gender?.message}
      variant="bordered"
      label="Gender"
      className="min-w-sm"
      selectedKeys={field.value ? [field.value] : []}
      onSelectionChange={(keys) => field.onChange(Array.from(keys)[0])}
    >
      <SelectItem key="male">Male</SelectItem>
      <SelectItem key="female">Female</SelectItem>
      <SelectItem key="other">Other</SelectItem>
    </Select>
  )}
/>

          <Button isLoading={loading} variant='bordered' className='min-w-sm text-red-500' type="submit" >Register</Button>
           {apiError && <span className='text-center text-red-500 '>{apiError}</span>}
          {/* <Button variant='bordered' className='min-w-sm' type="submit" >Login</Button> */}
    </Form>
    
    </div>
  </>
}
   