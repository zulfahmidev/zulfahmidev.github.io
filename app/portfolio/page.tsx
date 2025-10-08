import Workspace from "@/components/layout/workspace";
import { ReadData } from "@/lib/helper";

export default async function PortfolioPage() {
    const projects = await ReadData('projects.json')
    return (
        <>
            <Workspace showAll={true} projects={projects} />
        </>
    )
}