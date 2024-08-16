// components/FaqComponent.js
"use client";

const Faq = () => {
  const faqs = [
    {
      question: 'Do you offer personal training services?',
      answer: {
        one: 'Yes, we offer personal training session with certified personal trainers who can help your fitness goal, but it all depends on your membership plan',
        two: '',
        three: '',
        four: '',
      },
    },
    {
      question: 'What are your operating hours?',
      answer: {
        one: 'Our gym is open 24/7 to accommodate all schedules. Whether you like to hit the gym at dawn or dusk, you can work out at a time that suits you best. Our staffs are available for assistance from 6am to 10pm',
        two: '',
        three: '',
        four: '',
      },
    },
    {
      question: 'What type of membership do you offer?',
      answer: {
        one: 'We offer a variety of membership options, including one-time, monthly and annual memberships.',
        two: '',
        three: '',
        four: '',
      },
    },
    {
      question: 'How to make Payment?',
      answer: {
        one: '→ Click on the "make payment" on the membership page',
        two: '→ Select your prefeered exchange for payment',
        three: '→ Copy the wallet addreess and make the payment on your crypto currency wallat or 100pay app.',
        four: '→ After making payment come back to the website and wait for the payment to be completely processed.',
      },
    },
  ];

  return (
    <div id="faq" className="faq-container max-w-7xl max-auto lg:justify-center h-fit lg:h-screen pt-16 border-t-2">
      <h1 className="text-4xl font-bold text-gray-900 text-center">FAQ</h1>
      <div className="flex flex-col lg:flex-row flex-1 gap-5 justify-center items-center pt-8 ">
        <div className="flex justify-center items-center image-container lg:w-2/4 w-full p-2 ">
          <img src="./gym100backg1.png" alt="FAQ Image" className="lg:w-2/4 h-[450px] lg:h-auto w-full object-cover rounded-md" />
        </div>
        <div className="faq-content w-full lg:w-2/4 p-4">
          <h2 className="text-2xl font-bold mb-4 ">Frequently Asked Questions</h2>
          <ul className="faq-list lg:w-3/4">
            {faqs.map((faq, index) => (
              <li key={index} className="mb-4">
                <input type="checkbox" id={`faq-${index}`} className="hidden peer" />
                <label
                  htmlFor={`faq-${index}`}
                  className="faq-question flex justify-between  lg:block w-full text-left py-2 text-lg font-medium text-gray-700 cursor-pointer  border-b-2"
                >
                  {faq.question}
                  <span className="ml-2">↲</span>
                </label>
                <div
                  className="faq-answer max-h-0 overflow-hidden transition-all duration-300 ease-in-out peer-checked:max-h-40 pl-4 text-gray-600"
                >
                  {faq.answer?.one}{faq.answer?.two}{faq.answer?.three}{faq.answer?.four}
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
