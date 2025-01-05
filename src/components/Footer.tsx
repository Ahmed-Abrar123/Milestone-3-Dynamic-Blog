

import Link from 'next/link'; // Import Link component for routing in Next.js
import Image from 'next/image'; // Import Image component for optimized image loading

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/sports-cars" className="text-gray-600 hover:text-gray-800">
                   Sports car
                </Link>
              </li>
              <li>
                <Link href="/coupe"  className="text-gray-600 hover:text-gray-800">
                   Coupe
                </Link>
              </li>
              <li>
                <Link href="/suvs" className="text-gray-600 hover:text-gray-800">
                 SUV
                </Link>
              </li>
              <li>
                <Link href="/sedan"   className="text-gray-600 hover:text-gray-800">
                  Sedan
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/luxury-cars"   className="text-gray-600 hover:text-gray-800">
                   Luxury Cars
                </Link>
              </li>
              <li>
                <Link href="/hyper-cars"   className="text-gray-600 hover:text-gray-800">
                  Hyper Cars
                </Link>
              </li>
              <li>
                <Link href="/electric-cars"    className="text-gray-600 hover:text-gray-800">
                 Electric Cars
                </Link>
              </li>
              <li>
                <Link href="/hybrid-cars"  className="text-gray-600 hover:text-gray-800">
                   Hybrid Cars
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">WELCOME</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/"   className="text-gray-600 hover:text-gray-800">
                 Home
                </Link>
              </li>
              <li>
                <Link href="/about"      className="text-gray-600 hover:text-gray-800">
              About
                </Link>
              </li>
              <li>
                <Link href="/blog"     className="text-gray-600 hover:text-gray-800">
               Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-800">
                   Contact
                </Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter your email"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-blue-600 rounded-md border-0 py-2 px-6 hover:bg-blue-800 transition duration-300 hover:scale-105">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-2xl font-serif text-blue-900">CAR BLOGS</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            &copy; 2024
            
              Cpoyright
            
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href="https://www.facebook.com/"   className="text-gray-500">
           
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              
            </Link>
            <Link href="https://twitter.com"   className="ml-3 text-gray-500">
            
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              
            </Link>

            <Link href="https://www.instagram.com" className="ml-3 text-gray-500">
  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
    <path d="M12 2.16c3.08 0 3.454.01 4.674.067a6.021 6.021 0 014.31 2.63c1.17 1.66 1.252 3.63 1.254 4.832.004 1.168-.1 3.151-1.254 4.83a6.02 6.02 0 01-4.31 2.63c-1.22.058-1.59.067-4.674.067-3.084 0-3.454-.01-4.674-.067a6.02 6.02 0 01-4.31-2.63C2.98 10.16 2.896 8.19 2.896 7.02c-.004-1.168.1-3.151 1.254-4.832a6.02 6.02 0 014.31-2.63C8.546 2.17 8.92 2.16 12 2.16zm0 1.63c-3.08 0-3.453.01-4.674.067a4.392 4.392 0 00-3.14 1.37c-.88 1.24-.936 3.09-.938 4.93.002 1.845.057 3.689.938 4.93a4.39 4.39 0 003.14 1.37c1.221.058 1.59.067 4.674.067 3.084 0 3.453-.01 4.674-.067a4.39 4.39 0 003.14-1.37c.88-1.24.936-3.09.938-4.93-.002-1.845-.057-3.689-.938-4.93a4.39 4.39 0 00-3.14-1.37c-1.221-.057-1.59-.067-4.674-.067zM12 5.88c-3.388 0-6.13 2.74-6.13 6.12 0 3.387 2.742 6.12 6.13 6.12 3.387 0 6.13-2.733 6.13-6.12 0-3.38-2.743-6.12-6.13-6.12zm0 10.67c-2.536 0-4.56-2.021-4.56-4.56 0-2.535 2.024-4.56 4.56-4.56 2.535 0 4.56 2.025 4.56 4.56 0 2.539-2.025 4.56-4.56 4.56zm7.904-10.272c-.279 0-.514.227-.514.505 0 .278.227.506.514.506.278 0 .505-.228.505-.506 0-.278-.227-.505-.505-.505z"></path>
  </svg>
</Link>


          </span>
        </div>
      </div>
    </footer>
  );
}
