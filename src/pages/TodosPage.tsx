import React, { useState, useEffect } from "react"
import { TodoForm } from "../components/TodoForm"
import { TodoList } from "../components/TodoList"
import { ITodo } from "../interfaces"

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [currentUser, setUser] = useState({})

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[]
  //   setTodos(saved)
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }, [todos])

  const addHandler = (title: string, id: number, completed: boolean) => {
    const newTodo: ITodo = {
      title: title,
      id: id,
      completed: completed
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  // const toggleHandler = (id: number) => {
  //   setTodos(prev =>
  //     prev.map(todo => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed
  //       }
  //       return todo
  //     })
  //   )
  // }

  const editHandler = (user: any) => {
    setTodos(prev => prev.filter(todo => todo.id !== user.id))
    setUser(Object.assign(currentUser, user))
    // addHandler(user.title, user.id, user.completed)
  }

  const removeHandler = (id: number) => {
    const shoudRemove = confirm("Вы уверены, что хотите удалить пользователя?")
    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
      <TodoForm onAdd={addHandler} currentUser={currentUser} />

      <TodoList todos={todos} onEdit={editHandler} onRemove={removeHandler} />
    </>
  )
}
