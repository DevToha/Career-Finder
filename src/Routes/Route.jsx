import { createBrowserRouter } from "react-router-dom";
import Root from "../Shared/Main/Root";
import Blogs from "../Components/NavBar page/Blogs/Blogs";
import Homes from "../Components/Home/Homes/Homes";
import Login from "../Components/NavBar page/Login/Login";
import Register from "../Components/NavBar page/Register/Register";
import AddJob from "../Components/NavBar page/Add Job/AddJob";
import PrivateRoute from "./PrivateRoute";
import AllJob from "../Components/NavBar page/All Job page/AllJob";
import ViewDetails from "../Components/Home/Job By Category/ViewDetails";
import AppliedJob from "../Components/NavBar page/Applied job/AppliedJob";
import MyJob from "../Components/NavBar page/My job page/MyJob";
import Update from "../Components/NavBar page/My job page/Update";
import Error from "../Error Page/Error";


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Homes></Homes>
            },
            {
                path: '/Blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/AddJob',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: '/AllJob',
                element: <AllJob></AllJob>,
                loader: () => fetch('https://assignment-11-server-five-puce.vercel.app/jobsCount')
            },
            {
                path: '/AppliedJob',
                element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>
            },
            {
                path: '/MyJob',
                element: <PrivateRoute><MyJob></MyJob></PrivateRoute>
            },
            {
                path: '/ViewDetail/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-five-puce.vercel.app/job/${params.id}`)
            },
            {
                path: '/Update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assignment-11-server-five-puce.vercel.app/job/${params.id}`)
            }

        ]
    },
]);

export default router;