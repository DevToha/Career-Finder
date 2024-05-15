import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";
import './all.css';

const AllJob = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const { count } = useLoaderData();
    const [itemPerPage, setItemPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");

    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`https://assignment-11-server-five-puce.vercel.app/job?page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setFilteredJobs(data);
            });
    }, [currentPage, itemPerPage]);

    useEffect(() => {
        if (searchQuery) {
            const filtered = jobs.filter(job =>
                job.job_title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredJobs(filtered);
        } else {
            setFilteredJobs(jobs);
        }
    }, [searchQuery, jobs]);

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-semibold text-center mt-10 text-[#23c0e9]">Search Your Dream Job</h1>

            <div className="text-center mb-10 lg:w-[500px] lg:ml-[490px]">
                <input
                    type="text"
                    placeholder="Search by Job Title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input input2 "
                />
            </div>

            {filteredJobs.map(job => (
                <div key={job._id}>
                    <div className="mt-5 border-2 border-[#00e2bd] lg:w-[1100px] lg:h-[300px] h-auto lg:ml-[200px] rounded-xl">
                        <div className="lg:flex gap-10 lg:pl-[100px]">
                            <div className="mt-[36px] ml-28 lg:ml-0 md:ml-[300px]">
                                <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                            </div>
                            <div className="mt-[40px] ml-20 lg:ml-0 md:ml-[280px]">
                                <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                <p className="lg:flex lg:gap-[380px]">
                                    <p className="text-base font-semibold">Salary : {job.salary_range}</p>
                                    <Link to={`/ViewDetail/${job._id}`}>
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
                </div>
            ))}

            <div className="pagination text-center">
                <p className="mt-10 mb-10">Current Page : {currentPage}</p>
                <button onClick={handlePrev} className="text-black">Prev</button>
                {pages.map(page => (
                    <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}
                    >
                        {page}
                    </button>
                ))}
                <button onClick={handleNext} className="text-black">Next</button>
            </div>
        </div>
    );
};

export default AllJob;
