import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import App from "./App";
import CreatePost from "./Pages/Admin/CreatePost";
import Articledeatails from "./Components/articledeatails";
import Sports from "./Pages/Sports/Sports";
import Accident from "./Pages/Accident/Accident";
import Art from "./Pages/Art/Art";
import Economy from "./Pages/Economy/Economy";
import Education from "./Pages/Education/Education";
import Governorate from "./Pages/Governorate/Governorate";
import Health from "./Pages/Health/Health";
import Petrol from "./Pages/Petrol/Petrol";
import Technology from "./Pages/Technology/Technology";
import World from "./Pages/World/World";
import Contact from "./Pages/Contact/Contact";
import Postad from "./Pages/Admin/Postad";

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
            path: "/Login",
            element: <Login/>,
            },
            {
            path:"/postad",
            element:<Postad/>
            },
            {
            path: "/Register",
            element: <Register/>,
            },
            {
                path: "/Post",
                element: <CreatePost/>,
            },
            {
                path: "/Contact",
                element: <Contact/>,
            },
                
            {
                path: "/Articledeatails/:id",
                element: <Articledeatails/>,
            },
            {
                path: "/Sports",
                element: <Sports/>,
            },
            {
                path: "/Accident",
                element: <Accident/>,
            },
            {
                path: "/Art",
                element: <Art/>,
            },
            {
                path: "/Economy",
                element: <Economy/>,
            },
            {
                path: "/Education",
                element: <Education/>,
            },
            {
                path: "/Governorate",
                element: <Governorate/>,
            },
            {
                path: "/Health",
                element: <Health/>,
            },
            {
                path: "/Petrol",
                element: <Petrol/>,
            },
            {
                path: "/Technology",
                element: <Technology/>,
            },
            {
                path: "/World",
                element: <World/>,
            },

        ]
    },
    {
        path:"*",
        element:<Navigate to={"/"}/>,
    }

    
  ]);