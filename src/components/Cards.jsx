import { useNavigate } from "react-router-dom";

const Cards = ({ cardImg, type, date, heading, paragh, id, slug }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blogs/${slug}`, {
      state: {
        cardImg,
        type,
        date,
        heading,
        paragh,
        id
      }
    });
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md m-2 flex flex-col gap-5 max-w-[400px]">
      <img src={cardImg} className='w-auto h-[300px] object-cover rounded-xl' alt={heading} />
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex gap-3">
          <span className="text-sm text-secondary font-[700]">{type}</span>
          <span className="text-sm text-[#999999]">{date}</span>
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h1 className="text-2xl font-[700] text-secondary line-clamp-2">{heading}</h1>
          <p className="text-[#666666] line-clamp-3 flex-1">{paragh}</p>
          
          <button
            onClick={handleReadMore}
            style={{
              backgroundColor: '#7C4EE4',
              border: '0 solid transparent',
            }}
            className="px-4 py-2 md:px-8 rounded-lg md:py-3 cursor-pointer w-fit hover:bg-[#6b3dd4] transition-colors"
          >
            <span style={{ color: 'white' }} className="md:font-[600]">
              Read More
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;