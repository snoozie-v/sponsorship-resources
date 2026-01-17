// src/components/StepSubsection.jsx
import { useParams, Link } from 'react-router-dom';
import { stepsResources } from '../resources/steps';

function StepSubsection() {
  const { stepNumber, subsection } = useParams();
  const step = parseInt(stepNumber, 10);
  const data = stepsResources.find((s) => s.step === step);

  if (!data || !data.subsections || !data.subsections[subsection]) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-xl">Section not found.</p>
        <Link to="/" className="mt-4 inline-block text-blue-600 underline">
          Back to Steps
        </Link>
      </div>
    );
  }

  const sub = data.subsections[subsection];

  // Parse prompt to extract title and description
  const parsePrompt = (prompt) => {
    const colonIndex = prompt.indexOf(':');
    if (colonIndex > 0 && colonIndex < 30) {
      return {
        title: prompt.substring(0, colonIndex),
        description: prompt.substring(colonIndex + 1).trim()
      };
    }
    return { title: null, description: prompt };
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors">
          All Steps
        </Link>
        <span>/</span>
        <Link to={`/step/${step}`} className="hover:text-blue-600 transition-colors">
          Step {step}
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{sub.label}</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
          Step {step}: {sub.label}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
          {data.title}
        </h2>
      </div>

      {/* Description Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          About {sub.label}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {sub.description}
        </p>
      </div>

      {/* Instructions reminder */}
      {data.instructions && (
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg mb-8">
          <p className="text-amber-900 text-sm">
            <span className="font-semibold">Remember:</span> {data.instructions}
          </p>
        </div>
      )}

      {/* Prompts Section */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold text-gray-900">
            Reflection Prompts
          </h4>
          <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
            {sub.prompts.length} prompts
          </span>
        </div>

        <div className="space-y-4">
          {sub.prompts.map((prompt, index) => {
            const { title, description } = parsePrompt(prompt);
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-700 font-bold text-sm rounded-full">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    {title ? (
                      <>
                        <h5 className="font-semibold text-gray-900 mb-2">
                          {title}
                        </h5>
                        <p className="text-gray-600 leading-relaxed">
                          {description}
                        </p>
                      </>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">
                        {description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-gray-200">
        <Link
          to={`/step/${step}`}
          className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to Step {step} Overview
        </Link>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
        >
          View All Steps
        </Link>
      </div>
    </div>
  );
}

export default StepSubsection;
