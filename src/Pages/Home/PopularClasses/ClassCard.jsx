import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useRole from "../../../hooks/useRole";

function ClassCard({ classes }) {
  const {
    _id,
    className,
    classImage,
    instructor,
    price,
    seats,
    bookedSeats,
    instructorEmail,
  } = classes;
  const [userRole] = useRole();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const handleEnroll = (id) => {
    if (userRole === "admin" || userRole === "instructor") {
      Swal.fire(`Admin & instructor can not select any classes`);
    } else {
      const enrollClass = {
        student: user?.displayName,
        email: user?.email,
        classId: id,
        class: className,
        price,
        instructor,
        classImage,
        instructorEmail,
      };

      axiosSecure.post("/select-class", enrollClass).then((data) => {
        console.log(data.data.message);
        if (data.data.message) {
          Swal.fire("Sorry", `${data.data.message}`, "warning");
        }
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Add to select Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };
  return (
   
    <div className="card bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer">
    <img src={classImage} alt={className} className="object-cover w-full h-96 rounded-t-lg" />
    <div className="p-4">
      <h3 className="text-xl font-semibold">{className}</h3>
      <p className="text-gray-700">Instructor Name: {instructor}</p>
      <p className="text-gray-700">
                Seats: {bookedSeats}/{seats}  ({seats - bookedSeats || seats} Available)
      </p>
      <p className="text-lg font-bold text-black">${price}</p>
      <button onClick={() => handleEnroll(_id)} className="mt-4 py-2 px-4 bg-blue-800 hover:bg-blue-600 text-white rounded-lg">
        Select Class
      </button>
    </div>
  </div>
  );
}

export default ClassCard;
