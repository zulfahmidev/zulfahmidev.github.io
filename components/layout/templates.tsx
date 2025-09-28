import { cn } from "@/lib/utils"
import { Marquee } from "../ui/marquee"
import { AnimatedShinyText } from "../ui/animated-shiny-text"
import { FaArrowRight } from "react-icons/fa"
import Image from "next/image"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const TemplateCard = () => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 overflow-hidden rounded-xl border p-2",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          className=""
          src={'/template.png'}
          alt="" 
          fill />
        <div className="opacity-0 hover:opacity-100 bg-background/50 backdrop-blur-md absolute left-0 top-o w-full h-full rounded-lg transition-all flex flex-col items-center justify-center gap-3">
          <div className="w-fit py-2 px-4 text-sm text-background rounded-lg bg-foreground cursor-pointer">Beli Sekarang</div>
          <div className="w-fit py-2 px-4 text-sm text-foreground rounded-lg border border-foreground cursor-pointer">Lihat</div>
        </div>
      </div>
    </figure>
  )
}

export function Templates() {
  return (
    <div className="">
        <div className="text-center">
            <h2 className="text-xl text-primary">Templates</h2>
            <h3 className="text-5xl font-bold my-2">
                <AnimatedShinyText>Try My Template</AnimatedShinyText>
            </h3>
        </div>
        <div className="mt-16 relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                <TemplateCard key={review.username} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                <TemplateCard key={review.username} {...review} />
                ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
        <a href="" className="my-8 py-2 px-4 border-2 border-foreground rounded-full flex items-center gap-3 font-semibold w-fit mx-auto">
            <span>Show All Templates</span>
            <FaArrowRight />
        </a>
    </div>
  )
}
