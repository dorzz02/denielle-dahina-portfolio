import HomedImg from '../assets/Homemed-image.png'
import SwhackerImg from '../assets/swhacker-image.png'
import NurocoImg from '../assets/nuroco-image.png'
import NouvintageImg from '../assets/nouvintage-image.png'
import AVPartnersImg from '../assets/avpartners-image.png'
import AVPartnersWhitsundaysImg from '../assets/whitsundays-site.png'
import BeachPavilionPlannerImg from '../assets/beach-pavillion-planner-image.png'
import { ExternalLink } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "Homemed",
        description: "Developed a custom HubSpot CMS website from Adobe XD designs, building reusable components and responsive layouts that delivered a seamless experience across modern browsers and devices.",
        image: HomedImg,
        tags: ["Hubspot CMS", "Hubl", "HTML", "CSS", "Javascript", "Jquery"],
        demoUrl: "https://www.homemed.com/",
    },
    {
        id: 2,
        title: "Swhacker (FL Outdoors)",
        description: "Built and customized a Shopify storefront tailored to the brand's identity, developing responsive theme components and enhancing the shopping experience across desktop and mobile devices.",
        image: SwhackerImg,
        tags: ["Shopify", "Liquid", "HTML", "CSS", "Javascript", "SCSS", "TailwindCSS"],
        demoUrl: "https://www.swhacker.com/",
    },
    {
        id: 3,
        title: "Nuroco",
        description: "Enhanced and customized a Shopify store by implementing new features, refining layouts, and improving usability to support evolving business needs and deliver a better customer experience.",
        image: NurocoImg,
        tags: ["Shopify", "Liquid", "HTML", "CSS", "Javascript", "SCSS"],
        demoUrl: "https://www.nuroco.com/",
    },
    {
        id: 4,
        title: "Nouvintage",
        description: "Developed custom Shopify theme features and reusable storefront components that aligned with the brand's identity while improving functionality, maintainability, and user experience.",
        image: NouvintageImg,
        tags: ["Shopify", "Liquid", "HTML", "CSS", "Javascript", "SCSS"],
        demoUrl: "https://www.nouvintage.com/",
    },
    {
        id: 5,
        title: "AV Partners Corporate Website",
        description: "Led the redesign and redevelopment of the corporate website, creating reusable WordPress components, custom plugins, and dynamic content solutions that improved scalability and streamlined content management.",
        image: AVPartnersImg,
        tags: ["WordPress", "PHP", "HTML", "CSS", "Javascript"],
        demoUrl: "https://www.avpartners.com/",
    },
    {
        id: 6,
        title: "AV Partners Whitsundays",
        description: "Developed a custom Shopify website with responsive layouts, modular content sections, and interactive gallery components to showcase the company's portfolio while improving maintainability.",
        image: AVPartnersWhitsundaysImg,
        tags: ["Shopify", "Liquid", "HTML", "CSS", "SCSS"],
        demoUrl: "https://whitsundays.avpartners.com/",
    },
    {
        id: 7,
        title: "Beach Pavilion Planner",
        description: "Designed and developed an interactive event planning experience within Shopify, enabling customers to customize venue layouts and service options through dynamic front-end interactions that enhanced engagement and simplified inquiries.Designed and developed an interactive event planning experience within Shopify, enabling customers to customize venue layouts and service options through dynamic front-end interactions that enhanced engagement and simplified inquiries.",
        image: BeachPavilionPlannerImg,
        tags: ["Shopify", "Liquid", "HTML", "CSS", "Javascript", "SCSS"],
        demoUrl: "https://whitsundays.avpartners.com/pages/beach-pavilion-planner",
    },
]

export const ProjectsSection = () => {
    return (
        <>
            <section id="projects" className="py-24 px-4 relative">
                <div className="mx-auto px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Featured <span className="text-primary">Projects</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on, showcasing my skills and experience in web development. 
                        Each project highlights my ability to create responsive, user-friendly, and visually appealing applications.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, key) => (
                            <div 
                                key={key}
                                className="group bg-card rounded-lg overgflow-hidden shadow-xs card-hover"
                            >
                                <div className="h-40 xl:h-90 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-"
                                    />
                                </div>

                                <div className="p-6 text-center">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}