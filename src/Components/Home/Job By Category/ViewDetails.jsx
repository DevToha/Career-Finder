import { Link, useLoaderData } from "react-router-dom";
import './Job.css'

const ViewDetails = () => {

    const jobs = useLoaderData()

    const { job_title, salary_range, job_description, job_applicants_number, job_banner_url, job_category, application_deadline, email, displayName } = jobs


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
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Your Email</h3>
                                    <input className="input2" type="text" required placeholder="Your Email" defaultValue={email} />

                                    <h3 className="font-bold text-lg mt-5">Your Name</h3>
                                    <input className="input2" type="text" required placeholder="Your Name" defaultValue={displayName} />

                                    <h3 className="font-bold text-lg mt-5">Submit Resume</h3>
                                    <input className="input2" type="text" required placeholder="Submit resume link" />

                                    <div className="modal-action mr-[80px] mt-10">
                                        <button className="button22 mr-10">Submit</button>
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="button22">Close</button>
                                        </form>

                                    </div>
                                    <p className="h-[20px]">

                                    </p>
                                </div>
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