import React from 'react';
import BlogCard from '../components/BlogCard';

export default function Mega() {
  const posts = [


    {
      id: '1',
      title: "Rolls Royce Ghost Series II",
      description: "A new exterior paint, Mystique Blue, is presented with Ghost Series II. The colour captures the glamour of its Caribbean island namesake.",
      date: "2024-11-28",
      imageUrl: "../images/rolls royce.jpg",
    },

    {
      id: '2',
      title: "BMW i4",
      description: "the bmw i4 is a high performance all electric luxury sedan offering a blend of style, range and advanced technology.",
      date: "2024-11-29",
      imageUrl: "../images/bmw.jpg",
    },
    {
      id: '3',
      title: "Lamborghini Huracan",
      description: "the Lamborghini huracan is a high performance supercar known for its striking design, powerful V10 engine and exceptional speed.",
      date: "2024-12-5",
      imageUrl: "../images/lamborghini.jpg",
    },
    {
      id: '4',
      title: "Ferrari SF90",
      description: "the Ferrari SF90 is a plug-in-hybrid supercar taht combines a twin-turbo V8 engine with electric motors.",
      date: "2024-12-10",
      imageUrl: "../images/ferrari.jpg",

    },
    {
      id: '5',
      title: "Porsche Taycan",
      description: "the Porsche taycan is an all electric sports sedan that offers thrilling performance.",
      date: "2024-12-13",
      imageUrl: "../images/porsche.avif",
    },
    {
      id: '6',
      title: "Mercedes G-Wagon",
      description: "the Mercedes-Benz G-Wagon is a luxury off-road SUV renowned for its rugged design and premium features.",
      date: "2024-12-17",
      imageUrl: "../images/gwagon.jpg",
    },
    {
      id: '7',
      title: "Audi RS-7",
      description: "the Audi RS7 is a sleek and powerful performance sedan that offers a perfect blend of luxury, agility and thrilling driving dynamics.",
      date: "2024-12-18",
      imageUrl: "../images/audi.avif",
    },
    {
      id: '8',
      title: "Maserati Stallantis",
      description: "The Maserati Stallantis is a luxury vehicle under the Stallantis group,  offering a sophisticated blend of Italian design.",
      date: "2024-12-24",
      imageUrl: "../images/maserati.webp",
    },
    {
      id: '9',
      title: "Bugatti Chiron",
      description: "The Bugatti Chiron is an ultra-luxury hypercar known for its breathtaking speed, cutting- edge engineering and a quad-turbocharged W16 engine.",
      date: "2024-12-26",
      imageUrl: "../images/bugatti.jpg",
    },
    {
      id: '10',
      title: "McLaren 720s",
      description: "The McLaren 720S is a high-perfomance supercar with a light weight design.",
      date: "2024-12-28",
      imageUrl: "../images/mclaren.webp",
    },
    {
      id: '11',
      title: "Chevrolet Camaro",
      description: "The Chevrolet Camaro is a classic American muscle car known for its bold design.",
      date: "2024-12-29",
      imageUrl: "../images/chevrolet.webp",
    },
    {
      id: '12',
      title: "Bentley Mulliner",
      description: "The Bentley Mulliner represents the pinnacle of bespoke luxury and offering handcrafted design.",
      date: "2024-12-30",
      imageUrl: "../images/bentley.jpg",
    },


  ];
  return (
    <div className='my-8'>
      <h1 className='text-3xl font-bold  font-serif text-center my-8 text-red-600 animate-color-change'>  Exploring the world of cars and their journeys. </h1>
      <div className='grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-8'>
        {posts.map((post, index) => (
          <div className='fade-in' key={post.id}>
            <div className='blog-card'>
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}
