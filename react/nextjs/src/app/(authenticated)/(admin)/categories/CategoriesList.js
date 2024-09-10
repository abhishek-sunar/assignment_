'use client'
import Card from '@/components/Card/page'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const CategoriesList=()=> {
    const[categories , setCategories] = useState([])
    const fetchdata =async()=>{
        const {data} = await axios.get('https://api.escuelajs.co/api/v1/categories')
        setCategories(data)
    }
   
   const handleDelete =async(id)=>{
   const {data}=await axios.delete('https://api.escuelajs.co/api/v1/categories'+id)
    fetchdata()
  }
  useEffect(()=>{
    fetchdata()
    if(data) toast.success('Deleted successfully')
  })

  return (
    <div>
        <div className='flex gap-4'>
        {categories.map((item)=>{
        return <Card item = {item} handleDelete={handleDelete} />
           })}
        </div>
    </div>
  )
}

export default CategoriesList