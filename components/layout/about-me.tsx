import { FaArrowRight } from "react-icons/fa";

export default function AboutMe() {
    return (
        <section className="">
            <div className="container mx-auto py-16 px-5 lg:px-0" id="about">
                <h1 className="text-center text-5xl font-semibold text-primary">{"Hi, I'm Zulfahmi"}</h1>
                <p className="text-3xl lg:text-5xl text-center my-8">A Software Engineer with over 5 years of experience in creating high-quality and impactful digital experiences. I have a strong focus on transforming complex problems into elegant and user-friendly interfaces.</p>
                <a href="#" className="py-2 px-4 border-2 border-foreground rounded-full flex items-center gap-3 font-semibold w-fit mx-auto">
                    <span>See My Profile</span>
                    <FaArrowRight />
                </a>
            </div>
        </section>
    )
}