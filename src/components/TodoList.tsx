import React from "react"
import { ITodo } from "../interfaces"
// import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router-dom"

type TodoListProps = {
  todos: ITodo[]
  // onToggle(id: number): void
  onEdit(user: object): void
  onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onEdit,
  onRemove
  // onToggle
}) => {
  const history = useHistory()
  // if (todos.length === 0) {
  //   return <p className="center">Пока пользователей нет!</p>
  // }

  const editHandler = (event: React.MouseEvent, user: any) => {
    event.preventDefault()
    onEdit(user)

    history.push(`/user/${user.id}`)
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ["todo"]
        if (todo.completed) {
          classes.push("completed")
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              {/* <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              /> */}
              <span>{todo.title}</span>
              <i
                className="material-icons blue-text edit"
                onClick={event => editHandler(event, todo)}
              >
                {/* <NavLink
                 to="/user" 
                                
              > */}
                edit
                {/* </NavLink> */}
              </i>
              <i
                className="material-icons red-text"
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
