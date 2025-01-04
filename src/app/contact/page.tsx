

export default function Contact() {
    return (
      <div className="py-16 px-6 bg-gray-50">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl  font-serif font-bold text-gray-800">Contact Us</h1>
          <p className="text-xl text-gray-600 mt-4">
            Have a question or want to get in touch with us? We're just a message away.
          </p>
        </div>
  
        {/* Contact Form Section */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name Field */}
              <div className="form-group">
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="Your Name"
                  required
                />
              </div>
  
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
  
            {/* Message Field */}
            <div className="mt-6">
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
            
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg transition duration-300 transform hover:bg-indigo-700 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
  
        {/* Contact Info Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-2">You can also reach us through the following channels:</p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <a href="mailto:info@luxurycars.com" className="text-indigo-600">info@luxurycars.com</a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <a href="tel:+1234567890" className="text-indigo-600">+92 12345678901</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  