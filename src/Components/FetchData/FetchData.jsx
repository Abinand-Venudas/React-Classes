import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FetchData = () => {
  const[userDatas,setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{

    const FetchUserData = async()=>{
      let response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUserData(response.data);
    }

    FetchUserData();
  },[])
  console.log("userDatas:",userDatas);
  

  return (
    <div>
      

      <table className='border p-1'>
        <tr className='flex'>
          <td className='border'><thead className='border p-1'>Id</thead></td>
          <td className='border'><thead className='border p-1'>Name</thead></td>
          <td className='border'><thead className='border p-1'>Phone</thead></td>
        </tr>

        <tbody className='border p-1'>
          {userDatas.map((user)=>(
            <tr className='border p-1' key={user.id}>
              <td className='border p-1'>{user.id}</td>
              <td className='border p-1' onClick={()=>navigate(`/contact/${user.id}/${user.phone}`)}>{user.name}</td>
              <td className='border p-1'>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FetchData