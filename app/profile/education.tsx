import Image from "next/image";

export default function Education() {
    return (
        <section className="py-8">
            <div className="container mx-auto px-5 lg:px-0">
                <div className="py-2 px-4 rounded-full border border-foreground/15 w-fit mx-auto">
                    <h2 className="">Education</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
                        <Image 
                            src="/assets/gambar-kampus-politeknik-negeri-lhokseumawe.png" 
                            alt="gambar kampus politeknik negeri lhokseumawe"
                            className="object-cover w-full h-full"
                            fill />
                    </div>
                    <div className="py-3">
                        <h3 className="text-2xl font-semibold">Politeknik Negeri Lhokseumawe</h3>
                        <p className="">Teknologi Rekayasa Komputer Jaringan - S.Tr.T</p>
                        <div className="flex gap-3 items-center text-sm">
                            <p className="">GPA 3.72 / 4.0</p>
                            <div className="w-1 h-1 rounded-full bg-foreground"></div>
                            <p className="">Sep 2020 - Oct 2024</p>
                        </div>
                        <ul className="list-disc px-6 text-sm text-foreground mt-3">
                            <li>
                                {`Completed a final project titled "Implementation of Document Storage Using Google Cloud Storage in the Vocaject Application"`}
                            </li>
                            <li>
                                Served as Chairman of the student organization Polytechnic Linux Community (UKM POLICY) for the 2022-2023 period
                            </li>
                            <li>
                                Achieved 3rd place in the Hackathon category at the 5th National Informatics Student Competition (2023) with the V ocaject application, built using Laravel, Vue, Flutter, and MySQL, in a team of three where I served as Full Stack Developer and Team Leader
                            </li>
                            <li>
                                Participated in the Studi Independent program under Bangkit Academy led by Google, Goto, and Traveloka Led a team as Project Manager to build a semester project, the Pos Kopi application, using Flutter, Vue.js, Laravel, and MySQL
                            </li>
                            <li>
                                Eveloped the official website of UKM POLICY for portfolio and organizational management purposes using Laravel and MySQL
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}