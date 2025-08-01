import React from 'react'


const Filter =() => {

    const fruits=["apple","orange","kiwi","banana"];
  return (
    <ul className='flex justify-center items-center gap-5 text-bold bg-blue-400 text-red-600 p-5'>
    {fruits.map((item,index)=>item.includes("a") ? <li key={index}>{item}</li> :null)}
    </ul>
  )
}

export default Filter