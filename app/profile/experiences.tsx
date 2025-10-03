interface Experience {
    Company: string
    Position: string
    Location: string
    Estimate: string
    Description: string[]
}

const experiences: Experience[] = [
    {
        Company: 'PT. Guardia Teknologi Indonesia',
        Location: 'Jakarta Pusat, Jakarta',
        Position: 'Full Stack Developer',
        Estimate: 'Oct 2025 - Present',
        Description: [
            '-'
        ]
    },
    {
        Company: 'PT. Super Pasar Rakyat Indonesia',
        Location: 'Jakarta Pusat, Jakarta',
        Position: 'Backend Developer',
        Estimate: 'Oct 2024 - Oct 2025',
        Description: [
            'Developed and maintained the backend of the Localoka application, which has over 100,000 active users, using a microservices architecture with Python Flask, and built the backend of Localoka V2 using Golang with a microservices architecture.',
            'Resolved critical bugs such as failed coin withdrawal, shipment tracking errors, and others',
            'Implemented new features such as branch store management, flash withdrawal, and branch store withdrawal to support multi-location operations',
            'Integrated Indonesia POS shipping API as a delivery method within the Localoka application',
            'Fixed and implemented an integrated CI/CD pipeline with Docker to streamline the deployment process',
            'Acted as Scrum Master, managing sprint planning, task allocation, and progress monitoring of the Localoka development team'
        ]
    },
    {
        Company: 'PT. Sekawan Media Informatika',
        Location: 'Malang, Jawa Timur',
        Position: 'Full Stack Developer',
        Estimate: 'Oct 2023 - Mar 2024',
        Description: [
            'Developed the Zavis V oucher information system using Laravel and MySQL, and the HRIS information system using Next.js/React.js, Laravel, and MySQL',
            'Performed several enhancements, including backend refactoring, layout improvements, and adding new components and pages to both the Zavis V oucher and HRIS information systems',
        ]
    },
    {
        Company: 'CV. Naistudio',
        Location: 'Metro, Lampung',
        Position: 'Full Stack Developer',
        Estimate: 'Oct 2023 - Mar 2024',
        Description: [
            'Developed the Zavis V oucher information system using Laravel and MySQL, and the HRIS information system using Next.js/React.js, Laravel, and MySQL',
            'Performed several enhancements, including backend refactoring, layout improvements, and adding new components and pages to both the Zavis V oucher and HRIS information systems',
        ]
    },
]

function ExperienceCard({data} : {data: Experience}) {
    return (
        <div>
            <h3 className="text-2xl">
                <span className="font-semibold">{data.Company}</span>
            </h3>
            <p className="font-semibold">{data.Position}</p>
            <div className="flex gap-3 items-center text-sm">
                <p>{data.Location}</p>
                <div className="w-1 h-1 rounded-full bg-foreground"></div>
                <p>{data.Estimate}</p>
            </div>
            <ul className="list-disc px-6 text-sm text-foreground mt-3">
                {
                    data.Description.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default function Experiences() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="py-2 px-4 rounded-full border border-foreground/15 w-fit mx-auto">
                    <h2 className="">Work Experiences</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {
                        experiences.map((v, i) => (
                            <ExperienceCard key={i} data={v} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}