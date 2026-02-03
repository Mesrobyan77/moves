'use client';
export default function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="aspect-2/3 w-full rounded-lg bg-border"></div>
      <div className="mt-3 h-4 w-3/4 rounded bg-border"></div>
    </div>
  );
}
