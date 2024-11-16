import {
  faBars,
  faCircleCheck,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const How = () => {
  return (
    <section id="How" className="res mt-20 pt-20">
      <h1 className="text-center p-16 pb-28 text-4xl font-semibold">
        How it works?
      </h1>
      <div className="res flex gap-9 items-center ">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fadumcar%2Fvideos%2F782839442384059%2F%3Fref%3Dembed_video&show_text=0&width=560"
          width="560"
          height="315"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="rounded-2xl"
        ></iframe>

        <div></div>
        <div className="flex flex-col gap-7">
          <div className="card flex items-center gap-5 ">
            <div className="icon w-14 h-14 bg-red-200 rounded-full flex items-center justify-center text-4xl text-rose-800">
              <FontAwesomeIcon icon={faPlusCircle} className="car"  />
            </div>
            <div>
              <h2 className="text-xl pb-2 font-semibold text-rose-800">
                Click Add Car
              </h2>
              <p className="w-60 text-gray-500 ">
                Choose your vehicle type, class, model and address
              </p>
            </div>
          </div>
          <div className="card flex items-center gap-5">
            <div className=" icon w-14 h-14 bg-red-200 rounded-full flex items-center justify-center text-4xl text-rose-800">
              <FontAwesomeIcon icon={faBars} className="car" />
            </div>
            <div>
              <h2 className="text-xl pb-2 font-semibold text-rose-800">
                Fill All Fields
              </h2>
              <p className="w-60 text-gray-500 ">
                Fill in all the required information about the car or vehivle
                you sell
              </p>
            </div>
          </div>
          <div className="card flex items-center gap-5">
            <div className="icon w-14 h-14 bg-red-200 rounded-full flex items-center justify-center text-4xl text-rose-800">
              <FontAwesomeIcon icon={faCircleCheck} className="car" />
            </div>
            <div>
              <h2 className="text-xl pb-2 font-semibold text-rose-800">
                Click Publish
              </h2>
              <p className="w-60 text-gray-500 ">
                Click publish the vehicle and then share the advertisement with
                your friends on social media
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
