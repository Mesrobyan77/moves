'use client';

export default function Loading() {
  return (
    <div className="fixed h-full w-full inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-muted opacity-20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-primary animate-spin"></div>
      </div>
      
      <h2 className="mt-6 text-4xl font-bebas tracking-widest text-primary animate-pulse">
        Hotflix
      </h2>
      <p className="mt-2 font-geist text-muted text-sm uppercase tracking-tighter">
        Loading Cinema Experience...
      </p>
    </div>
  );
}