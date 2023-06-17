import React from "react";
import person from "../../../assets/images/about_us/photo-1609422644211-a85c36ee36a7.jpeg";
import parts from "../../../assets/images/about_us/Children-playing-hockey-to-develop-leadership-skills.jpg";
import Container from "../../../Components/Container/Container";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const About = () => {
  return (
    <Container>
          <div>
             
              <div className="hero min-h-screen">
                  
                  <div className="hero-content flex-col lg:flex-row ">
                      
                      <div className="lg:w-1/2 relative">
                          
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-white border-8"
            />
          </div>
          <div className="lg:w-1/2 space-y-5">
            <h1 className="text-5xl  text-orange-500 font-bold">About Us</h1>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
            Discover an exhilarating summer camp experience where sports and learning collide. With our seasoned experts, your journey through a wide array of sports courses is guaranteed to be unforgettable. Unleash your potential and join us for an active, 
            </p>
            <p>
            skill-enhancing adventure at our Sports Summer Camp. Your winning summer starts here!
            </p>
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default About;
