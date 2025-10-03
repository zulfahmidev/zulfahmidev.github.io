import AboutMe from "@/components/layout/about-me";
import Education from "./education";
import Skills from "./skills";
import Experiences from "./experiences";

export default function ProfilePage() {
    return (
        <>
            <AboutMe isAboutPage={true} />
            <Skills />
            <Education />
            <Experiences />
        </>
    )
}