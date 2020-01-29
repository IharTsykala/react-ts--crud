import React, { useEffect, useState } from "react"
// import { useHistory } from 'react-router-dom'
const axios = require('axios')

export const ModelUser: React.FC = () => {
  const [users, setUsers]: any = useState([])
  // const [load, ]  

  useEffect(() => {   
   async function req() {
   const req = await axios.get('http://localhost:8080/users')
   const data = req.data
   console.log(data[0].name)
   console.log(2)
   setUsers(setUsers)   
   } 
   req()
    // console.log(res)
  },[]);
   
    return (
      <>
      <div>
      {users[0].name ? users[0].name :'ждите'}
      </div>
      
      {/* <h1>Страница информации</h1>        */}
      </>
    )
    
  }
  