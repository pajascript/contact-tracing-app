import React, { useState } from "react";
import './App.css';
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import VisitsList from "./pages/VisitsList";
import AdminPage from "./pages/AdminPage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "./components/Header";
import CTFormPage from "./pages/NewForm";
import Sidebar from "./components/Sidebar"; 
import { RoleContext } from "./Helper/Context";

const App = () => {

  const [isAuth, setIsAuth] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <BrowserRouter>

      <RoleContext.Provider value={{ isAdmin, setIsAdmin }} >
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <Switch>

          <Route exact path="/">
            <LoginPage setIsAuth={setIsAuth} />
          </Route>

          <ProtectedRoute isAuth={isAuth} path='/home' exact component={Dashboard} />
          <ProtectedRoute isAuth={isAuth} path='/new' exact component={CTFormPage} />
          <ProtectedRoute isAuth={isAuth} path='/visits' exact component={VisitsList} />
          <ProtectedRoute isAuth={isAuth} path='/admin' exact component={AdminPage} />

        </Switch>
      </RoleContext.Provider>

    </BrowserRouter>
  );
}

export default App;
