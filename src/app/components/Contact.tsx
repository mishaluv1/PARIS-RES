import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Visit Us</h2>
          <p className="text-gray-600">We'd love to serve you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2">Location</h3>
                <p className="text-gray-600">2nd Main, near Aane Park<br />Ashok Nagar, Mandya<br />Karnataka 571401, India</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2">Phone</h3>
                <p className="text-gray-600">+91 82324 60758<br />+91 93800 51400</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2">Email</h3>
                <p className="text-gray-600">info@parisrestaurant.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl mb-2">Hours</h3>
                <p className="text-gray-600">
                  Monday - Sunday<br />
                  11:00 AM - 3:00 PM<br />
                  6:00 PM - 10:30 PM
                </p>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl mb-6">Order or Reserve</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm mb-2 text-gray-700">Date</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm mb-2 text-gray-700">Time</label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm mb-2 text-gray-700">Number of Guests</label>
                <select
                  id="guests"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                >
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5+ people</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">Special Requests</label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Any special requests or dietary requirements?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div> */}
          <div >
          <h3 className="text-2xl text-center mb-8">Find Us Here</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.8!2d76.8953!3d12.5239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa153b2880dbb%3A0xf104bb512b0cb8cd!2sParis%20Restaurant!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Paris Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
       <div className="mt-16 text-center bg-orange-50 rounded-lg p-8">
          <h3 className="text-2xl mb-4">Free Delivery Available!</h3>
          <p className="text-gray-700 mb-2">Order online through Zomato</p>
          <p className="text-gray-600">Call us: 08232 460 758 | 093 800 51400</p>
        </div>
        </div>

        
    </section>
  );
}
