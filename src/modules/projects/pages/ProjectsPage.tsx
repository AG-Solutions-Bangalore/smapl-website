import { useState } from "react";
import ProjectsHero from "../components/ProjectsHero";
import ProjectsFilter from "../components/ProjectsFilter";
import ProjectCard from "../components/ProjectCard";
import ProjectGalleryModal from "../components/ProjectGalleryModal";
import ClientsSection from "@/components/common/ClientsSection";
import { projects, type Project } from "../data/projectsData";
import SEO from "@/components/common/SEO";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Our Infrastructure Projects | Sulit Metals & Alloys Pvt Ltd"
        description="Explore SMAPL's completed steel bridge projects: Open Web Girders for South Western Railway, Bow String Bridges for NHAI, and more across India."
        keywords="Steel Bridge Projects, Railway ROB Projects, NHAI Bridges, Structural Steel Projects, Indian Railways Infrastructure"
      />
      {/* Hero Banner */}
      <ProjectsHero />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Categories Filter */}
          <ProjectsFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Projects Alternating List */}
          {filteredProjects.length > 0 ? (
            <div className="space-y-24 md:space-y-36 bg-white p-8 md:p-16 rounded-3xl shadow-xs border border-slate-100/50">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpenGallery={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <p className="text-slate-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Clients Section */}
      <ClientsSection />

      {/* Lightbox Gallery Modal */}
      {selectedProject && (
        <ProjectGalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
