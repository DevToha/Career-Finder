import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const job = useLoaderData();

    const {_id , job_title, job_category, salary_range, job_description, user_name, job_posting_date, application_deadline, job_applicants_number, user_email, job_banner_url } = job

    const { user } = useContext(AuthContext)

    const handleAddJob = event => {

        event.preventDefault()

        const form = event.target

        const job_title = form.job_title.value
        const job_category = form.job_category.value
        const salary_range = form.salary_range.value
        const job_description = form.job_description.value
        const user_name = form.user_name.value
        const job_posting_date = form.job_posting_date.value
        const application_deadline = form.application_deadline.value
        const job_applicants_number = form.job_applicants_number.value
        const user_email = form.user_email.value
        const job_banner_url = form.job_banner_url.value
        const email = user.email
        const displayName = user.displayName

        const updatedJob = {job_title, job_category, salary_range, job_description, user_name, job_posting_date, application_deadline, job_applicants_number, user_email, job_banner_url, email, displayName }

        console.log(updatedJob)

        // send data to the server

        fetch(`https://assignment-11-server-five-puce.vercel.app/job/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Job Updated Successfully",
                        // text: "Please, Go To Login Page and Login Now",
                        icon: "success"
                    });
                }
            })

    }

    return (
        <div>
            <div>
                <div className="bg-[#3b7f9188] shadow8 py-5 lg:pl-[92px] md:pl-[92px] pl-[70px] md:ml-0 lg:ml-[160px] mt-10 rounded-3xl lg:w-[1215px]">

                    <h3 className="text-3xl font-semibold lg:ml-[355px] md:ml-[150px]">Lets Update Your job</h3>


                    <div className=" md:w-1/3 mt-10 mb-10">

                        <form onSubmit={handleAddJob}>
                            <div>
                                <div className="lg:flex md:flex gap-16">
                                    <div>
                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" defaultValue={job_title} placeholder="Job Title" name="job_title" id="" required />

                                        <br />

                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Job Category" defaultValue={job_category} name="job_category" id="" required />

                                        <br />

                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Salary range" defaultValue={salary_range} name="salary_range" id="" required />

                                        <br />

                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Job Description" defaultValue={job_description} name="job_description" id="" required />

                                        <br />

                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" placeholder="User Name" defaultValue={user_name} name="user_name" id="" required />

                                        <br />


                                    </div>

                                    {/*  */}

                                    <div>
                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Job Posting Date" defaultValue={job_posting_date} name="job_posting_date" id="" required />

                                        <br />

                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Application Deadline" defaultValue={application_deadline} name="application_deadline" id="" required />

                                        <br />

                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="photoURL" placeholder="Job Banner ( Use Image URL)" defaultValue={job_banner_url} name="job_banner_url" id="" required />

                                        <br />

                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Job Applicants Number" defaultValue={job_applicants_number} name="job_applicants_number" id="" required />

                                        <br />

                                        <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="email" placeholder="User Email" defaultValue={user_email} name="user_email" id="" required />
                                    </div>
                                </div>

                                <div>
                                    <br />
                                    <input className="btn cursor-pointer ml-10 lg:ml-0 md:ml-0 mt-1 lg:w-[1001px] md:w-[580px] py-2 px-4 border-2 rounded-md border-gray-300 bg-blue-500 text-white text-lg font-medium" type="submit" value="UPDATE NOW" />
                                </div>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Update;