const Button = ({ text, bgColor, textColor, brColor, borderWidth }) => {
  return (
    <div style={{ backgroundColor: bgColor, border: `${borderWidth} solid ${brColor}`, }} className='px-8 rounded-lg py-3 cursor-pointer w-fit '>
      <h1 style={{color: textColor}} className="font-[600] ">{text}</h1>
    </div>
  )
}

export default Button