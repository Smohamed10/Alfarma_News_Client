import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import App from "./App";
import CreatePost from "./Pages/Admin/CreatePost";
import Articledeatails from "./Components/articledeatails";
import Sports from "./Pages/Sports/Sports";

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
            {
                path: "/post",
                element: <CreatePost/>,
            },
                
            {
                path: "details/:id",
                element: <Articledeatails/>,
            },

            {
                path: "/sports",
                element: <Sports/>,
            },
        ]
    },
    {
        path:"*",
        element:<Navigate to={"/"}/>,
    }

    
  ]);