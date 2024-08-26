'use client';
import { GoThumbsup } from "react-icons/go";
import { FaRegAngry, FaRegSurprise, FaLaughSquint } from "react-icons/fa";
import { Button} from '@nextui-org/react';
import React, { useState } from 'react'

const Facebook = () => {
  const [reaction, setReaction] = useState(null)
  const changeReaction = (newReaction) => {
    setReaction(reaction===newReaction ? null : newReaction)
  }
  const GenerateReactionButton=()=> {
     if(reaction=='Angry'){
        return <Button onClick={()=>changeReaction('Angry')}> <FaRegAngry color="red"/> {reaction} </Button>
      }
      else if(reaction=='Wow'){
        return <Button onClick={()=>changeReaction('Wow')}> <FaRegSurprise color="orange"/> {reaction} </Button>
      }
      else if(reaction=='Haha'){
      return <Button onClick={()=>changeReaction('Haha')}> <FaLaughSquint color="orange"/> {reaction} </Button>
      }
      else{
      return <Button onClick={()=>changeReaction('Like')}> <GoThumbsup color="blue"/> {reaction} </Button>
      }
  }
  return(
  <div>
    <div className="flex gap-2 m-2 p-2 shadow-md w-36"> 
     <GoThumbsup size={50}  onClick={()=>changeReaction('Like')}/>  
     <FaRegAngry size={50} color="red" onClick={()=>changeReaction('Angry')}/>  
     <FaRegSurprise size={50} color="orange" onClick={()=>changeReaction('Wow')}/>  
     <FaLaughSquint size={50} color="orange" onClick={()=>changeReaction('Haha')}/>  
    </div>
    <GenerateReactionButton/>
  </div>
  )
}
 export default Facebook;   