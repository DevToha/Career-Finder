import { createBrowserRouter } from "react-router-dom";
import Root from "../Shared/Main/Root";
import Blogs from "../Components/NavBar page/Blogs/Blogs";
import Homes from "../Components/Home/Homes/Homes";
import Login from "../Components/NavBar page/Login/Login";
import Register from "../Components/NavBar page/Register/Register";

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
            }

        ]
    },
]);

export default router;