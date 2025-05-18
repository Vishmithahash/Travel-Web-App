
import React, { useState } from 'react'
import { CheckIcon, XIcon } from 'lucide-react'
const questions = [
  {
    id: 1,
    question: "What's your ideal vacation type?",
    options: [
      'Beach Paradise',
      'Cultural Experience',
      'Adventure Trip',
      'City Exploration',
    ],
  },
  {
    id: 2,
    question: "What's your preferred travel duration?",
    options: [
      'Weekend Getaway (2-3 days)',
      'Short Trip (4-6 days)',
      'Standard Vacation (7-14 days)',
      'Extended Journey (14+ days)',
    ],
  },
  {
    id: 3,
    question: "What's your budget range per person?",
    options: [
      'Budget ($500-$1000)',
      'Moderate ($1000-$2000)',
      'Luxury ($2000-$5000)',
      'Ultra-Luxury ($5000+)',
    ],
  },
]
const TravelQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const handleAnswer = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answer,
    })
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }
  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }
  if (showResults) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Your Perfect Trip Awaits!
        </h3>
        <div className="space-y-4">
          {Object.entries(answers).map(([question, answer]) => (
            <div key={question} className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">
                  {questions[question].question}
                </p>
                <p className="text-gray-600">{answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button
            onClick={resetQuiz}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Start Over
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Find Your Perfect Trip
          </h3>
          <span className="text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <div className="mb-8">
        <h4 className="text-xl font-medium text-gray-900 mb-4">
          {questions[currentQuestion].question}
        </h4>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-blue-600 transition duration-300"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default TravelQuiz
