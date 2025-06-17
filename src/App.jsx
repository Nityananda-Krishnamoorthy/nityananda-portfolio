import Header from "./components/Header"
import Hero from "./components/Hero"
import CustomCursor from "./components/CustomCursor"
import Banner from "./components/Banner"
import Skill from "./components/SkillSection"
import Project from "./components/Project"
import Contact from "./components/Contect"
import Footer from "./components/Footer"


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CustomCursor />
        <Banner />
        <Skill />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
