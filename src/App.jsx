// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StepResources from './components/StepResources';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold underline mb-8 text-center">
        Sponsorship Resources
      </h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/step/:stepNumber" element={<StepResources />} />
      </Routes>
    </div>
  );
}

export default App;
