
import React from 'react';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is the IDeA Program?",
      answer: "The Institutional Development Award (IDeA) is a program administered by the National Institute of General Medical Sciences (NIGMS) of the National Institutes of Health (NIH). It aims to broaden the geographic distribution of NIH funding by enhancing the research capabilities of institutions in states that have historically received low levels of NIH support."
    },
    {
      question: "Who can join NAIPI?",
      answer: "NAIPI membership is open to Principal Investigators of IDeA programs including COBRE, INBRE, IDeA-CTR, and other NIH-supported research initiatives within IDeA eligible states and territories."
    },
    {
      question: "What are the benefits of NAIPI membership?",
      answer: "Members benefit from networking opportunities, advocacy for IDeA programs at the national level, access to resources and best practices, participation in annual meetings and workshops, and the opportunity to shape the future direction of the IDeA program."
    },
    {
      question: "How often does NAIPI hold conferences or meetings?",
      answer: "NAIPI organizes an annual national symposium and supports regional meetings throughout the year. Additionally, the organization facilitates virtual webinars and workshops to address specific topics of interest to the IDeA community."
    },
    {
      question: "How does NAIPI advocate for IDeA programs?",
      answer: "NAIPI works with NIH officials, members of Congress, and other stakeholders to promote the importance and impact of IDeA programs. The organization provides data, success stories, and compelling examples of how IDeA investments have enhanced research infrastructure and capacity in participating states."
    }
  ];

  return (
    <div className="symposium-container py-8">
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
