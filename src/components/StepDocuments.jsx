import { useState } from 'react';
import { getDocumentsForStep } from '../resources/documents';
import ResourceCard from './ResourceCard';
import ResourcePreview from './ResourcePreview';

function StepDocuments({ stepNumber }) {
  const [previewDoc, setPreviewDoc] = useState(null);
  const docs = getDocumentsForStep(stepNumber);

  if (docs.length === 0) return null;

  return (
    <div className="mt-10 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-xl font-bold text-gray-900">
          Resources for Step {stepNumber}
        </h3>
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">
          {docs.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {docs.map((doc) => (
          <ResourceCard
            key={doc.id}
            document={doc}
            onPreview={setPreviewDoc}
          />
        ))}
      </div>

      {previewDoc && (
        <ResourcePreview
          document={previewDoc}
          onClose={() => setPreviewDoc(null)}
        />
      )}
    </div>
  );
}

export default StepDocuments;
