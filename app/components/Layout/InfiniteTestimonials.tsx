import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "This is an amazing service! Highly recommend it.",
    name: "John Doe",
    role: "Software Engineer",
  },
  {
    id: 2,
    text: "Fantastic experience, will definitely use it again.",
    name: "Jane Smith",
    role: "Product Manager",
  },
  {
    id: 3,
    text: "Great support and excellent results!",
    name: "Alice Brown",
    role: "UX Designer",
  },
  {
    id: 4,
    text: "Exceeded my expectations in every way.",
    name: "Bob Johnson",
    role: "Freelancer",
  },
];

const InfiniteTestimonials = () => {
  const animationSettings = {
    animate: {
      x: [0, -1000], // Adjust the value depending on the width of the cards
    },
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 60, // Adjust speed of animation
        ease: "linear",
      },
    },
  };

  return (
    <div className="relative w-full py-1 overflow-hidden bg-transparent">
      <div className="w-full flex items-center">
        <motion.div
          className="flex space-x-8"
          {...animationSettings}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="min-w-[300px] bg-white dark:bg-black border-neutral-100 dark:border-white/[0.2] shadow-md rounded-2xl p-6 text-gray-800 dark:text-gray-200"
            >
              <p className="text-sm italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
          {testimonials.map((testimonial) => (
            <div
              key={`${testimonial.id}-clone`}
              className="min-w-[300px] bg-white dark:bg-black border-neutral-100 dark:border-white/[0.2] shadow-md rounded-2xl p-6 text-gray-800 dark:text-gray-200"
            >
              <p className="text-sm italic">"{testimonial.text}"</p>
              <div className="mt-4">
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteTestimonials;
