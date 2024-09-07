'use client'
import Sidebar from '@/components/sidebar/page'
import React from 'react'

const Adminlayout = ({children}) => {
  return (
    <div>
    <Sidebar/>    
    {children}</div>
  )
}

export default Adminlayout