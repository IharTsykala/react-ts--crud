import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
// import { Navbar } from "./components/Navbar"
// import { TodosPage } from "./pages/TodosPage"
// import { AboutPage } from "./pages/AboutPage"
import { GetAllUsers } from "./pages/GetAllUsers/GetAllUsers"
import { GetUserByID } from "./pages/GetUserByID/GetUserByID"
// import { ModelUser } from "./pages/ModelUser"

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <div className="container">
        <Switch>
          {/* <Route component={TodosPage} path="/" exact /> */}
          <Route component={GetAllUsers} path="/users/all" exact />
          <Route component={GetUserByID} path="/user/:id" exact />
          {/* <Route component={AddUser} path="/users/add" exact />           */}
          {/* <Route component={ModelUser} path="/user/:id" exact /> */}
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
