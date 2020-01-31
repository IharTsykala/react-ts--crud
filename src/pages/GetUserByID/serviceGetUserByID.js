const axios = require("axios")

export const getUserByID = async (setUsers, setLoad, id) => {
    try{
        const request = await axios.get(`http://localhost:8080/users/${id}`)
        const user = request.data        
        const fildsUser = Object.entries(user).filter((fild)=> fild[0]==='role'||fild[0]==='name' ||
        fild[0]==='login' || fild[0]==='phone')        
        setLoad('loaded')
        setUsers(fildsUser)                   
    } catch(e) {
        console.log(e)        
    }
}

export const exitHandler = (e, history)=> {    
    e.preventDefault()    
    history.push(`/users/all`)
}