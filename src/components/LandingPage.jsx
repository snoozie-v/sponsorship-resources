// src/components/LandingPage.jsx
import { useNavigate } from 'react-router-dom';
import { stepsResources } from '../resources/steps';

// Phrases rendered in italics inside a step's text, keyed by step number
const italicPhrases = {
  3: 'as we understood Him',
  11: 'as we understood Him',
};

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

  // Full text of a step, with the "Step N:" prefix removed
  const stepFullText = (stepNum) => {
    const data = stepsResources.find(s => s.step === stepNum);
    if (!data || !data.title) return '';
    return data.title.replace(/^Step\s*\d+:\s*/, '');
  };

  // Render a step's text, italicizing any phrase configured for that step
  const renderStepText = (stepNum) => {
    const text = stepFullText(stepNum);
    const phrase = italicPhrases[stepNum];
    if (!phrase || !text.includes(phrase)) return text;
    const [before, after] = text.split(phrase);
    return (
      <>
        {before}
        <em>{phrase}</em>
        {after}
      </>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2">
          Step by Step Resources
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
          For Recovery from Alcoholism
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A working companion to the Twelve Steps, drawn from the Big Book, <span className="underline">Twelve Steps and Twelve Traditions</span>, workshop handouts, and sponsorship materials.
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
              className={`group relative flex flex-col items-stretch justify-start text-left p-5 rounded-xl border-2 transition-all duration-200 transform hover:-translate-y-1 ${
                isAvailable
                  ? 'bg-white border-blue-200 hover:border-blue-500 hover:shadow-lg'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              {/* Step Label Pill */}
              <div className="flex justify-center mb-3">
                <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full font-bold text-base ${
                  isAvailable
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  Step {step}
                </span>
              </div>

              {/* Full Step Text */}
              <h3 className={`font-medium text-base leading-snug pr-6 ${
                isAvailable
                  ? 'text-gray-900 group-hover:text-blue-700'
                  : 'text-gray-700'
              }`}>
                {renderStepText(step)}
              </h3>

              {/* Arrow indicator */}
              <span className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform duration-200 group-hover:translate-x-1 ${
                isAvailable ? 'text-blue-400' : 'text-gray-300'
              }`}>
                →
              </span>
            </button>
          );
        })}
      </div>

    </div>
  );
}

export default LandingPage;
