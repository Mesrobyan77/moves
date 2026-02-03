"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="mt-16 flex justify-center pb-10 transition-colors duration-300">
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          // Replaced bg-[#1a191f] with bg-card, border-white/5 with border-border, and text-gray-500 with text-muted
          className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary disabled:opacity-20 transition-colors"
        >
          «
        </button>

        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg font-bold transition-all ${
              // Replaced #f9ab00 with primary and background/border colors with theme variables
              currentPage === page 
                ? "bg-primary text-black" 
                : "bg-card border border-border text-muted hover:text-primary"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          // Replaced background and text colors with theme variables
          className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted hover:text-primary disabled:opacity-20 transition-colors"
        >
          »
        </button>
      </div>
    </div>
  );
}