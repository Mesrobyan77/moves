"use client";

interface MovieErrorProps {
  message: string;
  onRetry: () => void;
}

export default function MovieError({ message, onRetry }: MovieErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-background text-center px-4 relative overflow-hidden transition-colors duration-500">
      {/* Cinematic Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-[20vw] font-bebas text-foreground opacity-[0.03] select-none leading-none">
          ERROR
        </h2>
      </div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Visual Icon/Indicator */}
        <div className="w-20 h-20 mb-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
          <span className="text-primary text-4xl font-bebas">!</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bebas tracking-wider text-foreground mb-4">
          Signal Lost
        </h3>
        
        <p className="text-muted mb-10 max-w-sm mx-auto text-sm leading-relaxed">
          {message || "The cinematic stream was interrupted. This usually happens when the API threshold is reached or your connection dropped."}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRetry}
            className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-primary text-black font-bebas text-lg tracking-widest hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/20"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-transparent border border-border text-foreground font-bebas text-lg tracking-widest hover:bg-card transition-all duration-300"
          >
            Back Home
          </button>
        </div>
      </div>
    </div>
  );
}