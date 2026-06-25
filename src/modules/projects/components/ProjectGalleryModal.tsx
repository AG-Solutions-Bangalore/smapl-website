import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "../data/projectsData";

interface ProjectGalleryModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectGalleryModal({
  project,
  onClose,
}: ProjectGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Lock scroll on background
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between text-white py-2 px-4 relative z-10">
        <div>
          <span className="text-accent font-bold text-xs uppercase tracking-wider block">
            {project.category}
          </span>
          <h2 className="text-lg md:text-xl font-bold">{project.name}</h2>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Viewer */}
      <div className="flex-1 flex items-center justify-between relative max-w-6xl mx-auto w-full px-4 md:px-12 my-4">
        {/* Prev Arrow */}
        {project.images.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 p-3 bg-white/5 hover:bg-white/10 hover:scale-105 border border-white/10 text-white rounded-full transition-all cursor-pointer z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Image Display */}
        <div className="w-full h-full flex items-center justify-center select-none overflow-hidden relative">
          <img
            src={project.images[currentIndex]}
            alt={`${project.name} - View ${currentIndex + 1}`}
            className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-lg shadow-2xl animate-fade-in"
          />
        </div>

        {/* Next Arrow */}
        {project.images.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 p-3 bg-white/5 hover:bg-white/10 hover:scale-105 border border-white/10 text-white rounded-full transition-all cursor-pointer z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Footer / Thumbnail strip */}
      <div className="w-full max-w-5xl mx-auto pb-4 relative z-10">
        {project.images.length > 1 && (
          <div className="flex justify-center gap-2 overflow-x-auto py-2 px-4 scrollbar-thin scrollbar-thumb-white/20">
            {project.images.map((image, index) => {
              const isSelected = index === currentIndex;
              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-16 h-12 md:w-20 md:h-14 rounded overflow-hidden shrink-0 border-2 transition-all duration-300 ${
                    isSelected ? "border-accent scale-105 shadow-md" : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
        <div className="text-center text-gray-500 text-xs mt-2">
          IMAGE {currentIndex + 1} OF {project.images.length}
        </div>
      </div>
    </div>
  );
}
