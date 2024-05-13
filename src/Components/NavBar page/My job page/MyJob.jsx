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
        <div>
            <h2 className="text-center font-bold text-4xl lg:mb-10 mb-5 mt-10">My Art And Craft Item</h2>
            {
                item?.map(p => (<MyJobs key={p._id} p={p} item={item} setItem={setItem}></MyJobs>))
            }
        </div>
    );
};

export default MyJob;