// src/components/LandingPage.jsx
import { useNavigate } from 'react-router-dom';  // ← This import MUST be here

function LandingPage() {
  const navigate = useNavigate();

  const handleStepSelect = (step) => {
    navigate(`/step/${step}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <p className="text-lg mb-6 text-center">
        Select a step to view resources
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
          <button
            key={step}
            onClick={() => handleStepSelect(step)}
            className="bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Step {step}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LandingPage;
