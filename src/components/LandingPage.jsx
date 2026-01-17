// src/components/LandingPage.jsx
import { useNavigate } from 'react-router-dom';
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

      {/* Footer info */}
      <div className="text-center mt-12 text-sm text-gray-500">
        <p>Steps with a <span className="inline-block w-2 h-2 bg-green-400 rounded-full mx-1"></span> have full content available</p>
      </div>
    </div>
  );
}

export default LandingPage;
