import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../Components/Container/Container";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Spinner from "../../Components/Spinner/Spinner";

function Instructors() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://12-server-virid.vercel.app/instructors")
      .then((res) => setInstructors(res.data));
  }, []);

  return (
      <div>
          <PageTitle title="Instructors" />
      <Container>
        {loading ? (
            <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mt-40 my-10">
          {instructors?.map((instructor) => (
            <div
              key={instructor._id}
              className="card gap-3 bg-white rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 cursor-pointer"
            >
              <img
                src={instructor.image}
                className="object-cover w-full h-96 rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{instructor.userName}</h3>
                <p className="text-lg font-bold text-black">
                  {instructor.email}
                </p>
              </div>
            </div>
          ))}
        </div>
          )
          
        }
      </Container>
    </div>
  );
}

export default Instructors;
