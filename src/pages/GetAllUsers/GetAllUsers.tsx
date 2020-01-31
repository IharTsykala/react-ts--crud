import React, { useEffect, useState } from "react"
import { getAllUsers, removeHandler, editHandler } from './serviceGetAllUsers'
import { useHistory } from "react-router-dom"


export const GetAllUsers: React.FC = () => {
  const [users, setUsers]: any = useState([])
  const [load, setLoad]: any = useState('loading')
  const history = useHistory()

  useEffect(() => {
    
  getAllUsers(setUsers, setLoad) 

  },[])  
  
  if (load ==='loading'){    
    return (        
        <>         
        <h1>Ожидайте ответа</h1>
        </>  
      ) 
  } 
  if (load ==='loaded') {       
    return (
      <>  
         <i
              className="material-icons red-text"
              // onClick={event => removeHandler(event, todo.id)}
            >add user
            </i>    
        <ul>
        {users.map((user: any) => <li key={user._id}><p>{user.login}</p>
            <i 
              className="material-icons blue-text edit"
              onClick={event => editHandler(event, user, history)}
            >edit                
            </i>
            <i
              className="material-icons red-text"
              onClick={event => {
                removeHandler(setLoad, user._id,history)
                // () => {()=> history.push(`/users/all`)}
              }}
            >delete
            </i>
         </li>)}
         </ul> 
         </>             
    ) 
  } 
  else {  
    return (      
        <>
            <h1>ошибка запроса</h1> 
        </>
    )
  }
}