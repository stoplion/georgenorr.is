import { Education } from "./Education";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import education from "../data/education.yaml";

export const Resume = () => {
  return (
    <main className="bg-white container max-w-screen-md px-6 pt-6 mx-auto leading-relaxed text-gray-800">
      <div>
        <Header />
        <Experience />
        <Education sectionHeader="Education" education={education} />
        <Skills />
        <Footer />
      </div>
    </main>
  );
};
