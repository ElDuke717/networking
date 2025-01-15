// src/components/templates/SectionTemplate.js
export default function SectionTemplate({ title, content, subsections }) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <div className="prose max-w-none">
          {content}
        </div>
        {subsections && subsections.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">In this section:</h2>
            <ul className="space-y-2">
              {subsections.map((subsection, index) => (
                <li key={index}>
                  <Link 
                    href={subsection.href}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {subsection.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }