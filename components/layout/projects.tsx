"use client"

import Image from "next/image";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import CardProject from "./card-project";

export default function Projects({showAll = false, projects = []} : {
    showAll?: boolean,
    projects: Project[]
}) {

    return (
        <section className="py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="lg:flex justify-between items-center">
                    <div className="">
                        <h1 className="text-primary text-xl">Portfolio</h1>
                        <div className="text-5xl font-bold my-2">
                            <AnimatedShinyText>All Projects</AnimatedShinyText>
                        </div>
                        <p className="opacity-50">{`Here's a curated selection showcasing my expertise and the achieved results.`}</p>
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