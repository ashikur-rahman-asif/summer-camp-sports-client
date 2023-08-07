import React from "react";
import Container from "../../../Components/Container/Container";
import calender from "../../../assets/images/contact/Group 32.png";
import call from '../../../assets/images/contact/Group 34.png'
const Contact = () => {
  return (
    <Container>
      <div className="bg-black h-72 rounded-2xl md:flex mb-8 ">
        <div className="flex items-center justify-center gap-2 mx-auto pt-11  ">
          <div>
            <img src={calender} alt="" />
          </div>
          <div>
            <h5 className="text-white text-lg">We are open everyday</h5>
            <h4 className="text-white font-bold text-xl">24 hours </h4>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center mx-auto mt-3 ">
          <div>
            <img src={call} alt="" />
          </div>
          <div>
            <h5 className="text-white text-lg">Have a Questions?</h5>
            <h4 className="text-white font-bold text-xl">+8801641145180</h4>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mx-auto mt-3">
          <div>
            <img src={calender} alt="" />
          </div>
          <div>
            <h5 className="text-white text-lg">We are open everyday</h5>
            <h4 className="text-white font-bold text-xl">24 hours </h4>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
