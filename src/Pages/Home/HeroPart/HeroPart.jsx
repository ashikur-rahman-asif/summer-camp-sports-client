function HeroPart() {
  return (
    <div>
      <section className="bg-blue-500 text-white">
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
                <button className="bg-white text-blue-500 py-3 px-6 font-semibold rounded-full shadow-lg mr-4">
                  Register Now
                </button>
                <button className="border-white border-2 text-white py-3 px-6 font-semibold rounded-full shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <img
                className="w-full max-w-md mx-auto sm:max-w-none"
                src="/summer-camp-image.jpg"
                alt="Summer Camp"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
