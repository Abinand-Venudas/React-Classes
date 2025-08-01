import React, { useState } from 'react'

const InputHandling = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [age,setAge] = useState(0)
    const [gender,setGender] = useState('')



    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("name:",name);
        
    }
  return (
    <div className='flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='p-5 rounded-2xl flex flex-col gap-2'>
            <label htmlFor="name">Enter your name</label>
            <input type="text" className='rounded p-2 border ' onChange={(e)=>setName(e.target.value)}/>
              <label htmlFor="email">Enter your email</label>
            <input type="email" className='rounded p-2 border ' onChange={(e)=>setEmail(e.target.value)}/>
              <label htmlFor="age">Enter your age</label>
            <input type="number" className='rounded p-2 border ' onChange={(e)=>setAge(e.target.value)}/>
              <label htmlFor="name">Enter your name</label>
            <input type="text" className='rounded p-2 border ' onChange={(e)=>setName(e.target.value)}/>
              <label for="gender">Choose your gender:</label>

<select name="gender" id="gender" onChange={(e)=>setGender(e.target.value)}>
  <option value="volvo">Female</option>
  <option value="saab">Male</option>

</select>

<button type="submit" className=''>Submit
</button>

        </form>
    </div>
  )
}

export default InputHandling