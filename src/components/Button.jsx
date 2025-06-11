const Button = ({ text, bgColor, textColor, br }) => {
  return (
    <div className={`px-8 bg-[${bgColor}]  rounded-lg py-3 cursor-pointer w-fit `} >
      <h1 style={{color: textColor}} className="font-[600] ">{text}</h1>
    </div>
  )
}

export default Button