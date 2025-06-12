const Button = ({ text, bgColor, textColor, brColor, borderWidth }) => {
  return (
<<<<<<< HEAD
    <div style={{backgroundColor: bgColor}} className={`px-8 rounded-lg py-3 cursor-pointer w-fit `} >
=======
    <div style={{ backgroundColor: bgColor, border: `${borderWidth} solid ${brColor}`, }} className='px-8 rounded-lg py-3 cursor-pointer w-fit '>
>>>>>>> f3bac711074a472f20a6115dc04f462d7060654a
      <h1 style={{color: textColor}} className="font-[600] ">{text}</h1>
    </div>
  )
}

export default Button