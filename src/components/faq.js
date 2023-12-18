import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the accordion if it's already open
    } else {
      setActiveIndex(index); // Open the clicked accordion item
    }
  };

  const accordionData = [
    {
      question: "Question 1",
      answer: "Answer 1 goes here...",
    },
    {
      question: "Question 2",
      answer: "Answer 2 goes here...",
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-header"
            onClick={() => handleAccordionClick(index)}
          >
            <h3 className="accordion-title">{item.question}</h3>
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
