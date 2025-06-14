import Button from "./Button"

const Cards = ({ cardImg, type, date, heading, paragh }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md m-2 flex flex-col gap-5 max-w-[400px]"> {/* Fixed width */}
      <img src={cardImg} className='w-auto h-[300px] object-cover rounded-xl' /> {/* Fixed image height */}
      <div className="flex flex-col gap-3 flex-1"> {/* flex-1 makes this div grow to fill space */}
        <div className="flex gap-3">
          <span className="text-sm text-secondary font-[700]">{type}</span>
          <span className="text-sm text-[#999999]">{date}</span>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h1 className="text-2xl font-[700] text-secondary line-clamp-2">{heading}</h1> {/* line-clamp for heading */}
          <p className="text-[#666666] line-clamp-3 flex-1">{paragh}</p> {/* line-clamp for paragraph */}
          <Button text="Read More" textColor="white" bgColor="#7C4EE4" />
        </div>
      </div>
    </div>
  )
}

export default Cards