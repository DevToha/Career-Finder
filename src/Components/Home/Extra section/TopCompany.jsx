import './extra.css'
import { motion } from "framer-motion"


const TopCompany = () => {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-semibold text-center">TOP HIRING COMPANIES</h1>
            <div className='flex gap-6 px-3'>
                <motion.div
                    className="mt-6 border cursor-pointer border-gray-300 rounded-md w-[280px] h-[280px] items-center text-center justify-center pt-[28px]"
                    whileHover={{ scale: 1.05 }} // Scale up on hover
                    whileTap={{ scale: 0.95 }} // Scale down on tap/click
                    transition={{ duration: 0.2 }}
                >
                    <div className="ml-[107px]">
                        <img src="https://i.ibb.co/YDgQdhD/hiring-img3.webp" alt="" />
                    </div>
                    <p className="text-lg font-semibold my-5">Akshay INC.</p>
                    <p>( NewYork )</p>
                    <button className="my-5 button21">Apply now</button>
                </motion.div>

                {/*  */}


                <motion.div
                    className="mt-6 border border-gray-300 cursor-pointer rounded-md w-[280px] h-[280px] items-center text-center justify-center pt-[28px]"
                    whileHover={{ scale: 1.05 }} // Scale up on hover
                    whileTap={{ scale: 0.95 }} // Scale down on tap/click
                    transition={{ duration: 0.2 }}
                >
                    <div className="ml-[107px]">
                        <img src="https://www.webstrot.com/html/jobpro/job_light/images/content/hiring_img4.png" alt="" />
                    </div>
                    <p className="text-lg font-semibold my-5">Akshay INC.</p>
                    <p>( NewYork )</p>
                    <button className="my-5 button21">Apply now</button>
                </motion.div>

                {/*  */}

                <motion.div
                    className="mt-6 border border-gray-300 cursor-pointer rounded-md w-[280px] h-[280px] items-center text-center justify-center pt-[28px]"
                    whileHover={{ scale: 1.05 }} // Scale up on hover
                    whileTap={{ scale: 0.95 }} // Scale down on tap/click
                    transition={{ duration: 0.2 }}
                >
                    <div className="ml-[107px]">
                        <img src="https://www.webstrot.com/html/jobpro/job_light/images/content/hiring_img1.png" alt="" />

                    </div>
                    <p className="text-lg font-semibold my-5">Akshay INC.</p>
                    <p>( NewYork )</p>
                    <button className="my-5 button21">Apply now</button>
                </motion.div>

                {/*  */}


                <motion.div
                    className="mt-6 border border-gray-300 cursor-pointer rounded-md w-[280px] h-[280px] items-center text-center justify-center pt-[28px]"
                    whileHover={{ scale: 1.05 }} // Scale up on hover
                    whileTap={{ scale: 0.95 }} // Scale down on tap/click
                    transition={{ duration: 0.2 }}
                >
                    <div className="ml-[107px]">
                        <img src="https://www.webstrot.com/html/jobpro/job_light/images/content/hiring_img2.png" alt="" />

                    </div>
                    <p className="text-lg font-semibold my-5">Akshay INC.</p>
                    <p>( NewYork )</p>
                    <button className="my-5 button21">Apply now</button>
                </motion.div>


                {/*  */}

                <motion.div
                    className="mt-6 border border-gray-300 cursor-pointer rounded-md w-[280px] h-[280px] items-center text-center justify-center pt-[28px]"
                    whileHover={{ scale: 1.05 }} // Scale up on hover
                    whileTap={{ scale: 0.95 }} // Scale down on tap/click
                    transition={{ duration: 0.2 }}
                >
                    <div className="ml-[107px]">
                        <img className='w-[56px]' src="https://www.webstrot.com/html/jobpro/job_light/images/content/job_post_img1.jpg" alt="" />
                    </div>
                    <p className="text-lg font-semibold my-5">Akshay INC.</p>
                    <p>( NewYork )</p>
                    <button className="my-5 button21">Apply now</button>
                </motion.div>

            </div>

        </div>
    );
};

export default TopCompany;