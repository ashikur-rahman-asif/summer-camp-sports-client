import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

function SocialLogin() {
    const { loginWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then((res) => {
                const userInfo = {
                    userName: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoUrl,
                    role: 'student',
                };
                fetch('https://12-server-virid.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then((res) => res.json())
                    .then((data) => console.log(data));
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500,
                });

                navigate(from, { replace: true });
            })

            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div>
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center mx-auto border p-3 btn"
            >
              <FcGoogle />
              Log in with google
            </button>
          </div>
    );
}

export default SocialLogin;
