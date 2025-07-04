import React from 'react';
import { assets, dummyTestimonial } from '../../assets/asset';

const TestiMonialSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-medium text-gray-800">
        TestiMonial Section
      </h2>

      <p className="md:text-base text-gray-500  mt-3">
        Discover inspiring stories from our learners as they share their
        journeys of growth, achievement, and the <br />
        impact our platform has had on their lives
      </p>

      <div className='grid grid-cols-3 gap-8 mt-14'>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15_px_0px]  shadow-black/5 overflow-hidden '>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img className='h-12 w-12 rounded-full' src={testimonial.image} alt={testimonial.name} />

              <div>
                <h1 className='text-lg font-medium text-gray-500'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>

              
            </div>
            <div className='p-5 pb-7'>
                {/* rating */}
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="h-5"
                      src={
                        i < Math.floor(testimonial.rating)
                          ? assets.star_icon
                          : assets.star_blank
                      }
                      alt="star"
                    />
                  ))}
                </div>

                {/* feedback */}
                <p className="text-gray-500 mt-5">{testimonial.feedback}</p>
              </div>
              <a href="#" className='text-blue-600 underline px-5'>Read more</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestiMonialSection;
