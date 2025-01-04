'use client';
import React from 'react'
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';


const posts = [


  {
    id: '1',
    title: "Rolls Royce Ghost Series II",
    description: "A new exterior paint, Mystique Blue, is presented with Ghost Series II. The colour captures the glamour of its Caribbean island namesake.",

    image: "../images/rolls royce.jpg",
  },

  {
    id: '2',
    title: "BMW i4",
    description: "the bmw i4 is a high performance all electric luxury sedan offering a blend of style, range and advanced technology.",

    image: "../images/bmw.jpg",
  },
  {
    id: '3',
    title: "Lamborghini Huracan",
    description: "the Lamborghini huracan is a high performance supercar known for its striking design, powerful V10 engine and exceptional speed.",

    image: "../images/lamborghini.jpg",
  },
  {
    id: '4',
    title: "Ferrari SF90",
    description: "the Ferrari SF90 is a plug-in-hybrid supercar taht combines a twin-turbo V8 engine with electric motors.",

    image: "../images/ferrari.jpg",

  },
  {
    id: '5',
    title: "Porsche Taycan",
    description: "the Porsche taycan is an all electric sports sedan that offers thrilling performance.",

    image: "../images/porsche.avif",
  },
  {
    id: '6',
    title: "Mercedes G-Wagon",
    description: "the Mercedes-Benz G-Wagon is a luxury off-road SUV renowned for its rugged design and premium features.",

    image: "../images/gwagon.jpg",
  },
  {
    id: '7',
    title: "Audi RS-7",
    description: "the Audi RS7 is a sleek and powerful performance sedan that offers a perfect blend of luxury, agility and thrilling driving dynamics.",

    image: "../images/audi.avif",
  },
  {
    id: '8',
    title: "Maserati Stallantis",
    description: "The Maserati Stallantis is a luxury vehicle under the Stallantis group,  offering a sophisticated blend of Italian design.",

    image: "../images/maserati.webp",
  },
  {
    id: '9',
    title: "Bugatti Chiron",
    description: "The Bugatti Chiron is an ultra-luxury hypercar known for its breathtaking speed, cutting- edge engineering and a quad-turbocharged W16 engine.",

    image: "../images/bugatti.jpg",
  },
  {
    id: '10',
    title: "McLaren 720s",
    description: "The McLaren 720S is a high-perfomance supercar with a light weight design.",

    image: "../images/mclaren.webp",
  },
  {
    id: '11',
    title: "Chevrolet Camaro",
    description: "The Chevrolet Camaro is a classic American muscle car known for its bold design.",

    image: "../images/chevrolet.webp",
  },
  {
    id: '12',
    title: "Bentley Mulliner",
    description: "The Bentley Mulliner represents the pinnacle of bespoke luxury and offering handcrafted design.",

    image: "../images/bentley.jpg",
  },


];



export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className='text-2xl font-bold text-center mt-10'>Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };
  return (
    <div className='max-w-3xl mx-auto p-5 '>
      <h1 className='md: text-4xltext-3xl font-bold text-red-600 text-center'> {post.title} </h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-auto rounded-md mt-4 ' />
      )}
      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(post.description)}

      </div>

      <CommentSection postId={post.id} />
      <AuthorCard />
    </div>
  );
}