// src/components/templates/LessonTemplate.js
export default function LessonTemplate({ title, content }) {
    return (
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="mb-6">{content.overview}</p>
            
            <h2 className="text-xl font-semibold mb-4">Key Points</h2>
            <ul className="list-disc pl-6 space-y-2">
              {content.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    );
  }