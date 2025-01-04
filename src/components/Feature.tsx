import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-50 mb-40'>
        <h2 className='text-center px-8 text-2xl  font-serif font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out
        transform hover:translate-y-[-5px] hover:text-black text-blue-900'>
          Dive into the world of luxury cars with expert reviews, exclusive news, and stunning showcases of the finest vehicles.
        </h2>

        <p className='text-center  pt-8 mb-4 mt-4 font-serif text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-200 '>
          Experience the world of luxury automobiles like never before. 🚘✨
          Discover the latest in design, performance, and innovation from the finest car brands.
          From sleek sedans to roaring supercars, explore vehicles that define elegance and power.
          Get exclusive insights, reviews, and updates on the most coveted cars in the world.
          Redefine your journey – because driving should be nothing short of extraordinary!
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl text-center font-bold font-serif my-8 text-red-600 '> Exploring Our Categories </h1>

          <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
{[
  "Royal Cars",
  "Luxury Cars",
  "Super Cars",
  "Hyper Cars",
  "Electric Cars",
  "Plug-in-Hybrid Cars",
].map((category, index) => (
  <div key={index}
  className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>

<p className='text-center text-lg font-semibold'>{category}</p>
<div className='absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'>

</div>
  </div>
))}
          </div>

        </div>

        <p className='text-sm md:text-base text-black mb-6 px-4 font-serif animate-fade-in-down delay-100 mt-10'>
        Our blog features carefully curated categories to fuel your passion for luxury cars.   
Explore sections dedicated to supercars, luxury sedans, SUVs, and concept vehicles.  
From performance reviews to design breakthroughs, find everything you need to stay ahead in the automotive world.
        </p>

      </section>
    </div>
  )
}
