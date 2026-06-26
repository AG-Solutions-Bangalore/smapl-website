import { categories } from "../data/projectsData";

interface ProjectsFilterProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProjectsFilter({
  activeCategory,
  onSelectCategory,
}: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide border transition-all duration-300 ${
              isActive
                ? "bg-accent border-accent text-white shadow-md scale-105"
                : "bg-white border-slate-200 text-navy hover:border-accent hover:text-accent"
            }`}
          >
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
