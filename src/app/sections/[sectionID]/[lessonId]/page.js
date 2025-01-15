// src/app/sections/[sectionId]/[lessonId]/page.js
import { sections } from '@/config/sections';
import LessonTemplate from '@/components/templates/LessonTemplate';

export default function LessonPage({ params }) {
  const section = sections[params.sectionId];
  const lesson = section?.subsections.find(sub => sub.id === params.lessonId);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <LessonTemplate 
      title={lesson.title}
      content={lesson.content}
    />
  );
}