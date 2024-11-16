import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faDownload,
  faGear,
  faHandshake,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";

const Why = () => {
  return (
    <section className="pt-32">
      <div className="bac bg-slate-300 w-screen  py-60 mt-40 right-0 -z-10 absolute " />
      <h2 className="text-center text-4xl font-semibold pb-36 ">
        why adumcars?
      </h2>
      <div className="flex items-center -mt-20 res ">
        <Image
          src="https://adumcar.com/assets/why/phone.svg"
          width={350}
          height={350}
          alt="image"
        />
        <div className="flex flex-wrap gap-8 justify-center  ">
          <div className="card  w-96 flex flex-col items-center text-center  leading-6 transition-all">
            <div className="icon bg-red-200 w-14 h-14 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faTruckFast}
                className="car  text-rose-800 text-2xl"
              />
            </div>
            <h2 className=" p-4 font-bold text-xl text-rose-800">
              Fast Access
            </h2>
            <p className="text-gray-500">
              The application makes it easy to deliver new ads to all users at
              once
            </p>
          </div>

          <div className="card w-64 flex flex-col items-center text-center  leading-6 transition-all">
            <div className="icon bg-red-200 w-14 h-14 rounded-full flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faHandshake}
                className="car  text-rose-800 text-2xl"
              />
            </div>
            <h2 className=" p-4 font-bold text-xl text-rose-800">
              Free Unlimted Ads
            </h2>
            <p className="text-gray-500">
              Free Unlimted Ads possibillity to post an unlimited number of ads
            </p>
          </div>
          <div className="card w-96 flex flex-col items-center text-center  leading-6 transition-all">
            <div className="icon bg-red-200 w-14 h-14 rounded-full flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faDownload}
                className="car  text-rose-800 text-2xl"
              />
            </div>
            <h2 className=" p-4 font-bold text-xl text-rose-800">
              Installment System
            </h2>
            <p className="text-gray-500">
              The possibility of installments determining the advance payment,
              and determining the remaining payments and the date of each
              payment
            </p>
          </div>
          <div className="card w-64 flex flex-col items-center text-center  leading-6 transition-all">
            <div className="icon bg-red-200 w-14 h-14 rounded-full flex items-center justify-center ">
              <FontAwesomeIcon
                icon={faGear}
                className="car  text-rose-800 text-2xl"
              />
            </div>
            <h2 className=" p-4 font-bold text-xl text-rose-800">
              All Speacifications
            </h2>
            <p className="text-gray-500">
              All specifications of the car must be specifies in order to make
              it easier for the buyer to reach the right car for his needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
