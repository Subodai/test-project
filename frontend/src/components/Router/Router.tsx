import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Main from "../../pages/Main";
import Clicker from "../../pages/Clicker";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/clicker",
    element: <Clicker/>
  }
]);

const routes =[
  { name: 'Main', url: '/' },
  { name: 'Home', url: '/home'},
  { name: 'Clicker', url: '/clicker'},
];

export { Router, routes };