import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Suzane Bones",
    feedback:
      "We wanted Ariana’s 10th birthday to be special for her as well as her friends. Butterfly’s party accessories helped us plan the perfect party!",
    date: "07-05-20",
    image:
      "https://via.placeholder.com/400", // Replace this with the actual image link
    title: "Ariana’s birthday!",
  },
  {
    name: "John Doe",
    feedback:
      "Our startup switched to work from home due to the virus. Butterfly helped us provide laptops to our entire staff.",
    date: "06-15-20",
    image:
      "https://via.placeholder.com/400", // Replace this with the actual image link
    title: "Remote Work Setup",
  },
  {
    name: "Jane Smith",
    feedback:
      "I rented a camera from Butterfly for my camping trip on the new years. The product was of the best quality and properly sanitized. I was able to capture all the memories.",
    date: "12-29-19",
    image:
      "https://avatars.githubusercontent.com/u/111014373?s=400&u=ba39b33fa6e1dae3e5e46cb00eb9c986b03a1439&v=4", // Replace this with the actual image link
    title: "Camping Memories",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 py-10 px-4 gap-8 relative">
      {/* Left Section - Text Review */}
      <div className="relative bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2">
        <FaQuoteLeft className="text-3xl text-orange-400 absolute top-4 left-4" />
        <div className="mt-8">
          <p className="text-gray-700 mb-4">{testimonials[current].feedback}</p>
          <p className="font-semibold text-gray-900">
            {testimonials[current].name}
          </p>
        </div>
        {/* Arrow Navigation */}
        <div className="absolute flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
          <button
            onClick={prevTestimonial}
            className="text-[#00725A] hover:text-[#005a46] transition-colors"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="text-[#00725A] hover:text-[#005a46] transition-colors"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-1/2 flex items-center justify-center">
        <div>
          <img
            src={testimonials[current].image}
            alt={testimonials[current].title}
            className="rounded-lg w-full h-56 object-cover border-4 border-[#00725A]"
          />
          <p className="text-center font-medium text-[#00725A] mt-4">
            {testimonials[current].title}
          </p>
          <p className="text-center text-sm text-orange-500">
            - {testimonials[current].name}, {testimonials[current].date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
