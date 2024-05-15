import './extra.css'

const PricingPlan = () => {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-semibold text-center mb-10">PRICING PLAN</h1>

            <div className='lg:flex lg:gap-12 gap-2 md:grid md:grid-cols-2 justify-center'>
                <div className="card3  mb-5">
                    <span className="card3-title">BASIC PLAN</span>
                    <p className="card3-description border-y mb-14 bg-[#00e2bd] w-[] h-[160px] pt-[41px]"><span className='text-6xl font-extrabold text-white'>$29</span> <br />/ Per Month</p>
                    <div className='text-lg font-medium'>
                        <p>5 Jobs Posting</p>
                        <p  className='my-5'>2 Featured jobs</p>
                        <p>1 Renew Jobs</p>
                        <p className='my-5'>10 Days Duration</p>
                        <p>Email Alert</p>
                    </div>
                    <div className="">
                        <button className="button31 mt-10">GET STARTED</button>
                    </div>
                </div>

                {/*  */}

                <div className="card3 mb-5">
                    <span className="card3-title">PREMIUM PLAN</span>
                    <p className="card3-description border-y mb-14 bg-[#00e2bd] w-[] h-[160px] pt-[41px]"><span className='text-6xl font-extrabold text-white'>$49</span> <br />/ Per Month</p>
                    <div className='text-lg font-medium'>
                        <p>7 Jobs Posting</p>
                        <p  className='my-5'>5 Featured jobs</p>
                        <p>3 Renew Jobs</p>
                        <p className='my-5'>15 Days Duration</p>
                        <p>Email Alert</p>
                    </div>
                    <div className="">
                        <button className="button31 mt-10">GET STARTED</button>
                    </div>
                </div>

                {/*  */}

                <div className="card3">
                    <span className="card3-title">ADVANCED PLAN</span>
                    <p className="card3-description border-y mb-14 bg-[#00e2bd] w-[] h-[160px] pt-[41px]"><span className='text-6xl font-extrabold text-white'>$79</span> <br />/ Per Month</p>
                    <div className='text-lg font-medium'>
                        <p>15 Jobs Posting</p>
                        <p  className='my-5'>7 Featured jobs</p>
                        <p>9 Renew Jobs</p>
                        <p className='my-5'>30 Days Duration</p>
                        <p>Email Alert</p>
                    </div>
                    <div className="">
                        <button className="button31 mt-10">GET STARTED</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PricingPlan;