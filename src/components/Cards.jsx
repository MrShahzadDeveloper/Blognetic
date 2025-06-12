import Button from "./Button"

const Cards = ({ cardImg, type, date, heading, paragh }) => {
  return (
    <div className="max-w-[400px] m-2 flex flex-col gap-5 ">
      <img src={cardImg} className='w-[400px] h-[350px] ' />
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 ">
          <span className="text-sm text-secondary font-[700] ">{type}</span>
          <span className="text-sm text-[#999999] ">{date}</span>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-[700] text-secondary ">{heading}</h1>
          <p className="text-[#666666] min-w-[380px] ">{paragh} </p>
          <Button text="Read More" textColor="white" bgColor="#7C4EE4"  />
        </div>
      </div>
    </div>
  )
}

export default Cards