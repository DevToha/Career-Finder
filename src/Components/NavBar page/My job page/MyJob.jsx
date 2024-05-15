import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import MyJobs from "./MyJobs";


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


    return (
        <div className="mt-10">

            <h1 className="text-3xl font-semibold text-center mb-10 text-[#00e2bd]">Here You Can See Your All Job, You Have Added</h1>

            {
                item?.map(p => (<MyJobs key={p._id} p={p} item={item} setItem={setItem}></MyJobs>))
            }
        </div>
    );
};

export default MyJob;