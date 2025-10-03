import Image from "next/image";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { FaLaravel } from "react-icons/fa";
import { IconType } from "react-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { SiFlask, SiGooglecloud, SiKotlin, SiMysql, SiNuxtdotjs, SiPostgresql, SiPusher, SiTensorflow, SiVuedotjs } from "react-icons/si";

const stackIcons: Record<string, {
    icon: IconType,
    color: string
}> = {
    laravel: {
        icon: FaLaravel,
        color: '#F05340'
    },
    nuxt: {
        icon: SiNuxtdotjs,
        color: '#41B883'
    },
    tailwind: {
        icon: RiTailwindCssFill,
        color: '#42C0F8'
    },
    flutter: {
        icon: FaFlutter,
        color: '#64CBF9'
    },
    mysql: {
        icon: SiMysql,
        color: '#E97D1E'
    },
    pusher: {
        icon: SiPusher,
        color: '#29d97f'
    },
    flask: {
        icon: SiFlask,
        color: '#1b7d68'
    },
    tensorflow: {
        icon: SiTensorflow,
        color: '#ffa317'
    },
    gcp: {
        icon: SiGooglecloud,
        color: '#1b7d68'
    },
    postgre: {
        icon: SiPostgresql,
        color: '#1b7d68'
    },
    vue: {
        icon: SiVuedotjs,
        color: '#1b7d68'
    },
    kotlin: {
        icon: SiKotlin,
        color: '#1b7d68'
    }
}

const projects = [
    {
        image: {
            url: `/portfolio/vocaject-mock.jpeg`,
            alt: `mock vocaject application`
        },
        title: 'Vocational Project (Vocaject)',
        position: `As a Fullstack Developer`,
        estimate: `Jun 2023 - Aug 2023`,
        stack: ['laravel', 'nuxt', 'tailwind', 'flutter', 'mysql', 'pusher', 'gcp']
    },
    {
        image: {
            url: `/portfolio/arahku-mock.jpeg`,
            alt: `mock arahku application`
        },
        title: 'Arahku',
        estimate: `Mei 2023 - Jun 2023`,
        position: `As a Backend Developer`,
        stack: ['flask', 'kotlin', 'postgre', 'tensorflow', 'gcp']
    },
    {
        image: {
            url: `/portfolio/kopi-pas-mock.jpeg`,
            alt: `mock kopi pas application`
        },
        title: 'Aplikasi Kopi Pas',
        estimate: `Oct 2022 - Dec 2022`,
        position: `As a Backend Developer`,
        stack: ['laravel', 'tailwind', 'flutter', 'vue', 'mysql']
    },
    {
        image: {
            url: `/portfolio/web-policy-mock.jpeg`,
            alt: `mock web policy`
        },
        title: 'Website Official UKM-POLICY',
        estimate: `Sep 2021 - Nov 2021`,
        position: `As a Backend Developer`,
        stack: ['laravel', 'tailwind', 'mysql']
    },
]

export default function Workspace() {
    return (
        <section className="py-16" id="portfolio">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="">
                        <h2 className="text-primary text-xl">Portfolio</h2>
                        <div className="text-5xl font-bold my-2">
                            <AnimatedShinyText>Selected Project</AnimatedShinyText>
                        </div>
                        <p className="opacity-50">Here are some of my best projects and achievements.</p>
                    </div>
                    {/* <a href="" className="my-3 py-2 px-4 w-fit border-2 border-foreground rounded-full flex items-center gap-3 font-semibold">
                        <span>See All Project</span>
                        <FaArrowRight />
                    </a> */}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-8 lg:p-5 gap-6">

                    {projects.map((v, i) => (
                        <div className="col-span-1" key={i}>
                            <div className="aspect-video bg-slate-100 w-full rounded-xl relative overflow-hidden border">
                                <Image
                                    src={v.image.url}
                                    alt={v.image.alt}
                                    className="object-cover object-center"
                                    fill />
                            </div>
                            <div className="py-3">
                                <h3 className="font-semibold text-xl">{v.title}</h3>
                                <div className="opacity-50 flex items-center gap-3 mt-1">
                                    <p>{v.position}</p>
                                    <div className="w-1 h-1 rounded-full bg-foreground"></div>
                                    <p>{v.estimate}</p>
                                </div>
                                <div className="flex gap-3 items-center mt-2">
                                    {
                                        v.stack.map((stack, i) => {
                                            if (stackIcons[stack]) {
                                                const Icon = stackIcons[stack].icon
                                                return (
                                                    <Icon key={i} className={`text-xl text-foreground/50`} />
                                                )
                                            }
                                            return null
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}