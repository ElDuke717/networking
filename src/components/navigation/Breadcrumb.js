// src/components/navigation/Breadcrumb.js
import Link from 'next/link';

export default function Breadcrumb({ section, lesson }) {
  return (
    <nav className="text-sm mb-6">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/sections" className="text-blue-600 hover:text-blue-800">
            All Sections
          </Link>
          <span className="mx-2">/</span>
        </li>
        {section && (
          <li className="flex items-center">
            <Link 
              href={`/sections/${section.id}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {section.title}
            </Link>
            {lesson && <span className="mx-2">/</span>}
          </li>
        )}
        {lesson && (
          <li className="text-gray-600">
            {lesson.title}
          </li>
        )}
      </ol>
    </nav>
  );
}