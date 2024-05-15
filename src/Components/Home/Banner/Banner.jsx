import image from './Image/01.9a03b3fb.jpg'
import image1 from './Image/me.9f2ba6c1.png'
import './banner.css'
import { FaTags } from "react-icons/fa";



const Banner = () => {
    return (
        <div className=''>
            <div className='relative'>
                <img className='lg:h-[680px] h-[450px] rounded-lg' src={image} alt="" />
            </div>
            <div className='absolute top-[123px] left-[930px]'>
                <img src={image1} alt="" />
            </div>

            <div className='absolute top-[275px] lg:left-24 md:left-14 left-5'>
                <h1 className='lg:text-6xl md:text-4xl text-2xl text-white font-semibold'>
                    <span className='text-orange-500'>2960</span> Thousands Dream <br />Jobs Available Now
                </h1>
                <div>
                    <input className="input11 my-10 lg:w-[650px] md:w-[400px] w-[200px]" type="text" placeholder="Your Job Catgories" />
                    <button className='button35 relative lg:right-[128px] right-[40px]'>Find Jobs</button>
                </div>
                <div className='flex'>
                    <p className='text-[#23c0e9] mt-2 mr-3'><FaTags /></p>
                    <p className='text-white text-base font-medium'>Trending Keywords : ui designer,  developer,  seniorit company,  design, call center</p>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Banner;