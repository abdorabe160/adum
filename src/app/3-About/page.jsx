import Image from "next/image";

const About = () => {
  return (
    <section id="About" className="res flex justify-between items-center pt-40">
      <div className="w-2/4 text-slate-500 text-lg leading-9">
        <h2 className="pb-10 text-4xl font-semibold capitalize text-black">
          about app
        </h2>
        <p>
          Adumcar app helps you eeasily sell your car online and receive offers
          from buyers.
        </p>
      </div>
      <Image
        src="https://adumcar.com/assets/phones.svg"
        width={500}
        height={500}
        alt="image"
      />
    </section>
  );
};

export default About;
