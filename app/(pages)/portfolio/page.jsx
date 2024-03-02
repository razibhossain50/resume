
"use client";
import { useState } from "react"
import Pagination from "../../_components/Pagination"
import projects from "../../api/projects"

export default function Portfolio () {
    const data = projects;
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(4);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(data.length / recordsPerPage)

  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                <div className="">
                    <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
                        All <span className="text-primary">Projects</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
                        Transforming Ideas into Innovative Reality, Empower Your Vision with
                        Our Expert <span className="font-semibold text-dark dark:text-white">Software Development</span>  Services!
                    </p>
                </div>
                <div className="mt-10 lg:mt-14">
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                        {currentRecords.map((project)=>(
                        <div key={project.id} className="border border-primary-dark dark:border-primary-light rounded-lg">
                            <div className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0 xl:p-10 xl:pb-0">
                                <div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
                                    <img src={project.imgUrl} alt={project.imgAlt} className="h-full w-full rounded-t-lg object-cover object-top transition" />

                                    <a href={project.url} target="__blank" data-gall="project-gallry-1" className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
                                        <img src="/icons/external-link.svg" alt="Link" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                                <div className="">
                                    <h3 className="text-lg font-medium md:text-xl lg:text-2xl">
                                        <a href={project.url} target="__blank" className="border-b border-transparent text-dark transition hover:border-b-primary hover:text-primary dark:text-light/80 dark:hover:text-primary">
                                           {project.title}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-muted lg:text-base">
                                      {project.desc}
                                    </p>
                                </div>

                                <a href={project.url} target="__blank" className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 pl-0 text-center text-sm leading-none text-dark transition hover:text-primary dark:bg-black dark:text-light/70 dark:hover:text-primary">
                                    <span>Visit Site</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        ))}
                    </div>
                    <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                </div>
                <div className="mt-10 lg:mt-14">
                    <div className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
                        <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Lets 👋 Work Together
                            </a>
                            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Lets 👋 Work Together
                            </a>
                        </div>
                        <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Lets 👋 Work Together
                            </a>
                            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Lets 👋 Work Together
                            </a>
                        </div>
                    </div>
                </div>
            </div>
  )
}