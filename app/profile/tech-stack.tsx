import { FaLaravel } from "react-icons/fa";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../../components/ui/scroll-based-velocity";
import { IconType } from "react-icons";
import { SiCodeigniter, SiDocker, SiExpress, SiFastapi, SiFastify, SiFirebase, SiFlask, SiGin, SiGit, SiGo, SiGooglecloud, SiJavascript, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiNuxtdotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiRabbitmq, SiReact, SiRedis, SiSpringboot, SiVuedotjs } from "react-icons/si";

const tools: IconType[] = [
    // Languages
    SiPhp, SiJavascript, SiPython, SiGo, SiNodedotjs,
    // Frameworks
    FaLaravel, SiFlask, SiExpress, SiSpringboot, SiFastify, SiNestjs, SiGin, SiFastapi, SiNextdotjs, SiVuedotjs, SiNuxtdotjs, SiCodeigniter, SiReact,
    // Database
    SiPostgresql, SiMysql, SiFirebase, SiMongodb,
    // Tools
    SiDocker, SiGit, SiPostman, SiRedis, SiRabbitmq, SiGooglecloud,
]

export default function TechStack() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]">
                <ScrollVelocityRow baseVelocity={5} direction={1}>
                    {
                        tools.map((Icon: IconType, i) => (
                            <div key={i} className="flex gap-3 px-3">
                                <div className="bg-primary/10 rounded-xl w-16 h-16 flex items-center justify-center">
                                    <Icon className="text-3xl" />
                                </div>
                            </div>
                        ))
                    }
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={5} direction={-1}>
                    {
                        tools.reverse().map((Icon: IconType, i) => (
                            <div key={i} className="flex gap-3 px-3">
                                <div className="bg-primary/10 rounded-xl w-16 h-16 flex items-center justify-center">
                                    <Icon className="text-3xl" />
                                </div>
                            </div>
                        ))
                    }
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}