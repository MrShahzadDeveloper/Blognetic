import aboutMain from "../assets/about-main.png";
import AboutCards from "../components/AboutCards";
import { AboutList } from "../constant/cardLists";

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center mt-10 ">
        <div className="flex flex-col justify-center gap-5 lg:gap-10 items-center px-5 lg:px-10 ">
          <h3 className="text-third font-[600] lg:font-[500] ">ABOUT US</h3>
          <h1 className="text-secondary text-2xl lg:text-5xl md:text-4xl font-[700] lg:font-[600] text-center  ">
            Creative Blog Writting and{" "}
            <span className=" lg:block mt-4">publishing site</span>
          </h1>
          <p className="text-third md:w-[1000px] text-center ">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </div>
        <img src={aboutMain} className=" w-[350px] h-[175px] sm:w-[600px] sm:h-[300px] md:w-[800px] md:h-[400px] lg:w-[1200px] rounded-xl lg:h-[600px] my-10 lg:my-20 " />
      </section>
      <section className=" mb-20">
        <div className="flex flex-col text-center lg:text-start gap-6 lg:flex-row lg:justify-between lg:items-end mx-6 lg:mx-24">
          <div className="flex flex-col gap-6">
            <h3 className="text-third font-[500] ">HOW WE WORK</h3>
            <h1 className="text-2xl md:text-4xl lg:text-5xl lg:font-[600] font-[700] text-secondary ">
              I will show you how
              <span className="ml-[4px] lg:ml-0 lg:block mt-2">our team works</span>
            </h1>
          </div>
          <p className="text-fourth">
            Bring to the table win-win market strategies to ensure
            <span className=" lg:block">perfect articles.</span>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 lg:mt-20 lg:px-4 mx-6">
          {AboutList.map((items) => (
            <div key={items.num} className="w-full">
              <AboutCards {...items} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutUs;
