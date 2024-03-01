import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import App from "./App";

export const routes = createBrowserRouter([
    {
        path: '',
        element: <App/>,
        children:[            
            {
            path: "/",
            element: <Home/>,
            },
        
            {
            path: "/login",
            element: <Login/>,
            },
        
            {
            path: "/register",
            element: <Register/>,
            },
        ]
    },
    {
        path:"*",
        element:<Navigate to={"/"}/>,
    }

    
  ]);