import { ThemeToggle } from "../components/themeToggle"
import { StarBackground } from "../components/starBackground"
import { NavBar } from "../components/navBar"
import { HeroSection } from "../components/heroSection"
import { AboutSection } from "../components/aboutSection"
import { SkillsSection } from "../components/skillsSection"
import { ProjectsSection } from "../components/projectsSection"
import { ContactSection } from "../components/contactSection"
import { ToastContainer } from "react-toastify";
import { ExperienceSection } from "../components/experienceSection"
import { BackToTop } from "../components/backToTop"
import { Footer } from "../components/footer"

export const Home = () => {
  return (
   <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/** theme setup */}
      <ThemeToggle />

      {/** Background animation */}
      <StarBackground />

      {/** Navigation */}
      <NavBar />

      {/** Content */}
      <main>
        <HeroSection />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <ExperienceSection />

        <ContactSection />

        <ToastContainer />
      </main>

      {/** Back to top button */}
      <BackToTop />

      <Footer />
   </div>
  )
}