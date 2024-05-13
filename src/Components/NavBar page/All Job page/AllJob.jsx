import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const AllJob = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            {/* items.map(item => <tr key={item._id}></tr> */}

            {
                jobs.map(jobs => <div key={jobs._id}>

                    <div key={jobs._id} className="mt-5">
                        <div key={jobs._id} className="mt-5 border-2 border-[#00e2bd] w-[1100px] h-[300px] ml-[200px] rounded-xl">
                            <div className="flex gap-10 pl-[100px]">
                                <div className="mt-[36px]">
                                    <img className="w-[150px] h-[150px] rounded-xl" src={jobs.job_banner_url} alt="" />
                                </div>
                                <div className="mt-[40px]">
                                    <p className="text-2xl font-semibold mb-5">{jobs.job_title}</p>
                                    <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {jobs.user_name}</p>
                                    <p className="flex gap-[380px]">
                                        <p className="text-base font-semibold">Salary : {jobs.salary_range}</p>

                                        <Link to={`/ViewDetail/${jobs._id}`}>
                                            <button className="button22">View Details</button>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-b-xl h-[80px] pt-[23px] bg-[#00e2bd] mt-8">
                                <div className="flex gap-10 pl-[50px]">

                                    <p className="text-lg gap-5 mr-14 font-medium flex text-center justify-center items-center">
                                        <p><FaBookmark /></p>
                                        <p>Note</p>
                                    </p>
                                    <p className="text-base font-semibold">Posting Date : {jobs.job_posting_date}</p>
                                    <p className="text-base font-semibold">Application Deadline : {jobs.application_deadline}</p>
                                    <p className="text-base font-semibold">Total Number Of Applicants : {jobs.job_applicants_number}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AllJob;