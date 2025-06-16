import { Link } from "react-router-dom";

const Button = ({ text, bgColor, textColor, brColor, borderWidth, link }) => {
  return (
    <div style={{ backgroundColor: bgColor, border: `${borderWidth} solid ${brColor}`, }} className='px-4 py-2 md:px-8 rounded-lg md:py-3 cursor-pointer w-fit '>
      <Link to={link} style={{color: textColor}} className="md:font-[600] ">{text}</Link>
    </div>
  )
}

export default Button