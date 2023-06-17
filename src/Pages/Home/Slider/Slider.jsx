import Container from "../../../Components/Container/Container";
import { Fade, Slide } from "react-awesome-reveal";
function Slider() {
  return (
    <div>
  <Container>
    <div className="carousel w-full mb-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/different-people-participating-cross-country_23-2149157132.jpg?w=1380&t=st=1686607947~exp=1686608547~hmac=e1c82c7f137326af8cd4fd471bf1c33d5f7a04575f1e4b499427839ec325cc13"
          className="w-full sm:h-[100vh] md:h-[90vh]"
        />

        <div className="absolute top-1/3 flex flex-col items-start left-20 w-4/6 md:left-1/4 md:w-1/2 text-white">
          <Fade direction="up" duration={1000} triggerOnce>
            <p className="text-2xl md:text-6xl font-bold">
              When it comes to summer camp, weird is cool..
            </p>

            <p className="md:text-xl font-bold mt-2">
              The end-of-summer winds make people restless.
            </p>
          </Fade>
        </div>
        <div className="absolute flex justify-between left-5 right-5 bottom-5 md:top-1/2">
          <a href="#slide3" className="text-white md:btn md:btn-circle">
            ❮
          </a>
          <a href="#slide2" className="text-white md:btn md:btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/kids-playing-soccer-football_1150-3902.jpg?w=1380&t=st=1686608480~exp=1686609080~hmac=d5eb03743a002c40618943b591a1b983d148730ad85de7969b71f2194d485d07"
          className="w-full md:h-[90vh]"
        />
        <div className="absolute inset-0 opacity-40 bg-black w-full h-[100vh]"></div>
        <div className="absolute top-1/3 flex flex-col items-start left-20 w-4/6 md:left-1/4 md:w-1/2 text-white">
          <Fade direction="up" duration={1000} triggerOnce>
            <p className="text-2xl md:text-6xl font-bold">
              When it comes to summer camp, weird is cool.
            </p>

            <p className="md:text-xl font-bold mt-2">
              The end-of-summer winds make people restless.
            </p>
          </Fade>
        </div>
        <div className="absolute flex justify-between left-5 right-5 bottom-5 md:top-1/2">
          <a href="#slide1" className="text-white md:btn md:btn-circle">
            ❮
          </a>
          <a href="#slide3" className="text-white md:btn md:btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/group-kids-forest-by-bonfire-with-mushmellows_1303-9501.jpg?w=1380&t=st=1686608792~exp=1686609392~hmac=bec47b931af7c6462c7a5a93b2dd163cf2d6ff6d979f12b5628d81d0c4425662"
          className="w-full md:h-[90vh]"
        />
        <div className="absolute inset-0 opacity-40 bg-black w-full h-[100vh]"></div>
        <div className="absolute top-1/3 flex flex-col items-start left-20 w-4/6 md:left-1/4 md:w-1/2 text-white">
          <Slide direction="left" duration={1000} triggerOnce>
            <p className="text-2xl md:text-6xl font-bold">
              When it comes to summer camp, weird is cool.
            </p>

            <p className="md:text-xl font-bold mt-2">
              The end-of-summer winds make people restless.
            </p>
          </Slide>
        </div>
        <div className="absolute flex justify-between left-5 right-5 bottom-5 md:top-1/2">
          <a href="#slide1" className="text-white md:btn md:btn-circle">
            ❮
          </a>
          <a href="#slide1" className="text-white md:btn md:btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  </Container>
</div>
  );
}

export default Slider;
