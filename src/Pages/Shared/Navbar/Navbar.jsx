import { useContext, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";
import avaterimg from "./Avatarpng.png";
import logo from "./navLogo.png";
import Swal from "sweetalert2";
import Container from "../../../Components/Container/Container";
import Theme from "../../../Components/Theme/Theme";
import { AuthContext } from "../../../Context/AuthProvider";
import useRole from "../../../hooks/useRole";

function Navbar() {
  const { user, logoutUser } = useContext(AuthContext);
  // console.log(user.photoURL)
  const [isOpen, setIsOpen] = useState(false);
  const [userRole] = useRole();
  const navigate = useNavigate();
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/", { replace: true });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="w-full absolute top-0 z-10 bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex  items-center justify-between gap-3 md:gap-0 ">
            <Link to="/">
              <button>
                <img className=" md:block h-11" src={logo} alt="SportsFever" />
              </button>
            </Link>
            <div className="flex">
              <ul className="items-center  hidden space-x-8 lg:flex">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-blue-700" : "default"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/instructors"
                    className={({ isActive }) =>
                      isActive ? "text-blue-700" : "default"
                    }
                  >
                    Instructors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/classes"
                    className={({ isActive }) =>
                      isActive ? "text-blue-700" : "default"
                    }
                  >
                    Classes
                  </NavLink>
                </li>
                <li>
                  {
                    !user &&  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-blue-700" : "default"
                    }
                  >
                    Login
                  </NavLink>
                 }
                </li>
              </ul>
              <ul>
                <li>
                  
                <Theme />
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="flex flex-row items-center gap-3">
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                  <AiOutlineMenu />
                  <div className="hidden md:block">
                    <img
                      className="rounded-full"
                      src={user && user.photoURL ? user.photoURL : avaterimg}
                      alt="profile"
                      height="40"
                      width="40"
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                  <div className="flex flex-col cursor-pointer">
                    <Link
                      to="/"
                      className="block md:hidden px-4 py-3 hover:bg-neutral-400 transition font-semibold"
                    >
                      Home
                    </Link>
                    {user && userRole === "student" && (
                      
                        <Link
                          to="/dashboard/select-classes"
                          className='px-4 py-3 hover:bg-neutral-400 transition font-semibold cursor-pointer'
                        >
                          Dashboard
                        </Link>
                      
                    )}
                    {user && userRole === "instructor" && (
                      
                        
                        <Link
                          to="/dashboard/add-class"
                          className='px-4 py-3 hover:bg-neutral-400 transition font-semibold cursor-pointer'
                        >
                          Dashboard
                        </Link>
                     
                      
                    )}
                    {user && userRole === "admin" && (
                      
                        <Link
                          to="/dashboard/manage-classes"
                          className='px-4 py-3 hover:bg-neutral-400 transition font-semibold cursor-pointer'
                        >
                          Dashboard
                        </Link>
                     
                    )}
                    {user ? (
                      <div
                        onClick={handleLogout}
                        className="px-4 py-3 hover:bg-neutral-400 transition font-semibold cursor-pointer"
                      >
                        Logout
                      </div>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="px-4 py-3 md:hidden hover:bg-neutral-400 transition font-semibold"
                        >
                          Login
                        </Link>
                        <Link
                          to="/Register"
                          className="px-4 py-3 hover:bg-neutral-400 transition font-semibold"
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                    <Link
                      to="/instructors"
                      className="px-4 py-3 md:hidden hover:bg-neutral-400 transition font-semibold"
                    >
                      Instructors
                    </Link>
                    <Link
                      to="/classes"
                      className="px-4 py-3 md:hidden hover:bg-neutral-400 transition font-semibold"
                    >
                      Classes
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
