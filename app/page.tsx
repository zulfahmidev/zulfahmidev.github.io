import AboutMe from "@/components/layout/about-me";
import ContactMe from "@/components/layout/contact-me";
import Workspace from "@/components/layout/workspace";

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
