import { faDownload, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="Home" className="res flex justify-between items-center pt-40">
      <div className="w-2/4 text-slate-500 text-lg leading-9 ">
        <h2 className="text-black text-4xl font-semibold pb-16">
          <span className="text-white mr-1">
            <FontAwesomeIcon
              icon={faPlay}
              className=" absolute text-rose-400 -z-10 text-9xl rotate-45 -ml-3 -mt-8"
            />{" "}
            sell
          </span>{" "}
          your car easily now
        </h2>
        <p>
          Adumcar is an application that helps you sell and buy your vehicle
          with ease without fatigue. While sitting at home... at work,
          everything it just requires internet connection!s
        </p>
        <div className=" mt-9 w-80 flex justify-between items-center ">
          {" "}
          <a
            href="#Redy"
            className="bg-rose-700 text-white py-2 px-3 rounded-md"
          >
            <button>
              <FontAwesomeIcon icon={faDownload} /> download app
            </button>
          </a>{" "}
          <a
            href="https://www.facebook.com/adumcar/videos/782839442384059/"
            className="text-rose-700"
          >
            {" "}
            <FontAwesomeIcon icon={faPlay} /> watch video
          </a>
        </div>
      </div>
      <div className="img">
        <Image
          src="https://adumcar.com/assets/right.svg"
          width={500}
          height={500}
          alt="image"
        />
      </div>
    </section>
  );
};

export default Hero;
