import React, { useState, useEffect } from "react";



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full bg-[#002228] flex justify-center py-10">
      <div className="relative w-full max-w-[1440px] text-center p-6 overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out bg-[#002228]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
            width: `${testimonials.length * 33.5}% `,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 bg-[#002228] text-white p-6 rounded-lg shadow-lg h-auto flex flex-col justify-center items-center"
            >
              <figure className="mb-4 ">
                <img src="cr.svg" alt="Icon" />
              </figure>
              <p className="text-xl italic font-light mb-4 md:w-[920px] lg:w-[920px] mt-[35px]">
                “{testimonial.quote}”
              </p>
              <h4 className="text-teal-400 font-semibold mt-[40px]">
                {testimonial.name}
              </h4>
              <p className="text-gray-400">{testimonial.title}</p>
            </div>
          ))}
        </div>

        
       
      </div>
    </div>
  );
};

export default Carousel;
