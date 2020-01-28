import React from "react"
// import { BrowserRouter, Switch, Route } from "react-router-dom"
// import { Navbar } from "./components/Navbar"
import { TodosPage } from "./pages/TodosPage"
// import { AboutPage } from "./pages/AboutPage"

const App: React.FC = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <TodosPage />
        {/* <AboutPage /> */}
      </div>
    </>
  )
}

export default App
