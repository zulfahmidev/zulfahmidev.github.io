import AboutMe from "@/components/ui/home/about-me";
import ContactMe from "@/components/ui/home/contact-me";
import Workspace from "@/components/ui/home/workspace";

export default function Home() {
  return (
    <>
      <AboutMe />
      <Workspace />
      {/* <Apps />
      <Blog />
      <Templates /> */}
      <ContactMe />
    </>
  );
}
