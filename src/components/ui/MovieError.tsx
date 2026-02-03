"use client";

interface MovieErrorProps {
  message: string;
  onRetry: () => void;
}

export default function MovieError({ message, onRetry }: MovieErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#2b2b31] text-center px-4">
      <div className="mb-6">
        <h2 className="text-9xl font-bold text-white opacity-10 select-none">ERROR</h2>
      </div>
      
      <div className="relative -mt-20">
        <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
          Oops! Something went wrong.
        </h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          {message || "The page you are looking for might be unavailable or the API limit has been reached."}
        </p>
        
        <button
          onClick={onRetry}
          className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-transparent border-2 border-[#f9ab00] text-[#f9ab00] text-xs font-bold uppercase tracking-widest hover:bg-[#f9ab00] hover:text-black transition-all duration-300 shadow-lg shadow-[#f9ab00]/10"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}