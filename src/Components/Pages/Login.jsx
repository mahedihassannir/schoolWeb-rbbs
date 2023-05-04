import React, { useState } from 'react';

const Login = () => {


    let [visible, SetHide] = useState(true)


    let handleLogin = (e) => {
        e.preventDefault()
        let from = e.target

        let email = from.email.value
        let password = from.password.value

        console.log(email, password);
    }


    return (
        <div className='w-full h-screen flex justify-center items-center'>
            {/* here is the [parent div] */}
            <form onSubmit={handleLogin} className='w-[500px] border-2 rounded-lg pb-5'>
                <div className='mt-5 ml-5'>
                    <label className='block mb-2' htmlFor="">
                        <span>email</span>
                    </label>
                    <input className='border-2 rounded-md py-3 w-11/12 pl-3' placeholder='Your email' name='email' type="email" required />
                </div>

                <div className='mt-5 ml-5'>
                    <label className='block mb-2' htmlFor="">
                        <span>password</span>
                    </label>
                    <div className='relative'>

                        <div>

                            <input className=' rounded-md border-2 py-3 w-11/12 pl-3' placeholder='Your password' name='password' type={visible ? "password" : "text"} required />
                        </div>
                        <div onClick={() => SetHide(!visible)} className='absolute top-4 ml-[380px]'>

                            {

                                visible ? "Hide" : "Show"

                            }
                        </div>

                    </div>
                </div>
                <div className='mt-5 ml-5'>
                    <input className=' cursor-pointer py-3 w-11/12 mx-auto rounded-lg text-white bg-orange-400' value="Login" type="submit" />



                </div>

            </form>
        </div >
    );
};

export default Login;