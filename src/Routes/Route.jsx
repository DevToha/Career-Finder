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
import MyJobs from "../Components/NavBar page/My job page/MyJobs";

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage></ErrorPage>,
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
                element: <AllJob></AllJob>
            },
            {
                path: '/AppliedJob',
                element: <AppliedJob></AppliedJob>
            },
            {
                path: '/MyJob',
                element: <MyJob></MyJob>
            },
            {
                path: '/ViewDetail/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
            },
            {
                path: '/MyJobs',
                element: <MyJobs></MyJobs>
            }

        ]
    },
]);

export default router;