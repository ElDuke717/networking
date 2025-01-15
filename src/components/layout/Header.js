// src/components/layout/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Networking Education</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/search" className="text-gray-600 hover:text-gray-900">
              Search
            </Link>
            <Link href="/topics" className="text-gray-600 hover:text-gray-900">
              All Topics
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}