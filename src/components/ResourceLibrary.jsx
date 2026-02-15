import { useState } from 'react';
import { Link } from 'react-router-dom';
import { documents, categories } from '../resources/documents';
import ResourceCard from './ResourceCard';
import ResourcePreview from './ResourcePreview';

function ResourceLibrary() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewDoc, setPreviewDoc] = useState(null);

  const filteredDocs =
    activeCategory === 'All'
      ? documents
      : documents.filter((doc) => doc.category === activeCategory);

  // Group by category for display
  const grouped = {};
  for (const doc of filteredDocs) {
    if (!grouped[doc.category]) grouped[doc.category] = [];
    grouped[doc.category].push(doc);
  }

  const allCategories = ['All', ...categories];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-blue-600 transition-colors">
          All Steps
        </Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Resource Library</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Resource Library
        </h2>
        <p className="text-gray-600">
          {documents.length} documents — worksheets, templates, readings, and examples
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allCategories.map((cat) => {
          const count =
            cat === 'All'
              ? documents.length
              : documents.filter((d) => d.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Documents grouped by category */}
      {Object.entries(grouped).map(([category, docs]) => (
        <section key={category} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-lg font-bold text-gray-800">{category}</h3>
            <span className="bg-gray-100 text-gray-600 text-sm font-medium px-2.5 py-0.5 rounded-full">
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
        </section>
      ))}

      {filteredDocs.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No documents found in this category.
        </div>
      )}

      {/* Footer */}
      <div className="text-center mt-8 mb-4">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
        >
          <span className="mr-2">←</span>
          Back to All Steps
        </Link>
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

export default ResourceLibrary;
