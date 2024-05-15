
import { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';




const AddJob = () => {
    const { user } = useContext(AuthContext);
    const [applicationDeadline, setApplicationDeadline] = useState(null);  // State for Application Deadline

    const handleAddJob = event => {
        event.preventDefault();

        const form = event.target;

        const job_title = form.job_title.value;
        const job_category = form.job_category.value;
        const salary_range = form.salary_range.value;
        const job_description = form.job_description.value;
        const user_name = form.user_name.value;
        const job_posting_date = form.job_posting_date.value;
        const job_applicants_number = form.job_applicants_number.value;
        const user_email = form.user_email.value;
        const job_banner_url = form.job_banner_url.value;
        const email = user.email;
        const displayName = user.displayName;

        const newJob = {
            job_title,
            job_category,
            salary_range,
            job_description,
            user_name,
            job_posting_date,
            application_deadline: applicationDeadline, // Use state value for application deadline
            job_applicants_number,
            user_email,
            job_banner_url,
            email,
            displayName
        };

        console.log(newJob);

        // send data to the server
        fetch('http://localhost:5000/job', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Item Added Successfully",
                        icon: "success"
                    });
                }
            });
    };

    return (
        <div>
            <div className="bg-[#3b7f9188] shadow8 py-5 pl-[92px] md:ml-0 lg:ml-[160px] mt-10 rounded-3xl lg:w-[1215px]">
                <h3 className="text-3xl font-semibold lg:ml-[355px] md:ml-[150px]">Lets Add Some JOB!</h3>
                <div className=" md:w-1/3 mt-10 mb-10">
                    <form onSubmit={handleAddJob}>
                        <div>
                            <div className="lg:flex md:flex gap-16">
                                <div>
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" placeholder="Job Title" name="job_title" id="" required />
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Job Category" name="job_category" id="" required />
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Salary range" name="salary_range" id="" required />
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Job Description" name="job_description" id="" required />
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="name" placeholder="User Name" name="user_name" id="" required />
                                </div>
                                <div>
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Job Posting Date" name="job_posting_date" id="" required />
                                    <div className="">
                                        <DatePicker
                                            selected={applicationDeadline}
                                            onChange={(date) => setApplicationDeadline(date)}
                                            placeholderText="Application Deadline"
                                            className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md"
                                            name="application_deadline"
                                            required
                                        />
                                    </div>
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="photoURL" placeholder="Job Banner ( Use Image URL)" name="job_banner_url" id="" required />
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="text" placeholder="Job Applicants Number" name="job_applicants_number" id="" required />
                                    <input className="mb-10 lg:w-[470px] md:w-[260px] py-2 px-4 border-2 border-gray-300 rounded-md" type="email" placeholder="User Email" name="user_email" id="" required />
                                </div>
                            </div>
                            <div>
                                <input className="cursor-pointer ml-10 lg:ml-0 md:ml-0 mt-1 lg:w-[1001px] md:w-[580px] py-2 px-4 border-2 rounded-md border-gray-300 bg-blue-500 text-white text-lg font-medium" type="submit" value="ADD NOW" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJob;
