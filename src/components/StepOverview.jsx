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
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        {data.title}
      </h2>

      {/* Simple Instruction */}
      <p className="text-xl text-center text-gray-700 mb-12">
        Please select the area you'd like to focus on:
      </p>

      <div className="grid grid-cols-2 gap-y-2 max-w-2xl mx-auto">
        {Object.entries(data.subsections).map(([key, sub]) => (
          <Link
            key={key}
            to={`/step/${step}/${key}`}
            className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center text-3xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {sub.label}
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/" className="text-blue-600 underline text-lg">
          ← Back to Step Selection
        </Link>
      </div>
    </div>
  );
}

export default StepOverview;
