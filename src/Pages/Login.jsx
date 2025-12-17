import { Button, Form, Input } from '@heroui/react'
import React, { useContext, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendLogin } from '../Services/AuthServices.js';
import { Link, useNavigate } from 'react-router-dom';
import { schema } from '../Schema/Loginschema.js';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthContext.jsx';

export default function Login() {

  const [loading, setLoading] = useState(false)
  const [apiError, setApiError] = useState(null)

  const { setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  })

  async function signUp(userData) {
    setLoading(true)
    setApiError(null)

    try {
      const response = await sendLogin(userData)

      // لو السيرفر راجع بنجاح
      if (response?.token) {

        // تخزين التوكن بشكل صحيح
        localStorage.setItem("token", response.token)

        // خلي الحالة true مش التوكن
        setIsLoggedIn(true)
        // بنخلي الابلكيشن يعمل ريفرش ويروح للصفحة اللي عاوزنها

        window.location.href = "/"
        
        // روح للصفحة الرئيسية
        navigate("/")
      } 
      else {
        setApiError("Email or password is incorrect")
      }

    } catch (error) {
      setApiError("Email or password is incorrect")
    }

    setLoading(false)
  }

  return (
    <div className='bg-white rounded-2xl shadow-2xl py-10 px-6 min-w-md'>
      <h1 className='text-2xl mb-4 text-center text-danger'>Login Now</h1>

      <Form onSubmit={handleSubmit(signUp)} className="w-full flex flex-col gap-6 max-w-xs ">

        <Input
          isInvalid={Boolean(errors.email)}
          errorMessage={errors.email?.message}
          variant='bordered'
          className='min-w-sm'
          {...register('email')}
          label="Email"
          type="email"
        />

        <Input
          isInvalid={Boolean(errors.password)}
          errorMessage={errors.password?.message}
          variant='bordered'
          className='min-w-sm'
          {...register('password')}
          label="Password"
          type="password"
        />

        <Button isLoading={loading} variant='bordered' className='min-w-sm' type="submit">
          Login Now
        </Button>

        <div className='flex justify-center items-center w-full'>
          did not have account?
          <Link className='text-red-800 ml-1' to={'/register'}>Register</Link>
        </div>

        {apiError && (
          <span className='text-center w-full text-red-600 bg-red-100 px-4 py-2 rounded shadow-sm mt-2'>
            {apiError}
          </span>
        )}

      </Form>
    </div>
  )
}
