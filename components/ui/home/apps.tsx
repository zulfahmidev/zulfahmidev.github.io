import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons"
import { BellIcon, Share2Icon } from "lucide-react"

// import { Calendar } from "@/components/ui/calendar"
// import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs"
// import AnimatedListDemo from "@/registry/example/animated-list-demo"
// import { BentoCard, BentoGrid } from "@/registry/magicui/bento-grid"
// import { Marquee } from "@/registry/magicui/marquee"
import { BentoCard, BentoGrid } from "../bento-grid"

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
        <></>
    //   <Marquee
    //     pauseOnHover
    //     className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
    //   >
    //     {files.map((f, idx) => (
    //       <figure
    //         key={idx}
    //         className={cn(
    //           "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
    //           "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
    //           "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
    //           "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
    //         )}
    //       >
    //         <div className="flex flex-row items-center gap-2">
    //           <div className="flex flex-col">
    //             <figcaption className="text-sm font-medium dark:text-white">
    //               {f.name}
    //             </figcaption>
    //           </div>
    //         </div>
    //         <blockquote className="mt-2 text-xs">{f.body}</blockquote>
    //       </figure>
    //     ))}
    //   </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
        <></>
    //   <AnimatedListDemo className="absolute top-4 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
        <></>
    //   <AnimatedBeamMultipleOutputDemo className="absolute top-4 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
        <></>
    //   <Calendar
    //     mode="single"
    //     selected={new Date(2022, 4, 11, 0, 0, 0)}
    //     className="absolute top-10 right-0 origin-top scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
    //   />
    ),
  },
]

export function Apps() {
  return (
    <section>
        <div className="container mx-auto px-5 lg:px-0">
            <h2 className="text-center text-xl text-primary">Applications</h2>
            <p className="text-xl text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, sed.</p>
            <div className="my-10">
                <BentoGrid>
                {features.map((feature, idx) => (
                    <BentoCard key={idx} {...feature} />
                ))}
                </BentoGrid>
            </div>
        </div>
    </section>
  )
}
