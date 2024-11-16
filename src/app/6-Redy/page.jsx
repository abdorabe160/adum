import Image from "next/image";

const Redy = () => {
  return (
    <section id="Redy" className="res flex items-center pt-64 ">
      <div>
        <h1 className="text-4xl font-semibold py-12 w-3/4 ">
          Ready To Buy Or sell Your car
        </h1>
        <p className=" leading-8 text-gray-500 text-lg w-4/5">
          If you want to renew your car, whether you want to sell the old car or
          buy a new one. <br />
          download Adum car app now
        </p>
        <h4 className="py-9 text-2xl">Download</h4>
        <div className="flex gap-4 ">
          <button className="hover:scale-110">
            {" "}
            <a href="https://play.google.com/store/apps/details?id=com.adum.car">
              {" "}
              <Image
                src={"https://adumcar.com/assets/Googleplay.svg"}
                width={200}
                height={200}
                alt=""
              />{" "}
            </a>
          </button>
          <button className="hover:scale-110">
            {" "}
            <a href="https://apps.apple.com/tt/app/adumcar/id1573238643">
              {" "}
              <Image
                src={"https://adumcar.com/assets/apple.svg"}
                width={200}
                height={200}
                alt=""
              />{" "}
            </a>
          </button>
        </div>
      </div>
      <div>
        <Image
          src="https://adumcar.com/assets/ready/apps.png"
          width={500}
          height={500}
          alt="image"
        />
      </div>
    </section>
  );
};

export default Redy;
