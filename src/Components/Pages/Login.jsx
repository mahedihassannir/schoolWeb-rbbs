import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contexM } from '../authProvider/Contex';

const Login = () => {



    let [visible, SetHide] = useState(true)

    let { loginUserWithEmailPass } = useContext(contexM)




    const Navigate = useNavigate()

    let Location = useLocation()




    let last = Location.state?.form.pathname || "/"



    let handleLogin = (e) => {
        e.preventDefault()
        let from = e.target

        let email = from.email.value
        let password = from.password.value

        loginUserWithEmailPass(email, password)

            .then(res => {
                let logedUser = res.user
                console.log(logedUser);
                Navigate(last)
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (

        <div>
            <h1 className='text-3xl text-center font-bold'>Login</h1>

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

                                    visible ? "Show" : "Hide"

                                }
                            </div>

                        </div>
                    </div>
                    <div className='mt-5 ml-5'>
                        <input className=' cursor-pointer py-3 w-11/12 mx-auto rounded-lg text-white bg-orange-400' value="Login" type="submit" />



                    </div>

                    {/* here is  register Link */}
                    <div>

                        <Link className='link pl-5 pt-5' to="/Register" >have an account </Link>

                    </div>
                </form>
            </div >
        </div>
    );
};

export default Login;