import Link from 'next/link';
import { sections } from '../config/sections';

export default function Home() {
  const sectionsArray = Object.entries(sections).map(([key, section]) => ({
    ...section,
    description: section.subsections[0]?.content?.overview || 'Explore this networking topic',
    href: `/sections/${section.id}`,
    subsections: section.subsections.map(subsection => ({
      title: subsection.title,
      href: `/sections/${section.id}/${subsection.id}`
    }))
  }));

  return (
    <div className="fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="mb-4">Welcome to Networking Education</h1>
          <p className="text-xl">
            Learn networking and security concepts through interactive lessons
          </p>
        </div>

        {/* Main Sections Grid */}
        <div className="section-grid">
          {sectionsArray.map((section) => (
            <div key={section.id} className="section-card">
              <Link 
                href={section.href}
                className="block group"
              >
                <h2 className="group-hover:text-blue-600 transition-colors duration-200">
                  {section.title}
                </h2>
                <p className="mt-2">
                  {section.description}
                </p>
              </Link>
              <div className="mt-4 space-y-2">
                {section.subsections.slice(0, 3).map((subsection, index) => (
                  <Link 
                    key={index}
                    href={subsection.href}
                    className="section-link"
                  >
                    → {subsection.title}
                  </Link>
                ))}
                {section.subsections.length > 3 && (
                  <p className="text-sm text-gray-500 mt-2">
                    +{section.subsections.length - 3} more subsections
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
