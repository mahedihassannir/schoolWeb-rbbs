import React from 'react';

import '../css/banner.css'
import { Link } from 'react-router-dom';

import Lottie from 'lottie-react'

import edu from '.././../../public/aname.json'

const Home = () => {
    return (
        <div className='   -mt-20 bn  flex items-center h-screen w-full  '>
            <div className=' items-center pt-24 mx-20 flex'>
                <div className=' text-white w-1/2'>
                    <div>
                        <h4 className='text-5xl font-bold'>Hi There Welcome to R.<span className='text-orange-500'>B</span>.H.S</h4>
                        <div>
                            <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, tenetur eveniet? Dolores blanditiis culpa quae nostrum? Ratione, excepturi. Omnis cupiditate magni ex eligendi? Sunt autem, necessitatibus molestiae cupiditate maiores sequi.</p>
                            <Link to="">Your courses</Link>
                        </div>
                    </div>

                </div>
                {/* here is lottie animation */}
                <div className='w-1/2'>


                    <Lottie animationData={edu} />


                </div>
            </div>
        </div>
    );
};

export default Home;