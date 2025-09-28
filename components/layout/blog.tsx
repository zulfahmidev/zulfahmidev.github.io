import Image from "next/image";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { FaArrowRight } from "react-icons/fa";

export default function Blog() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="flex justify-between items-center">
                    <div className="">
                        <h2 className="text-primary text-xl">My Blog</h2>
                        <h3 className="text-5xl font-bold my-2">
                            <AnimatedShinyText>Latest Posts</AnimatedShinyText>
                        </h3>
                    </div>
                    <a href="" className="py-2 px-4 border-2 border-foreground rounded-full flex items-center gap-3 font-semibold">
                        <span>See All Post</span>
                        <FaArrowRight />
                    </a>
                </div>
                <p className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, numquam!</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 my-8 lg:p-5 gap-8">

                    <div className="col-span-1">
                        <div className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden">
                            <Image
                                src={'/image.png'}
                                alt=""
                                fill />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-xl">Zulfahmidev Website</h3>
                            <h3 className="text-primary">Artificial Inteligent</h3>
                            <p className="opacity-50 text-sm line-clamp-2 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae praesentium perspiciatis beatae sint dolore provident voluptas dolor, earum asperiores temporibus dolorum eaque numquam. Itaque, eveniet? Earum adipisci libero obcaecati veniam!</p>
                            <div className="flex gap-3 items-center text-sm">
                                <p className="">10 December 2025</p>
                                <div className="w-1 h-1 rounded-full bg-foreground"></div>
                                <p className="">24 views</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-span-1">
                        <div className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden">
                            <Image
                                src={'/image.png'}
                                alt=""
                                fill />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-xl">Zulfahmidev Website</h3>
                            <h3 className="text-primary">Artificial Inteligent</h3>
                            <p className="opacity-50 text-sm line-clamp-2 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae praesentium perspiciatis beatae sint dolore provident voluptas dolor, earum asperiores temporibus dolorum eaque numquam. Itaque, eveniet? Earum adipisci libero obcaecati veniam!</p>
                            <div className="flex gap-3 items-center text-sm">
                                <p className="">10 December 2025</p>
                                <div className="w-1 h-1 rounded-full bg-foreground"></div>
                                <p className="">24 views</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-span-1">
                        <div className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden">
                            <Image
                                src={'/image.png'}
                                alt=""
                                fill />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-xl">Zulfahmidev Website</h3>
                            <h3 className="text-primary">Artificial Inteligent</h3>
                            <p className="opacity-50 text-sm line-clamp-2 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae praesentium perspiciatis beatae sint dolore provident voluptas dolor, earum asperiores temporibus dolorum eaque numquam. Itaque, eveniet? Earum adipisci libero obcaecati veniam!</p>
                            <div className="flex gap-3 items-center text-sm">
                                <p className="">10 December 2025</p>
                                <div className="w-1 h-1 rounded-full bg-foreground"></div>
                                <p className="">24 views</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-span-1">
                        <div className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden">
                            <Image
                                src={'/image.png'}
                                alt=""
                                fill />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-xl">Zulfahmidev Website</h3>
                            <h3 className="text-primary">Artificial Inteligent</h3>
                            <p className="opacity-50 text-sm line-clamp-2 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae praesentium perspiciatis beatae sint dolore provident voluptas dolor, earum asperiores temporibus dolorum eaque numquam. Itaque, eveniet? Earum adipisci libero obcaecati veniam!</p>
                            <div className="flex gap-3 items-center text-sm">
                                <p className="">10 December 2025</p>
                                <div className="w-1 h-1 rounded-full bg-foreground"></div>
                                <p className="">24 views</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-span-1">
                        <div className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden">
                            <Image
                                src={'/image.png'}
                                alt=""
                                fill />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-xl">Zulfahmidev Website</h3>
                            <h3 className="text-primary">Artificial Inteligent</h3>
                            <p className="opacity-50 text-sm line-clamp-2 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae praesentium perspiciatis beatae sint dolore provident voluptas dolor, earum asperiores temporibus dolorum eaque numquam. Itaque, eveniet? Earum adipisci libero obcaecati veniam!</p>
                            <div className="flex gap-3 items-center text-sm">
                                <p className="">10 December 2025</p>
                                <div className="w-1 h-1 rounded-full bg-foreground"></div>
                                <p className="">24 views</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-span-1">
                        <div className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden">
                            <Image
                                src={'/image.png'}
                                alt=""
                                fill />
                        </div>
                        <div className="p-3">
                            <h3 className="font-semibold text-xl">Zulfahmidev Website</h3>
                            <h3 className="text-primary">Artificial Inteligent</h3>
                            <p className="opacity-50 text-sm line-clamp-2 my-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae praesentium perspiciatis beatae sint dolore provident voluptas dolor, earum asperiores temporibus dolorum eaque numquam. Itaque, eveniet? Earum adipisci libero obcaecati veniam!</p>
                            <div className="flex gap-3 items-center text-sm">
                                <p className="">10 December 2025</p>
                                <div className="w-1 h-1 rounded-full bg-foreground"></div>
                                <p className="">24 views</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}