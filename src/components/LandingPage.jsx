// src/components/LandingPage.jsx
import { useNavigate, Link } from 'react-router-dom';
import { stepsResources } from '../resources/steps';

// Short descriptions for each step
const stepDescriptions = [
  "Powerlessness & Unmanageability",
  "Hope & Belief",
  "Decision & Surrender",
  "Moral Inventory",
  "Admission of Wrongs",
  "Readiness for Change",
  "Humbly Ask",
  "List of Amends",
  "Making Amends",
  "Daily Inventory",
  "Prayer & Meditation",
  "Spiritual Awakening"
];

function LandingPage() {
  const navigate = useNavigate();

  const handleStepSelect = (step) => {
    navigate(`/step/${step}`);
  };

  // Check if a step has content
  const hasContent = (stepNum) => {
    const step = stepsResources.find(s => s.step === stepNum);
    return step && step.subsections && Object.keys(step.subsections).length > 0;
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          12 Step Recovery Resources
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A guide for working through the steps with your sponsor. Select a step below to access reflection prompts and guidance.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => {
          const isAvailable = hasContent(step);
          return (
            <button
              key={step}
              onClick={() => handleStepSelect(step)}
              className={`group relative text-left p-5 rounded-xl border-2 transition-all duration-200 transform hover:-translate-y-1 ${
                isAvailable
                  ? 'bg-white border-blue-200 hover:border-blue-500 hover:shadow-lg'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {/* Step Number Badge */}
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg mb-3 ${
                isAvailable
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-500'
              }`}>
                {step}
              </div>

              {/* Step Title */}
              <h3 className={`font-semibold text-lg mb-1 ${
                isAvailable
                  ? 'text-gray-900 group-hover:text-blue-700'
                  : 'text-gray-700'
              }`}>
                Step {step}
              </h3>

              {/* Step Description */}
              <p className="text-sm text-gray-500">
                {stepDescriptions[step - 1]}
              </p>

              {/* Arrow indicator */}
              <span className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:translate-x-1 ${
                isAvailable ? 'text-blue-400' : 'text-gray-300'
              }`}>
                →
              </span>

              {/* Status indicator */}
              {isAvailable && (
                <span className="absolute top-3 right-3 w-2 h-2 bg-green-400 rounded-full"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Resource Library & Sponsor Toolkit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-3xl mx-auto">
        <Link
          to="/resources"
          className="group bg-white border-2 border-indigo-200 rounded-xl p-5 hover:border-indigo-500 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-indigo-700 mb-1">
            Resource Library
          </h3>
          <p className="text-sm text-gray-500">
            Worksheets, templates, readings, and examples for step work
          </p>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-400 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>

        <Link
          to="/resources"
          onClick={() => {}}
          className="group bg-white border-2 border-emerald-200 rounded-xl p-5 hover:border-emerald-500 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
        >
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 mb-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-emerald-700 mb-1">
            Sponsor Toolkit
          </h3>
          <p className="text-sm text-gray-500">
            Guides and materials for sponsoring others in recovery
          </p>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-400 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Footer info */}
      <div className="text-center mt-12 text-sm text-gray-500">
        <p>Steps with a <span className="inline-block w-2 h-2 bg-green-400 rounded-full mx-1"></span> have full content available</p>
      </div>
    </div>
  );
}

export default LandingPage;
