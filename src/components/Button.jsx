const Button = ({ text, bgColor, textColor, brColor, borderWidth }) => {
  return (
    <div style={{ backgroundColor: bgColor, border: `${borderWidth} solid ${brColor}`, }} className='px-4 py-2 md:px-8 rounded-lg md:py-3 cursor-pointer w-fit '>
      <h1 style={{color: textColor}} className="md:font-[600] ">{text}</h1>
    </div>
  )
}

export default Button