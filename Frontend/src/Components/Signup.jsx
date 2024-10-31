import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';


const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }

        await axios.post("http://localhost:4000/user/signup", userInfo).then((res) => {
            if (res.data) {
                toast.success('SignUp successful!');
            }
            localStorage.setItem("users", JSON.stringify(res.data.user));
        }).catch((err) => {
            if (err.response) {
                console.log(err);
                toast.error("Error! " + err.response.data.message);
            }
        })


        // Optionally close the modal after successful login
        document.getElementById("my_modal_4").close();
    };

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent form submission
                                document.getElementById("my_modal_4").close(); // Close the modal
                            }}
                        >
                            ✕
                        </button>



                        <h3 className="font-bold text-3xl">Signup</h3>

                        <div className='mt-10 space-y-2'>
                            <label>Name</label>
                            <br />
                            <input className='input input-bordered' {...register("fullname", { required: true })} type="text" placeholder='Enter email here' />
                            <br />
                            {errors.fullname && <span className='text-xs text-red-500'>required</span>}
                        </div>
                        <div className='mt-3 space-y-2'>
                            <label>Email</label>
                            <br />
                            <input className='input input-bordered' {...register("email", { required: true })} type="email" placeholder='Enter email here' />
                            <br />
                            {errors.email && <span className='text-xs text-red-500'>required</span>}
                        </div>
                        {/* password */}
                        <div className='mt-3 space-y-2'>
                            <label>Password</label>
                            <br />
                            <input className='input input-bordered' {...register("password", { required: true })} type="password" placeholder='Enter password here' />
                            <br />
                            {errors.password && <span className='text-xs text-red-500'>This field is required</span>}
                        </div>
                        <div className='space-y-3'>
                            <button className='btn btn-secondary mt-4' type='sibmit'>signup</button>
                            <p>Create account <a className="link link-secondary" onClick={() => { document.getElementById("my_modal_4").close(); document.getElementById("my_modal_3").showModal() }} >Login</a></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Signup
