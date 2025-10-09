interface Project {
    image?: {
        url: string,
        alt: string,
    },
    isSelected: boolean,
    title: string,
    slug: string,
    brief: string,
    responsibilities: string[],
    result: string,
    // link: string,
    estimate: {
        start: string,
        end: string
    },
    position: string,
    stacks: string[]
}