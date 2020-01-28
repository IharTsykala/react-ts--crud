import React, { useRef } from "react"

interface TodoFormProps {
  onAdd(title: string, id: number, complected: boolean): void
  currentUser: any
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')  )
  const {title} = props.currentUser
  const ref = useRef<HTMLInputElement>(null)
  if(title) ref.current!.value = title

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const addNewUser = () => {
    props.onAdd(ref.current!.value, props.currentUser.id || Date.now(), false)
    ref.current!.value = ""
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addNewUser()
      // setTitle('')
    }
  }

  const ClickHandler = (event: React.MouseEvent) => {
    addNewUser()
    // setTitle('')    
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
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
