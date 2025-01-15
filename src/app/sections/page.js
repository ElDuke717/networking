// src/app/sections/page.js
import { sections } from '@/config/sections';
import Link from 'next/link';

export default function SectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">All Sections</h1>
      
      <div className="space-y-8">
        {Object.values(sections).map((section) => (
          <div key={section.id} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {section.subsections.map((subsection) => (
                <Link
                  key={subsection.id}
                  href={`/sections/${section.id}/${subsection.id}`}
                  className="p-4 border rounded-lg hover:bg-gray-50"
                >
                  <h3 className="font-medium text-lg mb-2">{subsection.title}</h3>
                  <p className="text-gray-600">{subsection.content.overview}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}