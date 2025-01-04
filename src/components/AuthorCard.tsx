import React from 'react'

export default function AuthorCard() {
    return (
        <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
            <div className='flex items-center animation-fadeIn'>

                <img
                    className='w-16 h-20 rounded-xl mr-4 object-cover border-2 border-slate-700'
                    src='../images/pic.jpg'
                    alt='Author Image' />

                <div>
                    <h3 className='text-xl font-bold'> AHMED ABRAR </h3>
                    <p className=' text-slate-500'> Web Developer | basic python developer | Front-End Developer</p>
                </div>
              </div>

              <p className='mt-4 text-black leading-relaxed font-serif'>
              Muhammad Ahmed is a passionate web developer focused on building user-friendly and engaging websites. Currently, he is working on creating a blog platform to share knowledge and ideas.
              </p>
              <div className='mt-4 flex space-x-3'>
                <a href="https://www.facebook.com/profile.php?id=100008668830856"
                className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 hover:scale-95 '>
                  Facebook 
                </a>

                <a href="https://github.com/Ahmed-Abrar123"
                className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 hover:scale-95'>
                  GitHub 
                </a>

                <a href="m-ahmed-abrar-691b0726a"
                className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300 hover:scale-95'>
                  Linkedin 
                </a>
              </div>

        </div>
    );
}


