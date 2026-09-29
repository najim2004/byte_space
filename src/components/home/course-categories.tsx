"use client";

interface CourseCategoriesProps {
  categoryRows: string[][];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CourseCategories({
  categoryRows,
  selectedCategory,
  onSelectCategory,
}: CourseCategoriesProps) {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-3.5 sm:mt-12 sm:gap-4">
      {categoryRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4"
        >
          {row.map((category) => {
            const isSelected = selectedCategory === category;
            const isMore = category === "+ More";

            return (
              <button
                key={category}
                onClick={() => !isMore && onSelectCategory(category)}
                className={`font-satoshi rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 select-none ${
                  isSelected
                    ? "bg-secondary-400 text-neutral-950 shadow-xs"
                    : isMore
                      ? "text-primary-800 bg-neutral-50 font-semibold hover:bg-neutral-100"
                      : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
