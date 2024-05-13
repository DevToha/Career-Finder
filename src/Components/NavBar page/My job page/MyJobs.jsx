
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const MyJobs = ({ p,setItem, item }) => {

    const { _id, job_title } = p;

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
        <div className='text-center'>
            <h1>{job_title}</h1>
            <button onClick={() => handleDelete(_id)} className='btn-primary btn mr-5 mt-5 mb-5'>Delete</button>
            <Link to='/Update'>
                <button className='btn-warning btn'>Update</button>
            </Link>

        </div>
    );
};

export default MyJobs;

MyJobs.propTypes = {
    p: PropTypes.object
}