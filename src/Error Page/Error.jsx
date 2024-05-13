import { useEffect } from "react";
import { Link, useLocation} from "react-router-dom";
import image from './Error Image/404-error-404.gif'

const Error = () => {
    // const error = useRouteError()
    const location = useLocation();

    useEffect(() => {
        document.title = "404";
    }, [location.pathname]);

    return (
        <div className="mt-24">
            <p className="ml-[570px]">
                <img src={image} alt="" />
            </p>
            <p className="text-center mt-8"><Link to="/"><button className="button22 text-white">Back To Home</button></Link></p>
        </div>
    );
};

export default Error;