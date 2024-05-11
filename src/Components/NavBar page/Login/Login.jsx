import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Login = () => {

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    useEffect(() => {
        document.title = "Login Page";
    }, [location.pathname]);

    const { signInUser } = useContext(AuthContext)
    const [catchError, setCatchError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSignIn = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
                // Show success alert
                Swal.fire({
                    title: "Good job",
                    text: "You Successfully Login",
                    icon: "success"
                });
            })
            .catch(error => {
                console.error(error);
                // Show error alert
                Swal.fire({
                    title: "Error Found",
                    text: "Please Clicked The OK Button and Try Again",
                    icon: "error"
                });

            });

        // password setting
        // if (password.length < 6) {
        //     setCatchError('Password should be at least 6 characters or longer');
        //     return;
        // }

        // reset error
        setCatchError('');
        // reset success
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                // setSuccess('LOG IN SUCCESSFUL')
                Swal.fire({
                    title: "Good job",
                    text: "You Successfully Login",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error)
                // setCatchError(error.message)
                Swal.fire({
                    title: "Error Found",
                    text: "Please Clicked The OK Button and Try Again",
                    icon: "error"
                });
            })
    }


    const googleProvider = new GoogleAuthProvider()

    const handleGoogleButton = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const GoogleUser = result.user;
                console.log(GoogleUser);
                navigate(location?.state ? location.state : '/');
                // Show success alert
                Swal.fire({
                    title: "Good job",
                    text: "You Successfully Login With Google",
                    icon: "success"
                });
            })
            .catch(error => {
                console.error('error', error.message);
                // Show error alert
                Swal.fire({
                    title: "Error Found",
                    text: "Please Clicked The OK Button and Try Again",
                    icon: "error"
                });
            });
    };

    return (
        <div className="bg-[#f7f7f7] shadow8 py-5 lg:pl-[115px] lg:ml-[450px] md:ml-0 m-10 rounded-3xl w-[600px]">
            <div className=" md:w-1/3 mt-10 mb-10">
                <h3 className="text-3xl mb-8 ml-[60px] font-semibold w-[230px]">Lets get started!</h3>
                <form
                    onSubmit={handleSignIn}
                >
                    <input className="mb-4 w-[352px] py-2 px-4 border-2 border-gray-300 rounded-md" type="email" placeholder="Email Address" name="email" id="" required />
                    <br />
                    <input className="mb-4 w-[352px] py-2 px-4 border-2 border-gray-300 rounded-md" type="password" placeholder="Password" name="password" id="" required />
                    {
                        catchError && <p className="text-base font-medium text-red-500">{catchError}</p>
                    }

                    {
                        success && <p className="text-base font-medium text-green-600">{success}</p>
                    }
                    <br />
                    <input className="cursor-pointer mb-4 w-[352px] py-2 px-4 border-2 rounded-md border-gray-300 bg-blue-600 text-white font-semibold" type="submit" value="LOG IN" />
                </form>

                <div className="flex gap-4 mb-3 ml-2 w-[355px]">
                    <div className="bg-gray-500 w-[138px] h-[2px] mt-3"></div>
                    <div className="">OR</div>
                    <div className="bg-gray-500 w-[138px] h-[2px] mt-3"></div>
                </div>

                <div className="mb-4 relative">
                    <button
                        onClick={handleGoogleButton}
                        className="cursor-pointer w-[352px] py-2 px-4 border-2 rounded-md border-gray-300 bg-white text-base font-semibold">Continue With Google</button>

                    <span className="absolute top-3 left-16 text-xl"><FcGoogle /></span>
                    {/* <ToastContainer /> */}
                </div>

                <p className="mt-4 ml-[53px] w-[270px] font-medium">NEW TO THE WEBSITE ? <Link to="/register"> <a className="text-blue-800 font-bold underline underline-offset-4" href="">REGISTER</a></Link></p>

            </div>

        </div>
    );
};

export default Login;