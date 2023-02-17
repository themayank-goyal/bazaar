import React from 'react'
import ProductCard from './ProductCard'

const MarketPlace = () => {
  return (
    <div className='p-3'>
      <h1 className='text-4xl font-semibold'>Market Place</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3'>
        <ProductCard/>
      </div>
    </div>
  )
}

export default MarketPlace