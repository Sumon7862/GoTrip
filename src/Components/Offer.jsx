import React from "react";

export default function TripCards() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Things To Do On<br />Your Trip</h2>
              <button className="bg-white text-blue-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                Experiences
              </button>
            </div>
            <img
              src="/images/trip.png"
              alt="Trip"
              className="absolute bottom-0 right-0 w-40 pointer-events-none"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-yellow-400 text-white">
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <p className="text-sm mb-1">Enjoy Summer Deals</p>
              <h2 className="text-2xl font-semibold mb-4">Up To 70% Discount!</h2>
              <button className="bg-white text-yellow-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-yellow-50 transition">
                Learn More
              </button>
            </div>
            <img
              src="/images/luggage.png"
              alt="Discount"
              className="absolute bottom-0 right-4 w-36 pointer-events-none"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-teal-400 to-teal-600 text-white">
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Let Your Curiosity<br />Do The Booking</h2>
              <button className="bg-white text-teal-600 text-sm font-medium px-4 py-2 rounded-lg hover:bg-teal-50 transition">
                Learn More
              </button>
            </div>
            <img
              src="/images/plane.png"
              alt="Booking"
              className="absolute bottom-0 right-0 w-40 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
