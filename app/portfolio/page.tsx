import Projects from "@/components/layout/projects";
import { ReadData } from "@/lib/helper";

export default async function PortfolioPage() {
    const projects = await ReadData('projects.json')
    return (
        <>
            <Projects showAll={true} projects={projects} />
        </>
    )
}