import React from 'react'
import { useAuth } from '../context/Authprovider'
import toast from 'react-hot-toast'



export default function Logout() {

    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            toast.success('Logout successful!');
            setTimeout(() => {
                localStorage.removeItem('users');
                window.location.reload();
            }, 3000);
        } catch (error) {
            toast.error('Couldn\'t log out, ' + error);
        }
    }

    return (
        <div>
            <button className='btn btn-active btn-ghost' onClick={handleLogout}>Logout</button>
        </div>
    )
}



