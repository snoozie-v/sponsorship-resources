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

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-center">{data.title}</h2>
      <h3 className="text-3xl font-extrabold text-center text-blue-900">
        {sub.label}
      </h3>

      <section>
        <p className="text-lg leading-relaxed bg-gray-50 p-6 rounded-lg">
          {sub.description}
        </p>
      </section>

      <section>
        <h4 className="text-xl font-semibold mb-6">
          Prompts ({sub.prompts.length})
        </h4>
        <ol className="list-decimal pl-8 space-y-5">
          {sub.prompts.map((prompt, index) => (
            <li key={index} className="text-lg leading-relaxed">
              {prompt}
            </li>
          ))}
        </ol>
      </section>

      <div className="text-center space-x-6">
        <Link
          to={`/step/${step}`}
          className="text-blue-600 underline text-lg"
        >
          ← Back to Step 1 Overview
        </Link>
        <br/>
        <Link to="/" className="text-blue-600 underline text-lg">
          ← Back to All Steps
        </Link>
      </div>
    </div>
  );
}

export default StepSubsection;
