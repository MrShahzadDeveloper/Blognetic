import Button from "./Button"

const HeadingBanner = ({ text }) => {
  return (
    <div className="flex justify-between items-center my-12 mx-10 md:mx-20">
      <h1 className="text-3xl md:text-5xl text-[#333333] font-[700] ">{text}</h1>
      <Button text="View All" bgColor="#7C4EE4" textColor="white" />
    </div>
  )
}

export default HeadingBanner
