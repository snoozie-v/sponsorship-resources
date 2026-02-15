import FileTypeIcon from './FileTypeIcon';

function ResourceCard({ document, onPreview }) {
  const isPdf = document.type === 'pdf';
  const isImage = document.type === 'image';

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-md transition-all duration-200 flex flex-col">
      <div className="flex items-start gap-3 mb-3">
        <FileTypeIcon type={document.type} className="w-8 h-8 flex-shrink-0" />
        <div className="min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm leading-snug">
            {document.title}
          </h4>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
            {document.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
        {(isPdf || isImage) && (
          <button
            onClick={() => onPreview(document)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Preview
          </button>
        )}
        <a
          href={document.path}
          download
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download
        </a>
      </div>
    </div>
  );
}

export default ResourceCard;
