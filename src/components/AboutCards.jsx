import React from 'react';

const AboutCards = ({ num, heading, para }) => {
  return (
    <div className='flex flex-col justify-between hover:bg-primary p-8 rounded-2xl text-black hover:text-white h-full w-full min-w-[320px] space-y-4 transition-all duration-300 ease-in-out group'>
      <h1 className='text-4xl md:text-5xl font-[700] text-[#d6d6d6] group-hover:text-white'>{num}</h1>
      <h2 className='text-xl text-primary group-hover:text-white md:text-2xl font-[600] group-hover:font-[500]'>{heading}</h2>
      
      <div className='space-y-4'>
        {para.split('\n').map((paragraph, index) => (
          <p key={index} className='text-[#999999] text-sm md:text-lg leading-tight group-hover:text-[#e6e6e6]'>
            {paragraph}
          </p>
        ))}
      </div>

      <button className='font-[500] opacity-0 group-hover:opacity-100 text-white mt-2 w-fit transition-opacity duration-300'>
        Learn More
        <div className='bg-white py-[1px] md:py-[2px] w-full mt-1' />
      </button>
    </div>
  );
};

export default AboutCards;