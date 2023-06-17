import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

// const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

function Register() {
  const { registerUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = (data) => {
    setError("");
    setLoading(true);

    const formData = new FormData();
    formData.append("file", data.image[0]);
    // formData.append('image', data.image[0])
    formData.append("upload_preset", "gyqalhuo");
    formData.append("cloud_name", "dt5oiykab");
    axios
      .post(`https://api.cloudinary.com/v1_1/dt5oiykab/image/upload`, formData)
      .then((image) => {
        // const img = image.data.display_url;
        const img = image.data.url;

        registerUser(data.email, data.password)
          .then(() => {
            updateUser(data.name, img);
            const userInfo = {
              userName: data.name,
              email: data.email,
              image: img,
              role: "student",
            };
            fetch("http://localhost:4000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Register Successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                navigate(from, { replace: true });
                setLoading(false);
              });
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please SignUp!</h1>
        </div>
        <div className="card-body flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <SocialLogin />
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor=""
                className="text-lg dark:text-gray-300 text-slate-600"
              >
                Profile Picture
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                name="image"
                className="file-input h-11 file-input-bordered shadow w-full my-2 dark:bg-slate-900 dark:text-white bg-white text-dark-grey border-none"
              />
              <span>
                {errors.image?.type === "required" && (
                  <p className="text-red-500 mb-2">Profile Image Required</p>
                )}
              </span>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,

                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}

              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                {...register("confirmPassword", {
                  required: true,
                  minLength: 6,
                  validate: (value) => value === watch("password"),
                })}
                placeholder="confirm Password"
                className="input input-bordered"
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === "validate" && (
                  <p className="text-red-500 text-sm">
                    Password and Confirm Password must match
                  </p>
                )}
              {errors.confirmPassword?.type === "required" && (
                <p className="text-red-600">Confirm Password is required</p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
