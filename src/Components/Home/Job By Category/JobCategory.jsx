import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Job.css'
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const JobCategory = () => {

    const { user } = useContext(AuthContext)
    // const history = useHistory();
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/job')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    // Filter jobs based on category
    const filterJobsByCategory = (category) => {
        return jobs.filter(job => job.job_category === category);
    }

    // job_title, salary_range ,job_posting_date,user_name, application_deadline, job_applicants_number,job_banner_url

    const handleViewDetails = (jobId, event) => {
        if (!user) { // If user is not logged in
            event.preventDefault(); // Prevent the default behavior of the link
            toast.error("You have to log in first to view details"); // Show toast notification
            setTimeout(() => {
                window.location.href = '/login'; // Redirect to login page after a delay
            }, 1500); // Adjust the delay as needed
            return; // Exit the function
        }
        // Redirect to job details page for logged-in user
        window.location.href = `/ViewDetail/${jobId}`;
    }

    return (
        <div className="mt-10">
            {/* <h1>Total Jobs: {jobs.length}</h1> */}
            <div className="">
                <Tabs>
                    <TabList className='tab border-2 border-gray-400 ml-[512px] rounded-lg h-[50px]'>
                        <Tab selectedClassName="active-tab">On-Site Job</Tab>
                        <Tab selectedClassName="active-tab">Remote Job</Tab>
                        <Tab selectedClassName="active-tab">Hybrid</Tab>
                        <Tab selectedClassName="active-tab">Part-Time</Tab>
                        <Tab selectedClassName="active-tab">All Job</Tab>
                    </TabList>

                    <TabPanel>
                        {/* <h2 className="mt-5">On-Site Jobs</h2> */}
                        {filterJobsByCategory("On Site").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-[#00e2bd] w-[1100px] h-[300px] ml-[200px] rounded-xl">
                                <div className="flex gap-10 pl-[100px]">
                                    <div className="mt-[36px]">
                                        <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                    </div>
                                    <div className="mt-[40px]">
                                        <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                        <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                        <p className="flex gap-[380px]">
                                            <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                            <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
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
                                        <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                        <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                        <p className="text-base font-semibold">Total Number Of Applicants : {job.job_applicants_number}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Remote Jobs</h2> */}
                        {filterJobsByCategory("Remote").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-[#00e2bd] w-[1100px] h-[300px] ml-[200px] rounded-xl">
                                <div className="flex gap-10 pl-[100px]">
                                    <div className="mt-[36px]">
                                        <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                    </div>
                                    <div className="mt-[40px]">
                                        <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                        <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                        <p className="flex gap-[380px]">
                                            <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                            <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
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
                                        <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                        <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                        <p className="text-base font-semibold">Total Number Of Applicants : {job.job_applicants_number}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Hybrid Jobs</h2> */}
                        {filterJobsByCategory("Hybrid").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-[#00e2bd] w-[1100px] h-[300px] ml-[200px] rounded-xl">
                                <div className="flex gap-10 pl-[100px]">
                                    <div className="mt-[36px]">
                                        <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                    </div>
                                    <div className="mt-[40px]">
                                        <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                        <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                        <p className="flex gap-[380px]">
                                            <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                            <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
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
                                        <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                        <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                        <p className="text-base font-semibold">Total Number Of Applicants : {job.job_applicants_number}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Part-Time Jobs</h2> */}
                        {filterJobsByCategory("Part-Time").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-[#00e2bd] w-[1100px] h-[300px] ml-[200px] rounded-xl">
                                <div className="flex gap-10 pl-[100px]">
                                    <div className="mt-[36px]">
                                        <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                    </div>
                                    <div className="mt-[40px]">
                                        <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                        <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                        <p className="flex gap-[380px]">
                                            <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                            <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
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
                                        <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                        <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                        <p className="text-base font-semibold">Total Number Of Applicants : {job.job_applicants_number}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">All Job</h2> */}
                        {
                            jobs.map(job => (
                                <div key={job._id} className="mt-5">
                                    <div key={job._id} className="mt-5 border-2 border-[#00e2bd] w-[1100px] h-[300px] ml-[200px] rounded-xl">
                                        <div className="flex gap-10 pl-[100px]">
                                            <div className="mt-[36px]">
                                                <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                            </div>
                                            <div className="mt-[40px]">
                                                <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                                <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                                <p className="flex gap-[380px]">
                                                    <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                                    <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
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
                                                <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                                <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                                <p className="text-base font-semibold">Total Number Of Applicants : {job.job_applicants_number}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </TabPanel>

                </Tabs>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobCategory;
