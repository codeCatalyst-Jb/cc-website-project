import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => handleClick(index)}
            className="w-full text-left p-3 m-2 rounded-xl focus:outline-none bg-gray-100 hover:bg-gray-200"
          >
            <div className="flex justify-between items-center ">
              <span>{item.title}</span>
              <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                ▼
              </span>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}
          >
            <div className="p-4 bg-white">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
