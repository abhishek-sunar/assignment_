'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, Image, Input, Link } from '@nextui-org/react';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'), 
  password: Yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),  
});

export const login = () => (
  <div>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange}) => (
        <div className='flex justify-center bg-cover bg-center'>
          <Card className='flex m-12 p-3'>
            <CardBody className='flex gap-1 shadow-2xl bg-amber-300 border-3 border-white rounded border-opacity-2 hover:bg-emerald-700'>
              <Form>
                <Image
                  width={300}
                  alt="logo image" 
                  src="logo.png"
                /><br></br>
                <Input name="email" className={errors.email ? 'border border-red-600 rounded-lg':null} onChange={handleChange} type="email" placeholder='Enter Your Email'/>
                {errors.email && touched.email ? <div className='text-red-900 text-sm'>{errors.email}</div>: null}
                <Input name="password" className={errors.email ? 'border border-red-600 rounded-lg':null} onChange={handleChange} type="password" placeholder='Enter Your Password'/>
                {errors.password && touched.password ? <div className='text-red-900 text-sm'>{errors.password}</div> : null}
                <div className='flex justify-center' ><Button type="submit" onClick={"/home"} className='rgb(0,155,125)'>Login</Button></div>
                <p>Don't have an account? <Link href="/register" className='text-blue-800'> Register</Link> instead.</p>
              </Form>
            </CardBody>
          </Card>
        </div>
      )}
    </Formik>
  </div>
);
export default login