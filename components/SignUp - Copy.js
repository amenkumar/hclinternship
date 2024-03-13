import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [name, setName] = useState('');
    const [mobileNo, setMobileNo] = useState('');

    let passNotMatch = password != rePassword;

    return(
        <div className="py-3">

        <div className="mx-auto  mt-1 col-5 p-3 shadow rounded-1 bgDarkest ">
            <div className="mx-auto text-center">
                    <h2 className=" mb-2 textBlue">Sign Up</h2>
            </div>

            <div className="borderBottomBlue my-2 mb-3"/>

            <form className="p-3 pt-0">

                <label className="w-100">
                    <div className="text-start">Name:</div>
                    <input
                        type="text"
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        className="w-100 form-control text-light bg-dark mb-2 rounded-1 border-secondary"
                    />
                </label>

                <label className="w-100">
                    <div className="text-start">Email:</div>
                    <input
                        type="text"
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        className="w-100 form-control text-light bg-dark mb-2 rounded-1 border-secondary"
                    />
                </label>

                <label className="w-100">
                    <div className="text-start">Password:</div>
                    <input required
                        type="password"
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        className="w-100 form-control mb-2 text-light rounded-1 bg-dark border-secondary"
                    />
                </label>

                
                {(passNotMatch &&
                        <div className={"text-danger "}>Password does not match</div>
                )}
                <label className="w-100">
                    <div className="text-start">Confirm password:</div>
                    <input requried
                        type="password"
                        value={rePassword}
                        onChange={(event)=>setRePassword(event.target.value)}
                        className="w-100 form-control mb-2 text-light rounded-1 bg-dark border-secondary"
                    />
                </label>
                    
                <label className="w-100">
                    <div className="text-start">Mobile:</div>
                    <input
                        type="tel"
                        value={mobileNo}
                        onChange={(event)=>setMobileNo(event.target.value)}
                        className="w-100 form-control text-light bg-dark mb-2 rounded-1 border-secondary"
                    />
                </label>

                <div className="text-center mt-3">       
                <button type="submit" className="text-center btn bgBlue textWhite ms-auto w-25 fw-bold">Sign Up</button>
                </div>

            </form>
                
       
                
            <hr className="mx-5 mt-2"/>
            <div className="text-center">
                Already have an account? <br/>
                <Link exact to="/login">
                    Login
                </Link>
            </div>
        </div>
        </div>
    )
}

export default SignUp;

