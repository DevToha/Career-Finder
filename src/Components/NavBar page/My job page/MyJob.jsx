import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
// import MyJobs from "./MyJobs";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyJob = () => {

    const { user } = useContext(AuthContext)

    const [item, setItem] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/myJob/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user])

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
        <div className="mt-10">

            <h1 className="text-3xl font-semibold text-center mb-10 text-[#00e2bd]">Here You Can See Your All Job, You Have Added</h1>
            
            <div className='mb-8'>
                <div className="px-16">
                    <div className="mt-10 w-[] h-auto border px-16 mx-auto rounded-lg pt-10 pb-20 bg-slate-400">
                        <div className="overflow-x-auto ">
                            <table className="table">
                                <thead>
                                    <tr className="text-[18px] font-extrabold text-black">
                                        <th></th>
                                        <th>Job Title</th>
                                        <th>Category</th>
                                        <th>Salary</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {item?.map((job) => (
                                        <tr key={job._id} className="hover text-base font-medium text-black">
                                            <th></th>
                                            <td>{job.job_title}</td>
                                            <td>{job.job_category}</td>
                                            <td>{job.salary_range}</td>
                                            <td><button onClick={() => handleDelete(job._id)} className='btn-warning btn mr-5 mt-5 mb-5'>Delete</button></td>
                                            <td>
                                                <Link to={`/Update/${job._id}`}>
                                                    <button className='btn-primary btn'>Update</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyJob;