// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StepOverview from './components/StepOverview';
import StepSubsection from './components/StepSubsection';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/step/:stepNumber" element={<StepOverview />} />
        <Route path="/step/:stepNumber/:subsection" element={<StepSubsection />} />
      </Routes>
    </div>
  );
}

export default App;
