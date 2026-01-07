// src/components/StepResources.jsx
import { useParams, Link } from "react-router-dom";
import { stepsResources } from "../resources/steps";

function StepResources() {
  const { stepNumber } = useParams();
  const step = parseInt(stepNumber, 10);
  const data = stepsResources.find((s) => s.step === step);

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-xl">Step not found.</p>
        <Link to="/" className="mt-4 inline-block text-blue-600 underline">
          Back to Step Selection
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-center">{data.title}</h2>

      {data.description && (
        <section>
          <h3 className="text-xl font-semibold mb-4">Description</h3>
          {Array.isArray(data.description) ? (
            <div className="space-y-4">
              {data.description.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-lg leading-relaxed">{data.description}</p>
          )}
        </section>
      )}

      {data.instructions && (
        <section>
          <h3 className="text-xl font-semibold mb-3">Writing Instructions</h3>
          <p className="text-lg italic bg-gray-50 p-4 rounded-lg">
            {data.instructions}
          </p>
        </section>
      )}

      {data.prompts && data.prompts.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-4">
            Prompts ({data.prompts.length})
          </h3>
          <ol className="list-decimal pl-8 space-y-4">
            {data.prompts.map((prompt, index) => (
              <li key={index} className="text-lg leading-relaxed">
                {prompt}
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Easy to add more sections later, e.g.:
      {data.quotes && ...}
      {data.bigBookPages && ...}
      */}

      <div className="text-center pt-8">
        <Link to="/" className="text-blue-600 underline text-lg">
          ← Back to Step Selection
        </Link>
      </div>
    </div>
  );
}

export default StepResources;
