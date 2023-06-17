import React from 'react';
import { AiOutlineBook, AiTwotoneAccountBook } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import logo from "./navLogo.png";
import { GrCheckboxSelected,GrLogout } from "react-icons/gr";
import { MdPayment,MdHome } from "react-icons/md";
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

function Dashboard() {
    const { user, logoutUser } = useAuth();
    const [userRole] = useRole();
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutUser()
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Logout Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/', { replace: true });
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="drawer lg:drawer-open max-w-[100%] lg:h-full">
            <div className=" fixed top-0 right-0 left-0 py-3 px-4 lg:hidden dark:bg-[#0C1322] nb_border bg-[#EDF1F7]">
                <div className="flex items-center lg:justify-end justify-between">
                    {' '}
                    <label htmlFor="my-drawer-2" className=" drawer-button ">
                        <div className="text-dark-grey dark:text-white">
                            <HiBars3BottomLeft size={30} />
                        </div>
                    </label>
                  
                </div>
            </div>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative top-[57px] lg:top-0  bg-white dark:bg-dark-blue p-8 overflow-x-hidden h-screen">
                <Outlet />
            </div>
            <div className="drawer-side fixed">
                <label htmlFor="my-drawer-2" className="drawer-overlay" />
                <ul className="menu p-4 w-80 h-full text-base dark:bg-[#0C1322] nb_border bg-[#8193a6]">
                    <div>
                    <Link to="/">
              <button>
                <img className=" md:block h-11 mb-5" src={logo} alt="SportsFever" />
              </button>
            </Link>
                    </div>
                    <div className="flex gap-2 items-center">
                    <div className="block">
                    <img
                      className="rounded-full"
                      src={user && user.photoURL ? user.photoURL : avaterimg}
                      alt="profile"
                      height="40"
                      width="40"
                    />
                  </div>
                        <h4 className="text-dark-grey dark:text-white text-lg">
                            Hello, {user?.displayName}
                        </h4>

                        
                    </div>
                    <div className="divider dark:divider-gray-300" />
                    {userRole === 'student' && (
                        <>
                            <li className="text-lg">
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="select-classes"
                                >
                                    <GrCheckboxSelected size={25} /> My Selected Classes
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                <NavLink
                                   className={({ isActive }) =>
                                   isActive ? "text-blue-700" : "default"
                                 }
                                    to="enrolled-classes"
                                >
                                    <AiTwotoneAccountBook size={25} /> My Enrolled Classes
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="payment-history"
                                >
                                    <MdPayment size={25} /> Payment History
                                </NavLink>
                            </li>
                            <div className="divider dark:divider-gray-300" />
                            <li className="text-lg">
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="/"
                                >
                                    <MdHome size={25} /> Go To Home
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                <NavLink
                                   className={({ isActive }) =>
                                   isActive ? "text-blue-700" : "default"
                                 }
                                    onClick={handleLogout}
                                >
                                    <GrLogout size={25} /> Logout
                                </NavLink>
                            </li>
                        </>
                    )}
                    {userRole === 'instructor' && (
                        <>
                            <li className="text-lg">
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="add-class"
                                >
                                    <BiBookAdd size={25} /> Add Class
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="my-classes"
                                >
                                    <AiOutlineBook size={25} /> My Classes
                                </NavLink>
                            </li>
                            <div className="divider dark:divider-gray-300" />
                            <li className="text-lg">
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="/"
                                >
                                    <MdHome size={25} /> Go To Home
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    onClick={handleLogout}
                                >
                                    <GrLogout size={25} /> Logout
                                </NavLink>
                            </li>
                        </>
                    )}
                    {userRole === 'admin' && (
                        <>

                            <li className="text-lg">
                                {' '}
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="manage-classes"
                                >
                                    <AiOutlineBook size={25} /> Manage Classes
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                {' '}
                                <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="users"
                                >
                                    <FaUsers size={25} /> Users
                                </NavLink>
                            </li>{' '}
                            <div className="divider dark:divider-gray-300" />
                            <li className="text-lg">
                            <NavLink
                                    className={({ isActive }) =>
                                    isActive ? "text-blue-700" : "default"
                                  }
                                    to="/"
                                >
                                    <MdHome size={25} /> Go To Home
                                </NavLink>
                            </li>
                            <li className="text-lg">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-dark-grey dark:text-white hover:text-green'
                                            : ' '
                                    }
                                    onClick={handleLogout}
                                >
                                    <GrLogout size={25} /> Logout
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
