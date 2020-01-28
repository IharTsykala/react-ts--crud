import React, { useRef } from "react"

interface TodoFormProps {
  onAdd(title: string, id: number, complected: boolean): void
  currentUser: any
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  // const [title, setTitle] = useState<string>('')
  const ref = useRef<HTMLInputElement>(props.currentUser.title)

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  // }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value, Date.now(), false)
      ref.current!.value = ""
      // console.log(title)
      // setTitle('')
    }
  }

  const ClickHandler = (event: React.MouseEvent) => {
    // if (event.key === "Enter") {
    props.onAdd(ref.current!.value, Date.now(), false)
    ref.current!.value = ""
    // console.log(title)
    // setTitle('')
    // }
  }

  // editHandler = (title: string) => {
  //   ref.current!.value = title
  // }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref}
        type="text"
        id="title"
        placeholder="Новый пользователь"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Новый пользователь
      </label>
      <button onClick={ClickHandler}>add</button>
    </div>
  )
}
