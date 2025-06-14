import Carousel from "react-material-ui-carousel";
import Cards from "./Cards";

const MobileCarousel = ({ cardList }) => {
  return (
    <div className="md:hidden w-full px-4 py-8">
      {" "}
      {/* Added padding */}
      <div className="flex justify-center">
        <Carousel
          className="w-full max-w-md"
          navButtonsAlwaysVisible={true}
          animation="slide"
          cycleNavigation={false}
          duration={500}
          indicators={false}
          autoPlay={false}
          navButtonsProps={{
            style: {
              backgroundColor: "rgba(255,255,255,0.8)",
              color: "#7C4EE4", // Theme color
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              width: 40,
              height: 40,
            },
          }}
        >
          {cardList.map((items) => (
            <div key={items.id} className="px-4 pb-8">
              {" "}
              {/* Increased padding */}
              <div className="h-full flex justify-center">
                <Cards
                  cardImg={items.cardImg}
                  heading={items.heading}
                  paragh={items.paragh}
                  type={items.type}
                  date={items.date}
                  className="w-full max-w-sm mx-2" // Added horizontal margin
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MobileCarousel;
