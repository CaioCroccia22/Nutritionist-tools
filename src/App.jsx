import * as React from 'react';
import { BrowserRouter, useRoutes } from 'react-router';
import Home from './pages/Home/Home';
import DashBoard from './pages/Dashboard/Dashboard';
import './App.module.css'



function AppRoutes() {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Dashboard',
      element: <DashBoard />
    },
  ]);
  return routes;
}

function App(){
  return(
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
