import { Mail, Phone, MapPin } from "lucide-react"
import { LiaLinkedin } from "react-icons/lia"
import { ContactUs } from "./emailJsContactForm"


export const ContactSection = () => {
    return (
        <>
            <section id="contact" className="py-24 px-4 relative bg-secondary/30">
                <div className="container max-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Get In Touch
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-6 justify-center">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Email</h4>
                                        <a 
                                            href="mailto:dahinadenielle@gmail.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            dahinadenielle@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Phone</h4>
                                        <a 
                                            href="tel:+639650552556"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            +63 965 055 2556
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium"> Location</h4>
                                        <a 
                                            href="https://maps.app.goo.gl/gNuaA3uj7R9evMHz9"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            Angeles City, Pampanga, Philippines
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect With Me</h4>
                                <div className="flex space-x-4">
                                    <a href="https://www.linkedin.com/in/denielle-jeanmichael-dahina-79084a203/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZIa5oWf3R8mBianW0pLwpg%3D%3D">
                                        <LiaLinkedin className="h-12 w-12 text-primary"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-card p-8 rounded-lg shadow-xs">
                            <h3 className="text-2xl font-semibold mb-6">
                                Send a Message
                            </h3>

                            <ContactUs />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}