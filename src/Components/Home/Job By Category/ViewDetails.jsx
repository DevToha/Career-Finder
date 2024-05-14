import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import './Job.css'
import { AuthContext } from "../../../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const ViewDetails = () => {

    const { user } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const jobs = useLoaderData()

    const { job_title, salary_range, job_description, job_applicants_number, job_banner_url, job_category, application_deadline, email, displayName } = jobs


    const handleSubmit = event => {


        event.preventDefault()
        const form = event.target

        const email = form.email.value
        const name = form.name.value
        const resume = form.resume_link.value
        const job_title = form.job_title.value
        const salary_range = form.salary_range.value
        const job_category = form.job_category.value
        const LoginEmail = user.email
        const LoginUserName = user.displayName
        

        const newAppliedJob = { email, name, resume, LoginEmail, LoginUserName,job_title,salary_range ,job_category}
        console.log(newAppliedJob)

        // send data to the server

        fetch('http://localhost:5000/appliedJob', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAppliedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate(location?.state ? location.state : '/AppliedJob');
                if (data.insertedId) {
                    Swal.fire({
                        title: "Item Added Successfully",
                        // text: "Please, Go To Login Page and Login Now",
                        icon: "success"
                    });
                }
            })
    }


    return (
        <div>
            <div className="mt-16 border-2 border-[#00e2bd] w-[1250px] h-[550px] ml-[140px] rounded-xl">
                <div className="flex gap-10 pl-[50px]">
                    <div className="mt-[36px]">
                        <img className="w-[400px] h-[350px] rounded-xl" src={job_banner_url} alt="" />
                    </div>
                    <div className="mt-[100px]">
                        <p className="text-2xl font-semibold mb-5">{job_title}</p>
                        <p className="text-base font-medium mb-5">Description : {job_description}</p>
                        <p className="text-base font-medium mb-5">Category : {job_category}</p>
                        <p className="text-base font-medium mb-5">Deadline : {application_deadline}</p>
                        <p className="flex gap-[380px]">
                            <p className="text-base font-semibold">Salary : {salary_range}</p>

                            <Link>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="button22">Apply Now</button>
                            </Link>

                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Your Email</h3>
                                        <input className="input2" type="text" required placeholder="Your Email" name="email" defaultValue={email} />

                                        <h3 className="font-bold text-lg mt-5">Your Name</h3>
                                        <input className="input2" type="text" required placeholder="Your Name" name="name" defaultValue={displayName} />

                                        <input className="input2 hidden" type="text" required placeholder="Applied Job Name" name="job_title" defaultValue={job_title} />

                                        <input className="input2 hidden" type="text" required placeholder="Applied Job Name" name="salary_range" defaultValue={salary_range} />

                                        <input className="input2 hidden" type="text" required placeholder="Applied Job Name" name="job_category" defaultValue={job_category} />

                                        <h3 className="font-bold text-lg mt-5">Submit Resume</h3>
                                        <input className="input2" type="text" required placeholder="Submit resume link" name="resume_link" />

                                        <div className="modal-action mr-[50px] mt-10">
                                            <input className="button22" type="submit" value="Submit" />
                                            <form method="dialog">
                                                <button className="button22">Close</button>
                                            </form>

                                        </div>
                                        <p className="h-[20px]">

                                        </p>
                                    </div>
                                </form>
                            </dialog>
                        </p>
                    </div>
                </div>
                <div className="rounded-b-xl h-[130px] pt-[50px] bg-[#00e2bd] mt-8">
                    <div className="flex gap-10 pl-[443px] text-center">
                        <p className="text-2xl font-bold ">Total Applicants Number : {job_applicants_number}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;