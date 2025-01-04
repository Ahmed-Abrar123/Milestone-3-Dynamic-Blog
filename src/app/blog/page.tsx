export default function Blog() {
    return (
      <div className="bg-gray-50 py-16 px-8">
        {/* Blog Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-black mb-4">BLOGS</h1>
          <p className="text-xl text-gray-600">Discover the latest insights, reviews, and updates on luxury cars, supercars, and innovations in the automotive world.</p>
        </div>
  
        {/* Blog Articles */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/rolls royce.jpg" alt="Blog 1" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rolls Royce Ghost Series II</h3>
              <p className="text-gray-700 mb-4">
                A new exterior paint, Mystique Blue, is presented with the Rolls Royce Ghost Series II, capturing the glamour of its Caribbean island namesake.
              </p>
              <span className="text-gray-500 text-sm">Published on: 11/28/2024</span>
              <div className="mt-4">
                <a href="/blog/rolls-royce-ghost-series-ii" className="text-blue-600 hover:text-blue-800">Read More</a>
              </div>
            </div>
          </div>
  
          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/bmw.jpg" alt="Blog 2" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">BMW i4</h3>
              <p className="text-gray-700 mb-4">
                The BMW i4 is a high-performance all-electric luxury sedan offering a blend of style, range, and advanced technology.
              </p>
              <span className="text-gray-500 text-sm">Published on: 11/29/2024</span>
              <div className="mt-4">
                <a href="/blog/bmw-i4" className="text-blue-600 hover:text-blue-800">Read More</a>
              </div>
            </div>
          </div>
  
          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/lamborghini.jpg" alt="Blog 3" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lamborghini Huracan</h3>
              <p className="text-gray-700 mb-4">
                The Lamborghini Huracan is a high-performance supercar known for its striking design, powerful V10 engine, and exceptional speed.
              </p>
              <span className="text-gray-500 text-sm">Published on: 12/5/2024</span>
              <div className="mt-4">
                <a href="/blog/lamborghini-huracan" className="text-blue-600 hover:text-blue-800">Read More</a>
              </div>
            </div>
          </div>
  
          {/* Blog Card 4 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/ferrari.jpg" alt="Blog 4" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ferrari SF90</h3>
              <p className="text-gray-700 mb-4">
                The Ferrari SF90 is a plug-in hybrid supercar that combines a twin-turbo V8 engine with electric motors for an incredible driving experience.
              </p>
              <span className="text-gray-500 text-sm">Published on: 12/10/2024</span>
              <div className="mt-4">
                <a href="/blog/ferrari-sf90" className="text-blue-600 hover:text-blue-800">Read More</a>
              </div>
            </div>
          </div>
  
          {/* Blog Card 5 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/porsche.avif" alt="Blog 5" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Porsche Taycan</h3>
              <p className="text-gray-700 mb-4">
                The Porsche Taycan is an all-electric sports sedan that offers thrilling performance with advanced technology and design.
              </p>
              <span className="text-gray-500 text-sm">Published on: 12/13/2024</span>
              <div className="mt-4">
                <a href="/blog/porsche-taycan" className="text-blue-600 hover:text-blue-800">Read More</a>
              </div>
            </div>
          </div>
  
          {/* Blog Card 6 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/gwagon.jpg" alt="Blog 6" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mercedes G-Wagon</h3>
              <p className="text-gray-700 mb-4">
                The Mercedes-Benz G-Wagon is a luxury off-road SUV renowned for its rugged design and premium features.
              </p>
              <span className="text-gray-500 text-sm">Published on: 12/17/2024</span>
              <div className="mt-4">
                <a href="/blog/mercedes-g-wagon" className="text-blue-600 hover:text-blue-800">Read More</a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pagination */}
        <div className="text-center mt-16">
          <a href="/blog/page/2" className="text-blue-600 hover:text-blue-800 text-lg">Next Page</a>
        </div>
      </div>
    );
  }
  
