import React from 'react';

import '../css/banner.css'
const Ourteachers = () => {
    return (
        <div className=' bn w-full h-[120vh]  '>

            <div className='-mt-20'>

            </div>

            {/* testing this is in another route */}
            <section className="text-white body-font">
                <div className=" text-white container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Our Teachers</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                    </div>
                    <br />

                    {/* ends this is hedding of  the [page] */}

                    <div>
                        {

                        }
                    </div>


                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div className="h-full flex items-center border-white border p-4 rounded-lg">
                                <img alt="team" className="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://i.ibb.co/5R1B7ks/painted-solid-concrete-wall-textured-background.jpg" />
                                <div className="flex-grow">
                                    <h2 className="text-white title-font font-medium">Holden Caulfield</h2>
                                    <p className="text-white">UI Designer</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* testing this is in another route */}

        </div>
    );
};

export default Ourteachers;