import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";


function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        authService.logout().then(() =>{
            dispatch(logout())
        })
    }

  return (
    <button
    className="inline-block duration-200 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={() => handleLogout()}
    >Logout</button>
  )
};

export default LogoutBtn;
