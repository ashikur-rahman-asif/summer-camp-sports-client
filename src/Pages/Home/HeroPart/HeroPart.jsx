import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";

function HeroPart() {
  return (
    <Container>
      <section className="bg-white text-gray-800 mb-8">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Join our Summer Sports Camp
              </h1>
              <p className="text-lg mt-4">
                Get ready for an unforgettable summer of sports and fun!
              </p>
              <div className="mt-8">
                <Link to="/Register">
                  <button className="bg-blue-500 text-white py-3 px-6 font-semibold rounded-full shadow-lg mr-4">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <img
                className="w-full max-w-md mx-auto sm:max-w-none"
                src="https://ecusd7.org/glencarbon/wp-content/uploads/sites/10/2022/05/summerSportsCamps-768x377.jpeg"
                alt="Summer Camp"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
export default HeroPart;
