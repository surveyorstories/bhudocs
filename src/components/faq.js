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
      question:
        "Does Bhukamatha have an officially developed plugin? Should I pay anything for using Bhukamatha?",
      answer:
        "No, Bhukamatha is developed by the SurveyorStories community and backed by Village surveyors; you don't need to pay anything for using it.",
    },
    {
      question: "Can I use Bhukamatha to generate LPMS?",
      answer:
        "Yes, it also supports the Stone map from version 1.0.1 beta. It's up to you whether to use it or not.",
    },
    {
      question: "How would Bhukamatha prevent the misuse of data?",
      answer:
        "Bhukamatha doesn't hold or provide any data. The complete data you processed lies on your PC. Hence, no one can make the LPMs unless they have the data.",
    },
    {
      question:
        "Is Team Bhukamatha was interested in Collaborate/ Contribution? ",
      answer:
        "We are happy to collaborate with you for building a better plugin. You can make a difference at Bhukamatha by contributing to new features, documentation, and portal updates.. you can reach us. at surveyorstories@gmail.com",
    },
    {
      question: "Does Bhukamatha offer any guarantee of work or service? ",
      answer:
        "No, we cannot give you any guarantee of work or support. We are not responsible for any loss of work; We are only helping to fix any bugs identified during the process. It's up to you to take the risk.",
    },
    // Add more questions and answers as needed
  ];

  return (
    <div className="accordion-container">
      <h1 className="faq-title">FAQ</h1>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => handleAccordionClick(index)}
            >
              <h3 className="accordion-title">{item.question}</h3>
            </div>
            <div
              className={`accordion-content ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p className="accordion-text">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
