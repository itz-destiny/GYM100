// components/FaqComponent.js
"use client";

const Faq = () => {
  const faqs = [
    {
      question: 'Do you offer personal training services?',
      answer: 'lorem ipsum',
    },
    {
      question: 'What are your operating hours?',
      answer: 'Lorem Ipsum.',
    },
    {
      question: 'What type of membership do you offer?',
      answer: 'Lorem ipsum',
    },
    {
      question: 'What amenities does your gym offer',
      answer: 'Lorem ipsum',
    },
  ];

  return (
    <div className="faq-container max-w-7xl max-auto justify-center h-screen pt-16 border-t-2">
      <h1 className="text-4xl font-bold text-gray-900 text-center">FAQ</h1>
      <div className="flex flex-1 justify-center items-center pt-8 ">
      <div className="flex justify-center items-center image-container w-2/4">
        <img src="./gym100backg1.png" alt="FAQ Image" className="w-2/4 h-auto object-cover" />
      </div>
      <div className="faq-content w-2/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <ul className="faq-list w-3/4">
          {faqs.map((faq, index) => (
            <li key={index} className="mb-4">
              <input type="checkbox" id={`faq-${index}`} className="hidden peer" />
              <label
                htmlFor={`faq-${index}`}
                className="faq-question block w-full text-left py-2 text-lg font-medium text-gray-700 cursor-pointer  border-b-2"
              >
                {faq.question}
                <span className="ml-2">↲</span>
              </label>
              <div
                className="faq-answer max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-40 pl-4 text-gray-600"
              >
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Faq;
