const axios = require("axios")

export const getAllUsers = async (setUsers, setLoad) => {
    try{
        const request = await axios.get("http://localhost:8080/users/")        
        const users = request.data
        setLoad('loaded')
        setUsers(users)              
    } catch(e) {
        console.log(e)        
    }
}

export const removeHandler = async (setLoad, id, history) => {        
    try{                           
        await axios.delete(`http://localhost:8080/users/delete/${id}`)                 
        history.go(`/users/all`)                                 
    } catch(e) {
        console.log(e)        
    }
}

export const editHandler = (e, user, history)=> {    
    e.preventDefault()    
    history.push(`/user/${user._id}`)
}