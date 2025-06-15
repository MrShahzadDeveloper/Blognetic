import Cards from "../components/Cards";
import { PopularList } from "../constant/cardLists";

const Blogs = () => {
  return (
    <>
      <div class="max-w-4xl flex justify-center items-center flex-col mx-auto md:my-14 p-3 md:p-6 font-sans mt-10 md:mt-4">
        <h4 class="text-third font-[600] lg:font-[500] mb-4 ">OUR BLOGS</h4>
        <h1 class="text-secondary text-2xl lg:text-5xl md:text-4xl font-[700] lg:font-[600] text-center mb-4">
          Find our all blogs from here
        </h1>
        <p class="hidden md:block text-gray-600 leading-relaxed text-center">
          our blogs are written from very research research and well known
          writers writers so that we can provide you the best blogs and articles
          articles for you to read them all along
        </p>
      </div>
      <div className="container flex items-center justify-center mx-auto px-3 md:px-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PopularList.map((items) => (
            <div key={items.id} className="mb-8">
              {" "}
              {/* Added margin-bottom */}
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
    </>
  );
};

export default Blogs;
