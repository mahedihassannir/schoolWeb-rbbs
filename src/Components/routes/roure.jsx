import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Err from "../Pages/Err";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Class from "../Pages/Class";
import Login from "../Pages/Login";
import Conteact from "../Pages/Conteact";
import Ourteachers from "../Pages/Ourteachers";
import ContinueCourse from "../Pages/continueCourse";



let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Err></Err>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "About",
                element: <About></About>
            },
            {
                path: "Class",
                element: <Class></Class>
            },
            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "Contact",
                element: <Conteact></Conteact>

            },
            {
                path: "Ourteachers",
                element: <Ourteachers></Ourteachers>

            },
            {
                path: "Courses",
                element: <ContinueCourse></ContinueCourse>

            },
            

        ]

    }
])


export default router