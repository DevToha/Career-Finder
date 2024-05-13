import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const jobs = useLoaderData()

    const {job_title } = jobs


    return (
        <div>
            user name : {job_title}
        </div>
    );
};

export default ViewDetails;