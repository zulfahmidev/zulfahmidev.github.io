import AboutMe from "@/components/layout/about-me";
import ContactMe from "@/components/layout/contact-me";
import { Header } from "@/components/layout/header";
import Workspace from "@/components/layout/workspace";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<>Loading...</>}>
          <AboutMe />
          <Workspace />
          {/* <Apps /> */}
          {/* <Blog /> */}
          {/* <Templates /> */}
          <ContactMe />
        </Suspense>
      </main>
    </>
  );
}
