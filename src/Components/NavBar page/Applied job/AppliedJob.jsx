import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const AppliedJob = () => {
    const { user } = useContext(AuthContext)

    const [item, setItem] = useState()

    useEffect(() => {
        fetch(`http://localhost:5000/appliedJob/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user])


    return (
        <div className="px-16">
            <div className="mt-10 w-[] h-auto border px-16 mx-auto rounded-lg pt-10 pb-20 bg-slate-400">
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-[18px] font-extrabold text-black">
                                <th></th>
                                <th>Job Title</th>
                                <th>Category</th>
                                <th>Salary</th>
                                {/* <th>Your Resume</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                item?.map(p => (<tr key={p._id} className="hover text-base font-medium">
                                    <th></th>
                                    <td>{p.job_title}</td>
                                    <td>{p.job_category}</td>
                                    <td>{p.salary_range}</td>
                                    {/* <td><input type="link" defaultValue={p.resume} /></td> */}
                                    <td><button className="btn btn-success">Download Summary</button></td>
                                </tr>))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;