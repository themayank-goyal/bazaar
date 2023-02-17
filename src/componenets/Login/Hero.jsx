import React from 'react';
import HERO from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className='relative'>
      <div className='p-4 flex flex-col-reverse sm:flex-row items-center justify-between'>
        <div className='grid grid-rows-3 gap-2'>
          <h1 className='text-4xl font-extrabold text-zinc-800'>Make bid for items</h1>
          <p className='text-slate-500'>Buy and sell the items on bid</p>
          <button className='border-2 text-orange-500 font-semibold bg-white rounded-lg px-2 py-2'>Let's bid it</button>
        </div>
        <div className='mb-6 sm:mb-0'>
          <img className='object-cover' src={HERO} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
