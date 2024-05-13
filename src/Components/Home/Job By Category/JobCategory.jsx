import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Job.css'
import { Link } from "react-router-dom";

const JobCategory = () => {

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

    return (
        <div className="mt-10">
            {/* <h1>Total Jobs: {jobs.length}</h1> */}
            <div className="">
                <Tabs>
                    <TabList className='tab border-2 border-gray-400 ml-[502px] rounded-lg h-[50px]'>
                        <Tab selectedClassName="active-tab">On-Site Job</Tab>
                        <Tab selectedClassName="active-tab">Remote Job</Tab>
                        <Tab selectedClassName="active-tab">Hybrid</Tab>
                        <Tab selectedClassName="active-tab">Part-Time</Tab>
                        <Tab selectedClassName="active-tab">All Job</Tab>
                    </TabList>

                    <TabPanel>
                        {/* <h2 className="mt-5">On-Site Jobs</h2> */}
                        {filterJobsByCategory("On Site").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5 border-2 border-black w-[1100px] h-[300px] ml-[200px] rounded-xl">
                                Name: {job.job_title}
                                <Link to={`/ViewDetail/${job._id}`}>
                                    <button className="btn">View Details</button>
                                </Link>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Remote Jobs</h2> */}
                        {filterJobsByCategory("Remote").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5">
                                Name: {job.job_title}
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Hybrid Jobs</h2> */}
                        {filterJobsByCategory("Hybrid").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5">
                                Name: {job.job_title}
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">Part-Time Jobs</h2> */}
                        {filterJobsByCategory("Part-Time").slice(0, 2).map(job => (
                            <div key={job._id} className="mt-5">
                                Name: {job.job_title}
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel>
                        {/* <h2 className="mt-5">All Job</h2> */}
                        {
                            jobs.map(job => (
                                <div key={job._id} className="mt-5">
                                    Name: {job.job_title}
                                </div>
                            ))
                        }
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default JobCategory;
