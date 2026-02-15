function FileTypeIcon({ type, className = 'w-8 h-8' }) {
  if (type === 'pdf') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z" fill="#EF4444" />
        <path d="M14 2v6h6" fill="#FCA5A5" />
        <text x="12" y="17" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">PDF</text>
      </svg>
    );
  }

  if (type === 'docx' || type === 'doc') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z" fill="#3B82F6" />
        <path d="M14 2v6h6" fill="#93C5FD" />
        <text x="12" y="17" textAnchor="middle" fill="white" fontSize="4.5" fontWeight="bold">DOC</text>
      </svg>
    );
  }

  if (type === 'image') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6H6z" fill="#10B981" />
        <path d="M14 2v6h6" fill="#6EE7B7" />
        <text x="12" y="17" textAnchor="middle" fill="white" fontSize="4" fontWeight="bold">IMG</text>
      </svg>
    );
  }

  return null;
}

export default FileTypeIcon;
