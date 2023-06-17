import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import useClasses from "../../hooks/useClasses";
import ClassCard from "../Home/PopularClasses/ClassCard";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Spinner from "../../Components/Spinner/Spinner";

function Classes() {
  const [classes, isLoading] = useClasses();
  const [loading, setLoading] = useState(true);
  const approveClass = classes.filter((cls) => cls.status === "approved");

  return (
    <>
      <PageTitle title="Classes" />
      <Container>
        <div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mt-40 my-10">
            {approveClass?.map((cls) => (
              <ClassCard key={cls._id} classes={cls} />
            ))}
          </div> */}

          {loading ? (
            <Spinner />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 mt-40 my-10">
              {approveClass?.map((cls) => (
                <ClassCard key={cls._id} classes={cls} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

export default Classes;
