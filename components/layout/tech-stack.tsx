import { FaLaravel } from "react-icons/fa";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../ui/scroll-based-velocity";

export default function TechStack() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]">
                <ScrollVelocityRow baseVelocity={20} direction={1}>
                    <div className="flex gap-3 px-3">
                        <div className="bg-primary/10 rounded-xl w-16 h-16 flex items-center justify-center">
                            <FaLaravel className="text-3xl" />
                        </div>
                    </div>
                </ScrollVelocityRow>
                <ScrollVelocityRow baseVelocity={20} direction={-1}>
                    <div className="flex gap-3 px-3">
                        <div className="bg-primary/10 rounded-xl w-16 h-16 flex items-center justify-center">
                            <FaLaravel className="text-3xl" />
                        </div>
                    </div>
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
    )
}