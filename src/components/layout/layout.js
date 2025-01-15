// src/app/layout.js
import MainLayout from '@/components/layout/MainLayout';
import './globals.css';

export const metadata = {
  title: 'Networking Education',
  description: 'Learn networking and security concepts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}