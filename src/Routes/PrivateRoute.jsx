import PropTypes from 'prop-types'; // ES6
import './Private.css'
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location.pathname)

    if (loading) {
        return <div className="text-center mt-10 items-center justify-center">
            <div className="loader16">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to="/logIn"></Navigate>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}