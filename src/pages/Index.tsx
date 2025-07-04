
import {Hero}  from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { BlogSection } from "@/components/blogs";
import { About } from "@/components/AboutMe";

const Index = () => {
  return (
    <div className="min-h-screen bg-deep-gradient min-h-screen w-full from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Global animated background */}
      
      {/* Content with proper z-index */}
      <div className="relative z-10">
        <Hero />
        <About/>
        <Experience />
        <Projects />
        <Skills />
        <BlogSection/>
        <Contact />
         
      </div>
    </div>
  );
};

export default Index;
