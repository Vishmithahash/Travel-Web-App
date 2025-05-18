import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
const faqs = [
  {
    question: 'How do I book a trip?',
    answer:
      "You can book a trip by browsing our destinations, selecting your preferred package or accommodation, and clicking the 'Book Now' button. Follow the steps to choose your dates, provide necessary information, and complete the payment process.",
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment gateway.',
  },
  {
    question: 'Can I modify or cancel my booking?',
    answer:
      'Yes, you can modify or cancel your booking through your account dashboard. Please note that cancellation policies vary depending on the type of booking and how far in advance you cancel.',
  },
  {
    question: 'Are flights included in the package prices?',
    answer:
      'Unless specifically stated, flights are not included in our package prices. However, we can help you arrange flights at an additional cost. Please contact our customer service for assistance.',
  },
  {
    question: 'Do I need travel insurance?',
    answer:
      'While travel insurance is not mandatory, we strongly recommend it to protect your trip against unforeseen circumstances. We can help you arrange appropriate travel insurance coverage.',
  },
  {
    question: "What's included in your travel packages?",
    answer:
      "Our travel packages typically include accommodation, selected meals, guided tours, and ground transportation as specified in the package details. Please check the 'What's Included' section of each package for specific information.",
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can reach our customer support team 24/7 through our help center, by email at support@travelease.com, or by phone at +1 (555) 123-4567.',
  },
  {
    question: 'Are your prices per person or per room?',
    answer:
      'Accommodation prices are typically per room per night, while package prices are usually per person based on double occupancy. Please check the specific pricing details for each offering.',
  },
]
const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white text-center">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-lg text-blue-100 text-center max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default FaqPage
