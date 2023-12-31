import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Introduction from "@/components/Introduction/Introduction";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-full h-full">
      <Introduction />
      <About />
      <Experience />
      <Projects />
    </main>
  );
}
