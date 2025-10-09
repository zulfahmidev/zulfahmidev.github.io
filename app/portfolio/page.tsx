import Projects from "@/components/layout/projects";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ReadData } from "@/lib/helper";

export default async function PortfolioPage() {
    const projects = await ReadData('projects.json')
    return (
        <section className="py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="">
                        <h2 className="text-primary text-xl">Portfolio</h2>
                        <h2 className="text-5xl font-bold my-2">
                            <AnimatedShinyText>Selected Projects</AnimatedShinyText>
                        </h2>
                        <p className="opacity-50">{`Here's a curated selection showcasing my expertise and the achieved results.`}</p>
                    </div>
                </div>
                <Projects projects={projects} />
            </div>
        </section>
    )
}