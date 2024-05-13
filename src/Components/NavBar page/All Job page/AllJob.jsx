import { useEffect, useState } from "react";


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

                    item name : {jobs.job_title}
                    
                </div>)
            }
        </div>
    );
};

export default AllJob;