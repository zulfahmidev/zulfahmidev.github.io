import { ReadData } from "@/lib/helper"
import { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projects = await ReadData("projects.json");
  const project = projects.find((p: Project) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found - Zulfahmidev",
      description: "This project could not be found.",
      robots: { index: false },
    };
  }

  const title = `${project.title} - Portfolio - Zulfahmidev`;
  const description =
    project.brief ||
    `Learn more about ${project.title}, a project built using ${project.stacks?.join(", ") || "various technologies"} by Zulfahmi.`;

  const image = project.image?.url
    ? `https://zulfahmidev.com${project.image.url}`
    : "https://zulfahmidev.com/assets/project.png";

  const url = `https://zulfahmidev.com/portfolio/${project.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Zulfahmidev",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: project.image?.alt || project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@zulfahmidev", // opsional jika punya akun X/Twitter
    },
    alternates: {
      canonical: url,
    },
    other: {
      "script:ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        url,
        image,
        description,
        dateCreated: project.estimate?.start,
        dateModified: project.estimate?.end,
        author: {
          "@type": "Person",
          name: "Zulfahmi",
          url: "https://zulfahmidev.com",
        },
        headline: project.title,
        keywords: project.stacks?.join(", "),
        genre: "Software Development",
        about: {
          "@type": "Thing",
          name: project.title,
        },
      }),
    },
  };
}

export default async function PortfolioDetail({ params } : Props) {
    const projects = (await ReadData('projects.json')) as Project[]
    const data: Project | undefined = projects.find(v => v.slug === params.slug)

    function formatDate(d: Date) {
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
        })
    }

    return (
        <section className="py-16" itemScope itemType="https://schema.org/CreativeWork">
            <article className="container mx-auto px-5 lg:px-0" itemProp="mainEntity">
                {/* Breadcrumb */}
                <header className="lg:px-8">
                    <nav aria-label="Breadcrumb">
                        <Link 
                            href="/portfolio" 
                            className="flex gap-3 w-fit items-center py-3 opacity-50 hover:opacity-100"
                            title="Back to Portfolio"
                        >
                            <FaArrowLeft aria-hidden="true" />
                            <span>Back to Portfolio</span>
                        </Link>
                    </nav>

                    {/* Title & Date */}
                    <div className="mt-8">
                        <h1 
                            className="text-3xl font-bold my-2" 
                            itemProp="headline"
                        >
                            {data?.title}
                        </h1>
                        <p className="opacity-50 text-sm">
                            <time 
                                dateTime={data?.estimate?.start} 
                                itemProp="dateCreated"
                            >
                                {formatDate(new Date(data?.estimate.start + "-01"))}
                            </time>
                            <span className="px-1">–</span>
                            <time 
                                dateTime={data?.estimate?.end} 
                                itemProp="dateModified"
                            >
                                {formatDate(new Date(data?.estimate.end + "-01"))}
                            </time>
                        </p>
                    </div>

                    {/* Tech Stack */}
                    {data?.stacks && (
                        <ul className="py-3 flex gap-3 flex-wrap" aria-label="Technology Stack">
                            {data.stacks.map((stack: string, i: number) => (
                                <li 
                                    key={i} 
                                    className="py-1 px-3 text-primary border border-primary/30 rounded-full text-sm"
                                    itemProp="keywords"
                                >
                                    {stack}
                                </li>
                            ))}
                        </ul>
                    )}
                </header>

                {/* Project Image */}
                <figure className="aspect-[16/9] bg-slate-100 w-full rounded-xl relative overflow-hidden border my-6">
                    <Image
                        src={data?.image?.url ?? "/assets/project.png"}
                        alt={data?.image?.alt ?? `${data?.title} project image`}
                        title={data?.title}
                        className="object-cover object-center"
                        fill
                        priority
                    />
                    {data?.image?.alt && (
                        <figcaption className="sr-only">{data.image.alt}</figcaption>
                    )}
                </figure>

                {/* Live Site Button */}
                {/* {data?.link && (
                    <div className="w-fit mx-auto">
                        <a
                            href={data.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-fit py-3 px-5 bg-primary text-black rounded-full flex font-semibold items-center gap-2"
                            title={`Visit ${data.title}`}
                        >
                            <span>View Live Site</span>
                            <FaArrowRight aria-hidden="true" />
                        </a>
                    </div>
                )} */}

                {/* Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-6">
                    {/* Sidebar Navigation */}
                    <aside className="col-span-1 hidden px-8 lg:flex flex-col gap-3" aria-label="Page Sections">
                        <a href="#role" className="opacity-50 hover:opacity-100 text-lg">Role</a>
                        <a href="#brief" className="opacity-50 hover:opacity-100 text-lg">Project Brief</a>
                        <a href="#responsibility" className="opacity-50 hover:opacity-100 text-lg">Responsibility</a>
                        <a href="#result" className="opacity-50 hover:opacity-100 text-lg">Result</a>
                    </aside>

                    {/* Main Content */}
                    <div className="col-span-2">
                        <section className="mb-3" id="role" itemProp="author">
                            <h2 className="text-2xl font-semibold py-1 border-b">Role</h2>
                            <p className="py-2 text-lg opacity-70">{data?.position}</p>
                        </section>

                        <section className="mb-3" id="brief" itemProp="description">
                            <h2 className="text-2xl font-semibold py-1 border-b">Project Brief</h2>
                            <p className="py-2 text-lg opacity-70">
                                {data?.brief || "No project brief available."}
                            </p>
                        </section>

                        <section className="mb-3" id="responsibility">
                            <h2 className="text-2xl font-semibold py-1 border-b">Responsibility</h2>
                            <ul className="list-disc px-8 py-2 text-lg opacity-70">
                                {data?.responsibilities?.map((item: string, i: number) => (
                                    <li key={i}>{item}</li>
                                )) || (
                                    <li>No responsibility data provided.</li>
                                )}
                            </ul>
                        </section>

                        <section className="mb-3" id="result">
                            <h2 className="text-2xl font-semibold py-1 border-b">Result</h2>
                            <p className="py-2 text-lg opacity-70" itemProp="about">
                                {data?.result || "No project result available."}
                            </p>
                        </section>
                    </div>
                </div>
            </article>
        </section>
    )
}