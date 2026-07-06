import { ArrowDown } from "lucide-react"
import Profile from '../assets/grad-pic.jpg'

export const HeroSection = () => {
    return (
        <>
            <section 
                id="hero"
                className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
                <div className="container max-w-7xl mx-auto text-center z-10">
                    <div className="flex flex-col-reverse mt-16 md:mt-0 md:grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                                <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                                <span className="text-primary opacity-0 animate-fade-in-delay-1">Denielle Jeanmichael </span>
                                <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Dahina</span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">I build modern, responsive, and scalable web experiences that blend clean design 
                            with high-performance code. With over 5 years of front-end development experience, 
                            I enjoy turning ideas into intuitive digital products.</p>

                            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                                <a 
                                    href="#projects"
                                    className="cosmic-button"
                                >
                                    View My Work
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6 place-items-center opacity-0 animate-fade-in-delay-5">
                            <div className="h-90 w-90 lg:h-100 lg:w-100 overflow-hidden rounded-full border-4 border-primary shadow-lg">
                                <img src={Profile} alt="Profile" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="invisible md:visible absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </section>
        </>
    )
}