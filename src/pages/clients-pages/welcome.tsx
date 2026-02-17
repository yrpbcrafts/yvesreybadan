import { About } from "./about";
import { Blog } from "./blog";
import { Contact } from "./contact";
import { Experience } from "./experiences";
import { Hero } from "./hero";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { Testimonials } from "./testimonials";

export const Welcome = () => {


  return (
    <>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Blog/>
        <Testimonials/>
        <Contact/>
    </>
  );
};
