import { BriefcaseBusiness } from "lucide-react"

const experienceData = [
    {
        companyLogo: "",
        companyName: "Cloudstaff",
        position: "Software Engineer",
        dateRange: "April 1st, 2025 - Present",
        description: "Develop responsive Shopify and WordPress websites, building custom themes, reusable components, and scalable solutions that enhance performance and user experience.",
    },
    {
        companyLogo: "",
        companyName: "TORO Philippines",
        position: "Front End Developer",
        dateRange: "November 22nd, 2021 - March 31st, 2025",
        description: "Built modern web applications with Angular and HubSpot CMS, transforming Figma designs into responsive interfaces while integrating REST APIs and improving application reliability.",
    },
    {
        companyLogo: "",
        companyName: "Freelance",
        position: "Web Developer",
        dateRange: "November 2020 - November 2021",
        description: "Delivered custom websites and e-commerce solutions using Shopify, WordPress, and HubSpot, converting UI/UX designs into responsive, high-quality web experiences.",
    }
]

export const ExperienceSection = () => {
    return (
        <>
            <section
                id="experience"
                className="py-24 px-4 relative bg-secondary/30"
                >
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Work <span className="text-primary">Experience</span>
                    </h2>

                    <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute top-6 left-0 w-full h-0.5 bg-primary/30"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                        {experienceData.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 z-10">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
                                <BriefcaseBusiness className="w-5 h-5 text-primary-foreground" />
                            </div>
                            </div>

                            {/* Card */}
                            <div className="gradient-border card-hover rounded-lg mt-16 p-6">
                            <time className="inline-block px-2 py-1 text-xs rounded bg-neutral-secondary-medium border border-default-medium">
                                {exp.dateRange}
                            </time>

                            <h3 className="mt-4 text-xl font-semibold flex items-center gap-2">
                                {exp.companyName}

                                {exp.dateRange.includes("Present") && (
                                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                                    Current
                                </span>
                                )}
                            </h3>

                            <p className="text-sm text-muted-foreground mt-3">
                                {exp.description}
                            </p>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </section>
        </>
    )
}