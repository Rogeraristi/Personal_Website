import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Leadership from "@/components/Leadership";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <Music />
            <Experience />
            <Education />
            <Leadership />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}
