'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Card, CardBody, DatePicker, Image, Input, Link } from '@nextui-org/react';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  contactNumber: Yup.number().required('required').min(10).max(10),
  password: Yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    confirmPassword: Yup.string().oneOf([Yup.ref('pass'), null], 'Must match "password" field value'),
});

export const register = () => (
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
          <div className='flex justify-center items-center'>
         <Card className='flex m-12 p-2'>
         <CardBody className='flex gap-1'>
        <Form className='flex flex-col gap-1'>
        <h1>Signup</h1>
        <Image
         width={300}
         alt="logo image" 
         src="logo.png"
        /><br></br>
        <Input name="fullName" className={errors.email ? 'border border-red-600 rounded-lg':null} type="fullName" placeholder='Enter Your Fullname'/>
        {errors.fullName && touched.fullName ? <div className='text-red-900 text-sm'>{errors.fullName}</div> : null}
        <Input name="contactNumber" className={errors.email ? 'border border-red-600 rounded-lg':null} type="Number" placeholder='Contact No.'/>
        {errors.contactNumber && touched.contactNumber ? <div className='text-red-900 text-sm'>{errors.contactNumber}</div> : null}
        <Input name="email" className={errors.email ? 'border border-red-600 rounded-lg':null} type="email" placeholder='Enter Your Email'/>
        {errors.email && touched.email ? <div className='text-red-900 text-sm'>{errors.email}</div> : null}
        <Input name="password" className={errors.email ? 'border border-red-600 rounded-lg':null} type="password" placeholder='Enter Your Password'/>
        {errors.password && touched.password ? <div className='text-red-900 text-sm'>{errors.password}</div> : null}
        <Input name="confirmPassword" className={errors.email ? 'border border-red-600 rounded-lg':null} type="password" placeholder='Re-enter Your Password'/>
        {errors.confirmPassword && touched.confirmPassword ? <div className='text-red-900 text-sm'>{errors.confirmPassword}</div> : null}
        <DatePicker label='Birth Date' className={errors.email ? 'border border-red-600 rounded-lg':null}/>
        <div className='flex w-full justify-center'>
        <Button onClick={"/"}>Register</Button></div>
        <p>Already have an account? <Link href="/login" className='bg-yellow-300'> Login</Link> instead.</p>
        </Form>
        </CardBody>
        </Card>
        </div>
      )}
    </Formik>
  </div>
);
export default register