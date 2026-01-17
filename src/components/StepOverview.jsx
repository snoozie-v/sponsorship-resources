// src/components/StepOverview.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { stepsResources } from '../resources/steps';

function StepOverview() {
  const { stepNumber } = useParams();
  const step = parseInt(stepNumber, 10);
  const data = stepsResources.find((s) => s.step === step);
  const navigate = useNavigate();

  if (!data || !data.subsections) {
    navigate('/');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Step Header */}
      <div className="text-center mb-8">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Step {step} of 12
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
          {data.title}
        </h2>
      </div>

      {/* Instructions Card */}
      {data.instructions && (
        <div className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg mb-10">
          <h3 className="font-semibold text-amber-800 mb-2">Instructions</h3>
          <p className="text-amber-900 leading-relaxed">
            {data.instructions}
          </p>
        </div>
      )}

      {/* Section Selection */}
      <p className="text-lg text-center text-gray-600 mb-8">
        Select an area to explore:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {Object.entries(data.subsections).map(([key, sub]) => (
          <Link
            key={key}
            to={`/step/${step}/${key}`}
            className="group bg-white border-2 border-blue-200 rounded-xl p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-blue-900 group-hover:text-blue-700 mb-3">
              {sub.label}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {sub.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {sub.prompts.length} prompts
              </span>
              <span className="text-blue-500 group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to All Steps
        </Link>
      </div>
    </div>
  );
}

export default StepOverview;
