import Image from "next/image";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { FaArrowRight, FaLaravel } from "react-icons/fa";
import { IconType } from "react-icons";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFlutter } from "react-icons/fa6";
import { SiBootstrap, SiDocker, SiFlask, SiGo, SiGooglecloud, SiJquery, SiKotlin, SiMysql, SiNextdotjs, SiNuxtdotjs, SiPostgresql, SiPusher, SiRabbitmq, SiRedis, SiTensorflow, SiVuedotjs } from "react-icons/si";
import Link from "next/link";

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
    },
    golang: {
        icon: SiGo,
        color: '#1b7d68'
    },
    rabbit: {
        icon: SiRabbitmq,
        color: '#1b7d68'
    },
    redis: {
        icon: SiRedis,
        color: '#1b7d68'
    },
    docker: {
        icon: SiDocker,
        color: '#1b7d68'
    },
    next: {
        icon: SiNextdotjs,
        color: '#1b7d68'
    },
    jquery: {
        icon: SiJquery,
        color: '#1b7d68'
    },
    bootstrap: {
        icon: SiBootstrap,
        color: '#1b7d68'
    },
}

const projects = [
    {
        image: undefined,
        title: 'Localoka',
        position: `As a Backend Developer`,
        estimate: {
            start: '2024-10',
            end: '2025-10'
        },
        stacks: ['flask', 'postgre', 'golang', 'rabbit', 'redis', 'docker', 'next', 'flutter']
    },
    {
        image: undefined,
        title: 'Zainab Voucher',
        position: `As a Fullstack Developer`,
        estimate: {
            start: '2023-10',
            end: '2024-01'
        },
        stacks: ['laravel', 'jquery', 'bootstrap', 'mysql']
    },
    {
        image: undefined,
        title: 'HRIS',
        position: `As a Frontend Developer`,
        estimate: {
            start: '2024-01',
            end: '2024-03'
        },
        stacks: ['laravel', 'mysql', 'next', 'tailwind']
    },
    {
        image: {
            url: `/portfolio/vocaject-mock.jpeg`,
            alt: `mock vocaject application`
        },
        title: 'Wiraku',
        position: `As a Fullstack Developer`,
        estimate: {
            start: '2021-06',
            end: '2021-08'
        },
        stacks: ['laravel', 'nuxt', 'tailwind', 'flutter', 'mysql', 'pusher', 'gcp']
    },
    {
        image: {
            url: `/portfolio/vocaject-mock.jpeg`,
            alt: `mock vocaject application`
        },
        title: 'Vocational Project (Vocaject)',
        position: `As a Fullstack Developer`,
        estimate: {
            start: '2023-06',
            end: '2023-08'
        },
        stacks: ['laravel', 'nuxt', 'tailwind', 'flutter', 'mysql', 'pusher', 'gcp']
    },
    {
        image: {
            url: `/portfolio/arahku-mock.jpeg`,
            alt: `mock arahku application`
        },
        title: 'Arahku',
        estimate: {
            start: '2023-05',
            end: '2023-06'
        },
        position: `As a Backend Developer`,
        stacks: ['flask', 'kotlin', 'postgre', 'tensorflow', 'gcp']
    },
    {
        image: {
            url: `/portfolio/kopi-pas-mock.jpeg`,
            alt: `mock kopi pas application`
        },
        title: 'Aplikasi Kopi Pas',
        estimate: {
            start: '2022-10',
            end: '2022-12'
        },
        position: `As a Backend Developer`,
        stacks: ['laravel', 'tailwind', 'flutter', 'vue', 'mysql']
    },
    {
        image: {
            url: `/portfolio/web-policy-mock.jpeg`,
            alt: `mock web policy`
        },
        title: 'Website Official UKM-POLICY',
        estimate: {
            start: '2021-09',
            end: '2021-11'
        },
        position: `As a Backend Developer`,
        stacks: ['laravel', 'tailwind', 'mysql']
    },
]

function CardProject({data}: {
    data: {
        image?: {
            url: string,
            alt: string,
        },
        title: string,
        estimate: {
            start: string,
            end: string
        },
        position: string,
        stacks: string[]
    }
}) {

    function formatDate(d: Date) {
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        })
    }

    return (
        <article className="col-span-1">
            <div className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden border">
                <Image
                    src={data.image?.url ?? '/assets/project.png'}
                    alt={data.image?.alt ?? data.title}
                    className="object-cover object-center"
                    fill />
            </div>
            <div className="py-3">
                <h3 className="font-semibold text-xl">{data.title}</h3>
                <div className="opacity-50 flex items-center gap-3 mt-1">
                    <p>{data.position}</p>
                    <div className="w-1 h-1 rounded-full bg-foreground"></div>
                    <div className="">
                        <time dateTime="Y-m">
                            {formatDate(new Date(data.estimate.start + '-01'))}
                        </time>
                        <span className="px-1">-</span> 
                        <time dateTime="Y-m">
                            {formatDate(new Date(data.estimate.end + '-01'))}
                        </time>
                    </div>
                </div>
                <div className="flex gap-3 items-center mt-2">
                    {
                        data.stacks.map((stack, i) => {
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
        </article>
    )
}

export default function Workspace({showAll = false} : {showAll?: boolean}) {
    return (
        <section className="py-16" id="portfolio">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="">
                        <h2 className="text-primary text-xl">Portfolio</h2>
                        <div className="text-5xl font-bold my-2">
                            <AnimatedShinyText>Selected Projects</AnimatedShinyText>
                        </div>
                        <p className="opacity-50">Here's a curated selection showcasing my expertise and the achieved results.</p>
                    </div>
                    {
                        !showAll ? (
                            <Link href="/portfolio" className="my-3 py-2 px-4 w-fit border-2 border-foreground rounded-full flex items-center gap-3 font-semibold">
                                <span>See All Project</span>
                                <FaArrowRight />
                            </Link>
                        ) : ''
                    }
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-8 lg:p-5 gap-6">

                    {
                        (showAll ? projects : projects.slice(0,4))
                        .sort((a, b) => {
                            const dateA = new Date(a.estimate.start + "-01").getTime();
                            const dateB = new Date(b.estimate.start + "-01").getTime();
                            return dateB - dateA;
                        })
                        .map((data, i) => (
                            <CardProject key={i} data={data} />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}