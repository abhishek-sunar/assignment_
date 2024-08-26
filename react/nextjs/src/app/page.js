'use client'
import { Button } from '@nextui-org/react';
import { useState } from "react";
import React from 'react'

const Home = () => {
  let [num, setNum] = useState(10);
  const handleChange = (operation)=>{
    if(operation==='inc'){
      if(num>=0 && num<10){
        setNum(num + 1)
      }
      else{
        alert('The number is greater than 10')
      }
    }
    else{
      if(num>0){
        setNum(num-1)
      }
      else{
        alert('the number is less than 0')
      }
    }
  }
  return (
    <div>
      <Button onClick={()=>{handleChange('dec')}}>-</Button>
      {num}
      <Button onClick={()=>{handleChange('inc')}}>+</Button>
    </div>
  )
}

export default Home