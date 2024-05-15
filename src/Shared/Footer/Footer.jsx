import image from './image/icon.png'

const Footer = () => {
    return (
        <div>
            <div className="mt-20 bg-[#1c2733] lg:h-[350px] md:h-[400px] lg:pt-32 pt-20">

                <footer className='md:pl-16'>
                    <footer className=" footer text-base-content md:mb-16">
                        <nav>
                            <div className='flex lg:gap-5 md:gap-5 gap-0'>
                                <img className='w-[53px] h-[53px] mt-[17px] ml-5' src={image} alt="" />
                                <h6 className="text-4xl font-bold md:ml-0 ml-10 text-white mt-[26px] text12">Career Finder</h6>
                            </div>
                        </nav>
                        <nav className="lg:ml-24 ml-7 text-white">
                            <h6 className="lg:text-4xl text-2xl ml-[85px] md:ml-[60px] font-semibold mb-3 lg:ml-[28px]">Quick Links</h6>
                            <div className=" text-lg font-medium lg:mt-0 mt-8 lg:ml-0 md:ml-0 ml-5">
                                <a className="hover:underline cursor-pointer">Facebook</a>
                                <a className="hover:underline cursor-pointer mx-5">Linked In</a>
                                <a className="hover:underline cursor-pointer">Twitter</a>
                                {/* <a className="hover:underline cursor-pointer ml-5">Whats App</a> */}
                            </div>
                        </nav>
                        <nav className="lg:ml-[90px] ml-[20px] lg:mt-0 mt-8 mb-8  lg:inline sm:inline md:hidden text-white">
                            <h6 className="lg:text-xl font-medium">58 A, East Madison Street, Baltimore, MD, USA 4508</h6>
                            <div className="lg:ml-[235px] ml-[79px] lg:text-xl font-medium">
                                <a className="">Mail: devtoha@gmail.com</a>
                            </div>
                            <div className="lg:ml-[283px] ml-[89px] lg:text-xl font-medium">
                                <a className="">Phone: 01934670567</a>
                            </div>
                        </nav>

                    </footer>

                    <div className="lg:hidden hidden md:inline text-white md:ml-[200px]">
                        <h6 className="text-2xl font-medium">58 A, East Madison Street, Baltimore, MD, USA 4508</h6>
                        <div className="md:ml-[322px] text-xl font-medium">
                            <a className="">Mail: devtoha@gmail.com</a>
                        </div>
                        <div className="md:ml-[361px] text-xl font-bold">
                            <a className="">Phone: 01934670567</a>
                        </div>
                    </div>

                </footer>

            </div>
        </div>
    );
};

export default Footer;