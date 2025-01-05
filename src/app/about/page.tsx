
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Luxury Cars</title>
        <meta name="description" content="Explore luxury automobiles, expert reviews, and the latest in car design and technology." />
      </Head>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold text-center mb-6 text-black">About Us</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0 relative w-full h-[400px]">
            <Image 
              src="/images/gwagon.jpg" 
              alt="Luxury Cars" 
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl" 
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to our world of luxury automobiles, where we dive into the latest
              innovations, designs, and performance benchmarks of the finest cars in the world.
              Whether you're a fan of sleek sedans, roaring supercars, or cutting-edge electric vehicles,
              we bring you all the information you need to stay ahead in the world of luxury cars.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our goal is to provide expert reviews, exclusive news, and in-depth showcases of the
              most coveted cars. With a passion for elegance and power, we explore every detail—from
              performance and technology to design breakthroughs and future innovations.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Led by Ahmed Abrar, a dedicated web and front-end developer with a love for automotive
              design and technology, our platform serves as a space to share ideas and knowledge for
              car enthusiasts worldwide. We aim to connect people with the cars of their dreams, offering
              insights and inspiration to redefine their journey.
            </p>
            <p className="text-lg text-gray-700 mb-6">
  Join us as we explore the world of luxury, performance, and elegance—because driving
  should be nothing short of extraordinary!

</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default About;


