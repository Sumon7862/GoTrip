import { CiSearch } from "react-icons/ci";



const Banner = () => {


    return (
        <section className='bg-[url(assets/banner.jpg)] bg-cover bg-center bg-no-repeat min-h-[600px] font-jost'>
            <div className='container'>
                <div className='text-center pt-49.5'>
                    <h1 className='text-[60px] font-semibold text-white'>
                        The World is Waiting For You
                    </h1>
                    <p className='pt-1.5 pb-10 text-white'>Discover amzaing places at exclusive deals</p>
                </div>

                <div className="py-2 bg-white shadow-lg rounded-full max-w-5xl mx-auto relative z-20">
                    <div className="flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x-4 ">

                    <div className="pl-10">
                        <h3 className="font-medium text-[15px]">Destinations</h3>
                        <p className="font-normal text-[15px] text-[#697488]">Where are you going?</p>
                    </div>
                    <div className="border-l border-gray-200 pl-5">
                        <h3 className="font-medium text-[15px]">Check in - Check out</h3>
                        <p className="font-normal text-[15px] text-[#697488]">Wed 2 Mar  -  Fri 11 Apr</p>
                    </div>
                    <div className="border-l border-gray-200 pl-5">
                        <h3 className="font-medium text-[15px]">Activity Types</h3>
                        <p className="font-normal text-[15px] text-[#697488]">Camping, Nightlife</p>
                    </div>

                        {/* Search Button */}
                        <div className="w-full md:w-auto mt-2 md:mt-0 self-end pr-3">
                            <button
                                className="w-full md:w-auto px-6 py-3 bg-[#3554D1] text-white font-semibold rounded-full shadow hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center cursor-pointer"
                            >
                                <CiSearch className="h-5 w-5 mr-2" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
 
export default Banner;
