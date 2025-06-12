import Header from "./components/Header"
import Hero from "./components/Hero"
import CustomCursor from "./components/CustomCursor"
import Banner from "./components/Banner"
import Skill from "./components/SkillSection"
import Project from "./components/Project"
import Contact from "./components/Contect"

export default function App() {
  return (
    <>
     <Header />
     <main>
     <Hero />
     </main>
     <CustomCursor />
     <Banner />
     <Skill />
     <Project />
     <Contact />
    </>
  )
}
