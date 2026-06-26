import { User, Image as ImageIcon, Layers, Scale } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import type { Project } from "../data/projectsData";
import ScrollReveal from "@/components/common/ScrollReveal";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenGallery: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onOpenGallery,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const photoCount = project.images.length;

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
      {/* Image Column */}
      <ScrollReveal
        onClick={() => onOpenGallery(project)}
        direction={isEven ? "left" : "right"}
        className={`relative rounded-2xl overflow-hidden shadow-md group cursor-pointer h-[320px] md:h-[380px] bg-slate-100 border border-slate-100 ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        {/* Main Cover Image */}
        <div className="w-full h-full transition-all duration-700 ease-out transform scale-100 group-hover:scale-105 group-hover:brightness-95">
          <LazyLoadImage
            src={project.images[0]}
            alt={project.name}
            effect="blur"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
        </div>

        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating Photo Count Badge */}
        {photoCount > 1 && (
          <div className="absolute bottom-4 right-4 bg-navy-dark/95 backdrop-blur-xs text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5 transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>+{photoCount - 1} PHOTOS</span>
          </div>
        )}

        {/* Hover Click Hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-white/15 backdrop-blur-md text-white text-sm font-semibold px-5 py-3 rounded-full border border-white/20 shadow-xl scale-95 group-hover:scale-100 transition-transform duration-300">
            VIEW PHOTO GALLERY
          </div>
        </div>
      </ScrollReveal>

      {/* Content Column */}
      <ScrollReveal
        direction={isEven ? "right" : "left"}
        delay={150}
        className={isEven ? "md:order-2" : "md:order-1"}
      >
        <span className="text-accent font-bold text-xs uppercase tracking-widest block mb-2">
          {project.category}
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-navy leading-tight mb-4 hover:text-accent transition-colors duration-300">
          {project.name}
        </h2>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6">
          {project.description}
        </p>

        {/* Project Meta Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 pt-4 border-t border-slate-100">
          <div className="flex items-start gap-2 text-xs md:text-sm text-slate-500 font-medium">
            <User className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
            <span className="leading-relaxed"><strong>Client:</strong> {project.client}</span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm text-slate-500 font-medium">
            <Layers className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
            <span className="leading-relaxed"><strong>Structure:</strong> {project.structure}</span>
          </div>
          <div className="flex items-start gap-2 text-xs md:text-sm text-slate-500 font-medium sm:col-span-2">
            <Scale className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
            <span className="leading-relaxed"><strong>Tonnage:</strong> {project.tonnage}</span>
          </div>
        </div>

        <button
          onClick={() => onOpenGallery(project)}
          className="inline-flex items-center gap-2 text-accent font-bold text-sm tracking-wide uppercase hover:text-navy hover:gap-3 transition-all duration-300 cursor-pointer"
        >
          <span>Explore Gallery</span>
          <span className="text-lg">→</span>
        </button>
      </ScrollReveal>
    </div>
  );
}
