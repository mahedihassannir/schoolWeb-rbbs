import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contexM } from '../authProvider/Contex';

const Register = () => {



    let { HandlecreateUserWithEmailAndPassword } = useContext(contexM)


    let [visible, SetHide] = useState(true)

    let [err, setErr] = useState("")


    let handleRegister = (e) => {
        e.preventDefault()
        let from = e.target

        let email = from.email.value
        let password = from.password.value

        console.log(email, password);

        HandlecreateUserWithEmailAndPassword(email, password)
            .then(res => {
                let logedUser = res.user
                console.log(logedUser);
            })
            .catch(err => {
                console.log(err);
            })



        if (password.length < 6) {
            setErr("password must be 6 charecter")
        }
        else {
            setErr("")
        }
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-bold'>Register</h1>

            <div className='w-full h-screen flex justify-center items-center'>
                {/* here is the [parent div] */}
                <form onSubmit={handleRegister} className='w-[500px] border-2 rounded-lg pb-5'>
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

                                    visible ? "Show" : "Hide"

                                }
                            </div>

                        </div>
                    </div>
                    <div className='mt-5 ml-5'>
                        <input className=' cursor-pointer py-3 w-11/12 mx-auto rounded-lg text-white bg-orange-400' value="Register" type="submit" />



                    </div>

                    {/* here is err section */}

                    <div>
                        <span className='text-red-500 pl-5 py-4'>{err}</span>
                    </div>

                    {/* here is  register Link */}

                    <div>

                        <Link className='link pl-5 pt-5' to="/Login" >new in this web </Link>

                    </div>
                </form>
            </div >
        </div>
    );
};

export default Register;