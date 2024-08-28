'use client'
import { changeBackgroundColor, changeShape ,moveBottom,decreaseWidth,increaseWidth,moveLeft,moveRight, moveUp} from '@/redux/reducerSlice/boxslice'
import { Button } from '@nextui-org/react'
import React from 'react'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const box = () => {
    const dispatch = useDispatch()
    const {padding, width,isCircle,marginLeft,marginTop, height,margin,borderRadius,backgroundColor} = useSelector((state) => state.box)
    const area = borderRadius ? Math.PI * (width/2)**2 : width*height
    const handleChange =(event)=> {
      dispatch(changeBackgroundColor(event.target.value))
    }
  return (
    <div>
      <div className='m-10'>Area is {area}</div>
        <div className='p-4 m-4 w-2'
          onClick={()=> dispatch(changeShape())}
          style={{
            position: 'absolute',
            marginLeft: marginLeft,
            marginTop: marginTop,
            backgroundColor:backgroundColor, width:width, margin:margin, height:height, borderRadius:  borderRadius}}>
        </div>
        <input className='m-4 p-4 w-20%' onChange={handleChange} placeholder="Property:value"/>
        <Button onClick={()=> dispatch(decreaseWidth())}>-</Button>
        <Button onClick={()=> dispatch(increaseWidth())}>+</Button>
        <Button onClick={()=>dispatch(moveLeft())}><FaArrowLeft/></Button>
        <Button onClick={()=> dispatch(moveRight())}><FaArrowRight/></Button>
        <Button onClick={()=> dispatch(moveUp())}><FaArrowUp/></Button>
        <Button  onClick={()=> dispatch(moveBottom())}><FaArrowDown/></Button>
    </div>
  )
}

export default box