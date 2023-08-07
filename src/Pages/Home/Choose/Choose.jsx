import React from "react";
import supports from "../../../assets/images/why_choose/Group.svg";
import teams from "../../../assets/images/why_choose/Group 71.svg";
import guarantee from "../../../assets/images/why_choose/Group 38730.svg";
import Container from "../../../Components/Container/Container";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Choose = () => {
    return (
      
      <Container className="mt-8">
            <SectionTitle title="why choose us!"
            subtitle="With expert trainers and a seamless platform, we offer a gateway to excellence, promoting fitness, camaraderie, and personal growth"
            />
      <div className="grid mx-auto grid-cols-1 md:grid-cols-3 mb-10">
        <div className="flex justify-center mt-6">
          <div className="card w-[140px] h-[100px] bg-base-100 shadow-xl">
            <img src={teams} className="h-12" />
            <h2 className="text-center mt-2">Expert Teams</h2>
          </div>
        </div>
              <div className="flex justify-center mt-6">
              <div className="card w-[140px] h-[100px] bg-base-100 shadow-xl">
          <img src={supports} className="h-12" />
          <h2 className="text-center mt-2">24/7 Supports</h2>
        </div>
       </div>
              <div className="flex justify-center mt-6">
              <div className="card w-[140px] h-[100px] bg-base-100 shadow-xl">
          <img src={guarantee} className="h-12" />
          <h2 className="text-center mt-2">100% Guarantee</h2>
        </div>
       </div>
      </div>
    </Container>
  );
};

export default Choose;
