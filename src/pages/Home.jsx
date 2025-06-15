import backgrounImg from "../assets/waterMark.png";
import backgrounImg2 from "../assets/waterMark2.png";
import homeImg from "../assets/home-main.png";
import homeImg2 from "../assets/home2.png";
import Button from "../components/Button";
import FloatingCard from "../components/FloatingCard";
import HeadingBanner from "../components/HeadingBanner";
import Cards from "../components/Cards";
import MobileCarousel from "../components/MoblieCarousel";
import { PopularList, RepostCardList } from "../constant/cardLists";

const Home = () => {
  return (
    <>
      {/* First Section */}
      <section className="bg-primary h-[88vh] relative overflow-hidden">
        {/* Background watermarks */}
        <img
          src={backgrounImg}
          className="w-80 absolute -top-10 left-0"
          alt="background watermark"
        />
        <img
          src={backgrounImg2}
          className="w-80 absolute -bottom-12 right-0"
          alt="background watermark"
        />

        {/* Main content */}
        <div className="container mx-auto h-full flex justify-center flex-col lg:flex-row lg:justify-between items-center px-8 gap-10 lg:gap-0">
          <div className="flex flex-col lg:gap-6 max-w-[600px] gap-3 z-10">
            <h3 className="text-white font-semibold text-lg">Featured Post</h3>
            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight line-clamp-2 ">
              How AI will Change the Future
            </h1>
            <p className="text-white text-lg leading-relaxed line-clamp-3">
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute. For example, home robots will overcome
              navigation, direction
            </p>
            <div className="mt-4">
              <Button
                text="Read More"
                textColor="#7C4EE4"
                bgColor="white" // Purple theme color
                className="px-8 py-3 text-lg hover:bg-purple-700 transition-colors"
              />
            </div>
          </div>

          <div className="flex lg:block z-10">
            <img
              src={homeImg}
              className="w-[410px] h-[410px] object-contain"
              alt="AI technology illustration"
            />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="hidden lg:block w-full my-16 bg-gray-50 relative">
        <div className="container mx-auto">
          <div className="relative mb-60">
            <img
              src={homeImg2}
              className="w-full max-w-4xl mx-auto h-auto object-cover rounded-lg"
              alt="VR & AI Technology illustration"
            />
            <FloatingCard />
          </div>
        </div>
      </section>

      {/* Our Recent Posts */}
      <section className="flex flex-col justify-center mt-10 lg:mt-40">
        <HeadingBanner text="Our Recent Post" />
        <div className="hidden md:flex flex-col lg:flex-row justify-between items-center gap-0 lg:gap-20 mx-10 lg:mx-32 mb-16">
          <img
            src={homeImg2}
            className="md:w-[600px] md:h-[350px] object-cover rounded-lg"
            alt="VR & AI Technology illustration"
          />
          <div className="flex flex-col gap-5 justify-start min-w-[200px] sm:w-[400px] md:w-[600px]">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-secondary uppercase tracking-wider">
                Development
              </span>
              <span className="text-gray-400">16 March 2025</span>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-4xl font-bold text-secondary leading-snug line-clamp-2">
                How to make a Game look more attractive with New VR & AI
                Technology
              </h1>
              <p className="text-gray-600 line-clamp-3">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it's publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we're committed to making AI accessible to everyone.
              </p>
              <Button
                text="Read More"
                textColor="white"
                bgColor="#7C4EE4"
                className="hover:bg-purple-700 transition-colors"
              />
            </div>
          </div>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:block container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {RepostCardList.map((items) => (
              <div key={items.id} className="mb-8"> {/* Added margin-bottom */}
                <Cards
                  cardImg={items.cardImg}
                  heading={items.heading}
                  paragh={items.paragh}
                  type={items.type}
                  date={items.date}
                  className="hover:shadow-lg transition-shadow" // Added hover effect
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Carousel */}
        <MobileCarousel cardList={RepostCardList} />
      </section>

      {/* Popular Section */}
      <section className="lg:mt-16 lg:mb-20"> {/* Added bottom margin */}
        <HeadingBanner text="Popular Posts" />
        <div className="hidden md:block container mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PopularList.map((items) => (
              <div key={items.id} className="mb-8"> {/* Added margin-bottom */}
                <Cards
                  cardImg={items.cardImg}
                  heading={items.heading}
                  paragh={items.paragh}
                  type={items.type}
                  date={items.date}
                  className="hover:shadow-lg transition-shadow" // Added hover effect
                />
              </div>
            ))}
          </div>
        </div>
        {/* Mobile Carousel */}
        <MobileCarousel cardList={PopularList} />
      </section>
    </>
  );
};

export default Home;