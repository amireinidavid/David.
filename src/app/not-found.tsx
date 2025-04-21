import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#111111] px-4 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-7xl font-bold text-[#ff6b00] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Page Not Found</h2>
        <p className="text-zinc-400 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-[#ff6b00] to-[#ff9d00] text-white font-medium transition-transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
} 