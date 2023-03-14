import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Why Do People Need a Resume Review?",
      answer:
        "ProResumes offers custom written tailored resumes, CVs, cover letters and other career advancement related products for clients all around the world. We pride ourselves on helping others fulfill their career dreams and make the job search process flawless.",
    },
    {
      question: "What Does the Professional Resume Review Process Include?",
      answer:
        "React allows you to create reusable UI components and provides a simpler programming model for building complex UIs.",
    },
    {
      question: "What Do We Review in Your Review?",
      answer:
        "React allows you to create reusable UI components and provides a simpler programming model for building complex UIs.",
    },
    {
      question: "Why We Do It?",
      answer:
        "React allows you to create reusable UI components and provides a simpler programming model for building complex UIs.",
    },
    {
      question: "Why Us?",
      answer:
        "React allows you to create reusable UI components and provides a simpler programming model for building complex UIs.",
    },
  ];
  return (
    <div class="container">
      <h2 className="faqHeading">Frequently Asked Questions</h2>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div key={index} className="faq">
            <h4 className="faq-question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              {activeIndex === index ? (
                <FontAwesomeIcon icon={faMinus} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </h4>
            <p className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
              {faq.answer}
            </p>{" "}
          </div>
        ))}
      </div>
      {/* <div class="accordion">
        <div class="accordion-item">
          <button
            id="accordion-button-1"
            aria-expanded="false"
            onClick={handleToggle}
          >
            <span class="accordion-title">
              Why is the moon sometimes out during the day?
            </span>
            <span class="icon" aria-hidden="true"></span>
          </button>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
              suspendisse potenti.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button id="accordion-button-2" aria-expanded="false">
            <span class="accordion-title">Why is the sky blue?</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
              suspendisse potenti.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button id="accordion-button-3" aria-expanded="false">
            <span class="accordion-title">Will we ever discover aliens?</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
              suspendisse potenti.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button id="accordion-button-4" aria-expanded="false">
            <span class="accordion-title">How much does the Earth weigh?</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
              suspendisse potenti.
            </p>
          </div>
        </div>
        <div class="accordion-item">
          <button id="accordion-button-5" aria-expanded="false">
            <span class="accordion-title">How do airplanes stay up?</span>
            <span class="icon" aria-hidden="true"></span>
          </button>
          <div class="accordion-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
              suspendisse potenti.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Faqs;
