"use client";

export default function SkeletonCard() {
  return (
    <div className="flex flex-col animate-pulse">
      <div className="relative aspect-[2/3] w-full rounded-xl bg-muted/20 overflow-hidden">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-foreground/5 to-transparent"></div>
      </div>

      <div className="mt-3 space-y-2">
        <div className="h-4 w-4/5 rounded-md bg-muted/20"></div>

        <div className="h-4 w-2/5 rounded-md bg-muted/10"></div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
