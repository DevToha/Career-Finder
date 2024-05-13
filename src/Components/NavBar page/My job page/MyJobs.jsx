
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { FaBookmark } from "react-icons/fa";

const MyJobs = ({ p, setItem, item }) => {

    const { _id, job_title, salary_range, job_posting_date, user_name, application_deadline, job_applicants_number, job_banner_url,job_description } = p;

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });

                fetch(`http://localhost:5000/job/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });

                            ///remaining item

                            const remaining = item.filter(i => i._id !== _id);
                            setItem(remaining);
                        }
                    })

            }
        });
    }

    return (
        <div className='mb-8'>
            {/* <h1>{job_title}</h1> */}

            <div key={_id} className="mt-5">
                <div className="mt-5 border-2 border-[#00e2bd] w-[1100px] h-[350px] ml-[200px] rounded-xl">
                    <div className="flex gap-10 pl-[50px]">
                        <div className="mt-[36px]">
                            <img className="w-[250px] h-[200px] rounded-xl" src={job_banner_url} alt="" />
                        </div>
                        <div className="mt-[40px]">
                            <p className="text-2xl font-semibold mb-5">{job_title}</p>
                            <p className="text-base font-medium mb-5">Posted By : {user_name}</p>
                            <p className="text-base font-medium mb-5">Description : {job_description}</p>
                            <p className="flex gap-[330px]">
                                <p className="text-base font-semibold">Salary : {salary_range}</p>

                                <div>
                                    <button onClick={() => handleDelete(_id)} className='btn-warning btn mr-5 mt-5 mb-5'>Delete</button>
                                    <Link to={`/Update/${_id}`}>
                                        <button className='btn-primary btn'>Update</button>
                                    </Link>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="rounded-b-xl h-[80px] pt-[23px] bg-[#00e2bd]">
                        <div className="flex gap-10 pl-[140px]">
                            <p className="text-base font-semibold">Posting Date : {job_posting_date}</p>
                            <p className="text-base font-semibold">Application Deadline : {application_deadline}</p>
                            <p className="text-base font-semibold">Total Number Of Applicants : {job_applicants_number}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyJobs;

MyJobs.propTypes = {
    p: PropTypes.object
}