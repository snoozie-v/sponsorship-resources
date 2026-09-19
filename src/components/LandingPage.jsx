// src/components/LandingPage.jsx
import { useNavigate, Link } from 'react-router-dom';
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
    </div>
  );
}

export default LandingPage;
