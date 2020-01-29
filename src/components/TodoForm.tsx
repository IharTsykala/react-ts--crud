import React, { useState } from "react"

interface TodoFormProps {
  onAdd(title: string, id: number, complected: boolean): void
  currentUser: any
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  const {title} =  props.currentUser
  const [login, setTitle] = useState<string>('')    

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const addNewUser = () => {
    props.onAdd(login, props.currentUser.id || Date.now(), false)
    console.log(props.currentUser)   
    setTitle('')
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addNewUser()      
    }
  }

  const ClickHandler = (event: React.MouseEvent) => {
    addNewUser()        
  }

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        value={title||login}        
        type="text"
        id="login"
        placeholder="Login"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="login" className="active">
        Login
      </label>
      <button onClick={ClickHandler}>add</button>
    </div>
  )
}
