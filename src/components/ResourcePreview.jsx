import { useEffect } from 'react';

function ResourcePreview({ document: doc, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    const orig = window.document.body.style.overflow;
    window.document.body.style.overflow = 'hidden';
    return () => {
      window.document.body.style.overflow = orig;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 flex-shrink-0">
          <h3 className="font-semibold text-gray-900 truncate mr-4">{doc.title}</h3>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={doc.path}
              download
              className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        {doc.type === 'pdf' && (
          <div className="flex-1 min-h-0">
            <object
              data={doc.path}
              type="application/pdf"
              className="w-full min-h-[75vh]"
              style={{ height: '75vh' }}
            >
              <embed
                src={doc.path}
                type="application/pdf"
                className="w-full min-h-[75vh]"
                style={{ height: '75vh' }}
              />
            </object>
          </div>
        )}
        {doc.type === 'image' && (
          <div className="overflow-auto p-4">
            <img
              src={doc.path}
              alt={doc.title}
              className="mx-auto max-h-[80vh] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourcePreview;
