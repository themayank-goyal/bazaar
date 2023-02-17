import React from 'react'

const ProductCard = () => {
  return (
    <div className='p-3 flex flex-col gap-2 items-center shadow-2xl rounded-lg'>
      <img className='object-cover' src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <h1 className='text-orange-500 capitalize font-semibold text-xl'>Glass</h1>
      <p className='text-slate-400 text-center'>glass which is just 2 months old</p>
      <div>
        <h1>Last Bid</h1>
        <p>{`BID: 20RS`}</p>
        <p>{`Made By: Vipul`}</p>
      </div>
    </div>
  )
}

export default ProductCard