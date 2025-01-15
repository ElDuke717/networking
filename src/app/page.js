// src/app/page.js
import Link from 'next/link';

export default function Home() {
  const sections = [
    {
      id: 1,
      title: 'Layer Networking Model',
      description: 'Learn about the OSI model and networking layers',
      href: '/sections/layer-networking-model',
      subsections: [
        { title: 'OSI Model Introduction', href: '/sections/layer-networking-model/osi-introduction' },
        { title: 'Layer 1 - Physical', href: '/sections/layer-networking-model/physical-layer' },
        // Add more subsections...
      ]
    },
    {
      id: 2,
      title: 'Other Networking',
      description: 'Explore various networking concepts and technologies',
      href: '/sections/other-networking',
      subsections: [
        { title: 'Network Address Translation (NAT)', href: '/sections/other-networking/nat-part1' },
        { title: 'IP Address Space & Subnetting', href: '/sections/other-networking/ip-addressing' },
        // Add more subsections...
      ]
    },
    // Add more sections...
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Welcome to Networking Education
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Learn networking and security concepts through interactive lessons
          </p>
        </div>

        {/* Main Sections Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {section.title}
                </h2>
                <p className="mt-2 text-gray-600">
                  {section.description}
                </p>
                <div className="mt-4 space-y-2">
                  {section.subsections.map((subsection, index) => (
                    <Link 
                      key={index}
                      href={subsection.href}
                      className="block text-blue-600 hover:text-blue-800"
                    >
                      → {subsection.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}