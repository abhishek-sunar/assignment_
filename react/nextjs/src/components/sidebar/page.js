'use client'
import { Listbox, ListboxItem } from '@nextui-org/react'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <Listbox>
        <ListboxItem>Dashboard</ListboxItem>
        <ListboxItem>User</ListboxItem>
        <ListboxItem>Product</ListboxItem>
        <ListboxItem>Categories</ListboxItem>
      </Listbox>
    </div>
  )
}

export default Sidebar























// 'use client'
// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import { useSelector } from "react-redux";



// export default function Sidebar() {
//     const {wishlistItems}= useSelector(state=>state.product)
//     const {name} = useSelector(state=>state.user)

//   return (
//     <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    
//       {name}, your wishlist item:
//     {wishlistItems.length>0 ? wishlistItems.map((item,id)=>{
//         return <div className="flex">
//             <li>{id+1}-------- {item.productName}</li> 
//             <FaTrash/>
//         </div>
//     }): "No Wishlist!!"}
//     </div>
//   );
// }