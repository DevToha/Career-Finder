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
        fetch(`http://localhost:5000/job?page=${currentPage}&size=${itemPerPage}`)
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
            
            <div className="text-center mb-10">
                <input
                    type="text"
                    placeholder="Search by Job Title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input input2"
                />
            </div>

            {filteredJobs.map(job => (
                <div key={job._id}>
                    <div className="mt-5 border-2 border-[#00e2bd] w-[1100px] h-[300px] ml-[200px] rounded-xl">
                        <div className="flex gap-10 pl-[100px]">
                            <div className="mt-[36px]">
                                <img className="w-[150px] h-[150px] rounded-xl" src={job.job_banner_url} alt="" />
                            </div>
                            <div className="mt-[40px]">
                                <p className="text-2xl font-semibold mb-5">{job.job_title}</p>
                                <p className="text-base font-medium mb-5 text-[#00e2bd]">Posted By : {job.user_name}</p>
                                <p className="flex gap-[380px]">
                                    <p className="text-base font-semibold">Salary : {job.salary_range}</p>
                                    <Link to={`/ViewDetail/${job._id}`}>
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
