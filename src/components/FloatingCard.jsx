import Button from "./Button";

const FloatingCard = () => {
  return (
    <div className="h-[150px] w-[800px] py-6 pl-6 pr-16 flex flex-col gap-5 rounded-lg">
      <div className="flex gap-5 ">
        <h1 className="text-secondary font-[700] ">DEVELOPMENT</h1>
        <h3 className="text-[#999999] ">16 March 2025</h3>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-[700] text-3xl text-secondary ">
          How to make a Game look more attractive with New VR & AI Technology
        </h1>
        <p className="text-[#666666] ">
          Google has been investing in AI for many years and bringing its
          benefits to individuals, businesses and communities. Whether it’s
          publishing state-of-the-art research, building helpful products or
          developing tools and resources that enable others, we’re committed to
          making AI accessible to everyone.
        </p>
        <Button text="Read More" textColor='#7C4EE4' bgColor={'white'} br="1px solid #7C4EE4"  />
      </div>
    </div>
  );
};

export default FloatingCard;
