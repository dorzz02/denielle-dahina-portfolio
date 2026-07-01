import { useState } from "react";
import {
    SiShopify,
    SiWordpress,
    SiHubspot,
    SiBigcommerce,
    SiTestinglibrary
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { cn } from "../lib/utils";

const skills = [
    //Frontend
    {name: "HTML", iconClass: 'devicon-html5-plain colored', category: "frontend"},
    {name: "CSS", iconClass: 'devicon-css3-plain colored', category: "frontend"},
    {name: "Javascript", iconClass: 'devicon-javascript-plain', category: "frontend"},
    {name: "Angular", iconClass: 'devicon-angularjs-plain colored', category: "frontend"},
    {name: "React", iconClass: 'devicon-react-plain colored', category: "frontend"},
    {name: "Typescript", iconClass: 'devicon-typescript-plain colored', category: "frontend"},
    {name: "Tailwind CSS", iconClass: 'devicon-tailwindcss-plain colored', category: "frontend"},
    {name: "Bootstrap", iconClass: 'devicon-bootstrap-plain colored', category: "frontend"},

    //CMS
    {name: "HubSpot", icon: SiShopify, category: "cms"},
    {name: "Wordpress", icon: SiWordpress, category: "cms"},
    {name: "Hubspot", icon: SiHubspot, category: "cms"},
    {name: "BigCommerce", icon: SiBigcommerce, category: "cms"},

    //Backend
    {name: "PHP", iconClass: 'devicon-php-plain colored', category: "backend"},
    {name: "Node.js", iconClass: 'devicon-nodejs-plain colored', category: "backend"},
    {name: "MongoDB", iconClass: 'devicon-mongodb-plain colored', category: "backend"},
    {name: "REST APIs", icon: TbApi, category: "backend"},
    {name: "Open API", iconClass: 'devicon-openapi-plain colored', category: "backend"},

    //Tools
    {name: "Git", iconClass: 'devicon-git-plain colored', category: "tools"},
    {name: "GitHub", iconClass: 'devicon-github-original', category: "tools"},
    {name: "Figma", iconClass: 'devicon-figma-plain colored', category: "tools"},
    {name: "Adobe XD", iconClass: 'devicon-xd-plain', category: "tools"},
    {name: "Adobe Photoshop", iconClass: 'devicon-photoshop-plain', category: "tools"},
    {name: "VS Code", iconClass: 'devicon-vscode-plain colored', category: "tools"},
    {name: "Cypress", iconClass: 'devicon-cypressio-plain', category: "tools"},
    {name: "Jest", iconClass: "devicon-jest-plain", category: "tools"},
    {name: "Playwright", iconClass: "devicon-playwright-plain", category: "tools"},
    {name: "Angular Testing Library", icon: SiTestinglibrary, category: "tools"}
]

const categories = ["all", "frontend", "backend", "cms", "tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory 
    )

    return (
        <>
        <section 
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
            >
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)} 
                            className={cn(
                                "px-5 py-2 rounded-full transistion-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                    {filteredSkills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                            <div key={skill.name} className="gradient-border p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-4xl">
                                {Icon ? (
                                    <Icon />
                                ) : (
                                    <i className={skill.iconClass}></i>
                                )}
                                </div>

                                <div>
                                <h4 className="font-semibold text-xl">{skill.name}</h4>
                                </div>
                            </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
        </>
    )
}