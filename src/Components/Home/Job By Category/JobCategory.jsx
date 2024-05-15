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
        fetch('https://assignment-11-server-five-puce.vercel.app/job')
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
                    <TabList className='tab border-2 border-gray-400 lg:ml-[512px] md:ml-[150px] ml-0 rounded-lg lg:h-[50px] md:h-[50px] h-[100px]'>
                        <Tab selectedClassName="active-tab">On-Site Job</Tab>
                        <Tab selectedClassName="active-tab">Remote Job</Tab>
                        <Tab selectedClassName="active-tab">Hybrid</Tab>
                        <Tab selectedClassName="active-tab">Part-Time</Tab>
                        <Tab selectedClassName="active-tab">All Job</Tab>
                    </TabList>

                    <TabPanel>
                        {/* <h2 className="mt-5">On-Site Jobs</h2> */}
                        {filterJobsByCategory("On Site").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-[#00e2bd] lg:w-[1100px] lg:h-[300px] h-auto lg:ml-[200px] rounded-xl">
                                <div className="lg:flex gap-10 lg:pl-[100px]">
                                    <div className="mt-[36px] ml-28 lg:ml-0 md:ml-[300px]">
                                        <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                    </div>
                                    <div className="mt-[40px] ml-20 lg:ml-0 md:ml-[280px]">
                                        <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                        <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                        <p className="lg:flex lg:gap-[380px]">
                                            <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                            <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
                                                <button className="button22 lg:mt-0 md:mt-7  mt-5 ml-9 lg:ml-0 md:ml-9">View Details</button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-b-xl lg:h-[80px] pt-[23px] lg:pb-0 md:pb-0 pb-5 bg-[#00e2bd] mt-8">
                                    <div className="flex lg:gap-10 gap-6 lg:pl-[50px] md:pl-6 pl-5">

                                        <p className="text-lg lg:gap-5 lg:mr-14 mr-2 font-medium flex  text-center justify-center items-center lg:inline md:inline hidden">
                                            <p><FaBookmark /></p>
                                            <p>Note</p>
                                        </p>
                                        <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                        <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                        <p className="text-base font-semibold lg:inline md:inline hidden">Total Number Of Applicants : {job.job_applicants_number}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Remote Jobs</h2> */}
                        {filterJobsByCategory("Remote").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-[#00e2bd] lg:w-[1100px] lg:h-[300px] h-auto lg:ml-[200px] rounded-xl">
                            <div className="lg:flex gap-10 lg:pl-[100px]">
                                <div className="mt-[36px] ml-28 lg:ml-0 md:ml-[300px]">
                                    <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                </div>
                                <div className="mt-[40px] ml-20 lg:ml-0 md:ml-[280px]">
                                    <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                    <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                    <p className="lg:flex lg:gap-[380px]">
                                        <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                        <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
                                            <button className="button22 lg:mt-0 md:mt-7  mt-5 ml-9 lg:ml-0 md:ml-9">View Details</button>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-b-xl lg:h-[80px] pt-[23px] lg:pb-0 md:pb-0 pb-5 bg-[#00e2bd] mt-8">
                                <div className="flex lg:gap-10 gap-6 lg:pl-[50px] md:pl-6 pl-5">

                                    <p className="text-lg lg:gap-5 lg:mr-14 mr-2 font-medium flex  text-center justify-center items-center lg:inline md:inline hidden">
                                        <p><FaBookmark /></p>
                                        <p>Note</p>
                                    </p>
                                    <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                    <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                    <p className="text-base font-semibold lg:inline md:inline hidden">Total Number Of Applicants : {job.job_applicants_number}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Hybrid Jobs</h2> */}
                        {filterJobsByCategory("Hybrid").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-[#00e2bd] lg:w-[1100px] lg:h-[300px] h-auto lg:ml-[200px] rounded-xl">
                            <div className="lg:flex gap-10 lg:pl-[100px]">
                                <div className="mt-[36px] ml-28 lg:ml-0 md:ml-[300px]">
                                    <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                </div>
                                <div className="mt-[40px] ml-20 lg:ml-0 md:ml-[280px]">
                                    <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                    <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                    <p className="lg:flex lg:gap-[380px]">
                                        <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                        <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
                                            <button className="button22 lg:mt-0 md:mt-7  mt-5 ml-9 lg:ml-0 md:ml-9">View Details</button>
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-b-xl lg:h-[80px] pt-[23px] lg:pb-0 md:pb-0 pb-5 bg-[#00e2bd] mt-8">
                                <div className="flex lg:gap-10 gap-6 lg:pl-[50px] md:pl-6 pl-5">

                                    <p className="text-lg lg:gap-5 lg:mr-14 mr-2 font-medium flex  text-center justify-center items-center lg:inline md:inline hidden">
                                        <p><FaBookmark /></p>
                                        <p>Note</p>
                                    </p>
                                    <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                    <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                    <p className="text-base font-semibold lg:inline md:inline hidden">Total Number Of Applicants : {job.job_applicants_number}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Part-Time Jobs</h2> */}
                        {filterJobsByCategory("Part-Time").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-[#00e2bd] lg:w-[1100px] lg:h-[300px] h-auto lg:ml-[200px] rounded-xl">
                                <div className="lg:flex gap-10 lg:pl-[100px]">
                                    <div className="mt-[36px] ml-28 lg:ml-0 md:ml-[300px]">
                                        <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                    </div>
                                    <div className="mt-[40px] ml-20 lg:ml-0 md:ml-[280px]">
                                        <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                        <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                        <p className="lg:flex lg:gap-[380px]">
                                            <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                            <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
                                                <button className="button22 lg:mt-0 md:mt-7  mt-5 ml-9 lg:ml-0 md:ml-9">View Details</button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-b-xl lg:h-[80px] pt-[23px] lg:pb-0 md:pb-0 pb-5 bg-[#00e2bd] mt-8">
                                    <div className="flex lg:gap-10 gap-6 lg:pl-[50px] md:pl-6 pl-5">

                                        <p className="text-lg lg:gap-5 lg:mr-14 mr-2 font-medium flex  text-center justify-center items-center lg:inline md:inline hidden">
                                            <p><FaBookmark /></p>
                                            <p>Note</p>
                                        </p>
                                        <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                        <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                        <p className="text-base font-semibold lg:inline md:inline hidden">Total Number Of Applicants : {job.job_applicants_number}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">All Job</h2> */}
                        {
                            jobs.map(job => (
                                <div key={job._id} className="mt-5 border-2 border-[#00e2bd] lg:w-[1100px] lg:h-[300px] h-auto lg:ml-[200px] rounded-xl">
                                <div className="lg:flex gap-10 lg:pl-[100px]">
                                    <div className="mt-[36px] ml-28 lg:ml-0 md:ml-[300px]">
                                        <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                                    </div>
                                    <div className="mt-[40px] ml-20 lg:ml-0 md:ml-[280px]">
                                        <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                        <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                        <p className="lg:flex lg:gap-[380px]">
                                            <p className="text-base font-semibold">Salary : {job.salary_range}</p>

                                            <Link to={`/ViewDetail/${job._id}`} onClick={(event) => handleViewDetails(job._id, event)}>
                                                <button className="button22 lg:mt-0 md:mt-7  mt-5 ml-9 lg:ml-0 md:ml-9">View Details</button>
                                            </Link>
                                        </p>
                                    </div>
                                </div>

                                <div className="rounded-b-xl lg:h-[80px] pt-[23px] lg:pb-0 md:pb-0 pb-5 bg-[#00e2bd] mt-8">
                                    <div className="flex lg:gap-10 gap-6 lg:pl-[50px] md:pl-6 pl-5">

                                        <p className="text-lg lg:gap-5 lg:mr-14 mr-2 font-medium flex  text-center justify-center items-center lg:inline md:inline hidden">
                                            <p><FaBookmark /></p>
                                            <p>Note</p>
                                        </p>
                                        <p className="text-base font-semibold">Posting Date : {job.job_posting_date}</p>
                                        <p className="text-base font-semibold">Application Deadline : {job.application_deadline}</p>
                                        <p className="text-base font-semibold lg:inline md:inline hidden">Total Number Of Applicants : {job.job_applicants_number}</p>
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
