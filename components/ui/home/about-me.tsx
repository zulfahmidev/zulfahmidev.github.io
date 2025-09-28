import { FaArrowRight } from "react-icons/fa";
import TechStack from "./tech-stack";
import { TextAnimate } from "../text-animate";

export default function AboutMe() {
    return (
        <section className="">
            <div className="container mx-auto py-16 px-5 lg:px-0" id="about">
                <h2 className="text-center text-xl text-primary">About Me</h2>

                <TextAnimate animation="blurIn" as="p" delay={0.2} className="text-3xl lg:text-5xl text-center my-8">I am Zulfahmi, a Software Engineer with over 5 years of experience in creating high-quality and impactful digital experiences. I have a strong focus on transforming complex problems into elegant and user-friendly interfaces.</TextAnimate>
                <a href="" className="py-2 px-4 border-2 border-foreground rounded-full flex items-center gap-3 font-semibold w-fit mx-auto">
                    <span>See My Profile</span>
                    <FaArrowRight />
                </a>
            </div>
            {/* <TechStack /> */}
        </section>
    )
}