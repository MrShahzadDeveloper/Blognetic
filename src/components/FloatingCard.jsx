// FloatingCard.jsx
import Button from "./Button";

const FloatingCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl w-[720px] absolute right-[202px] top-[100%] transform -translate-y-1/2">
      <div className="flex flex-col gap-3">
        {/* Category and Date */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
            DEVELOPMENT
          </span>
          <span className="text-xs text-gray-400">16 March 2023</span>
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-bold text-secondary leading-snug">
          How to make a Game look more attractive with New VR & AI Technology
        </h2>
        
        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          Google has been investing in AI for many years and bringing its benefits to individuals, 
          businesses and communities. Whether it's publishing state-of-the-art research, 
          building helpful products or developing tools and resources that enable others, 
          we're committed to making AI accessible to everyone.
        </p>
        
        {/* Button */}
        <div className="mt-3">
          <Button 
            text="Read More" 
            textColor="#7C4EE4" 
            bgColor="white" 
            brColor="#7C4EE4" 
            borderWidth="1px"
          />
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;