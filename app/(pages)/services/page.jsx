export default function Services(){
  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
                    <div className="">
                        <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
                            Services I <span className="text-primary">Offered</span>
                        </h2>
                        <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
                            Transforming Ideas into Innovative Reality, Empower Your Vision with
                            Our Expert <span className="font-semibold text-dark dark:text-white">Software Development</span>  Services!
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-light px-4 py-2 text-center text-base font-medium leading-none text-primary dark:bg-dark-2 lg:text-lg">
                        <span className="relative flex h-2 w-2 shrink-0">
								<span
									className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75 dark:bg-light"></span>
                        <span
									className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        <span>Available For Hire</span>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 lg:mt-14">
                    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                        <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="M8 13.333A5.333 5.333 0 0 1 13.333 8h37.334A5.333 5.333 0 0 1 56 13.333v37.334A5.333 5.333 0 0 1 50.667 56H13.333A5.333 5.333 0 0 1 8 50.667V13.333ZM40 8 8 40M25.334 8l-16 16M53.333 9.333 38.667 24M24 40 10.666 53.333" />
                                <path d="M56 24H24v32" />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                            UI UX Design
                        </p>
                    </div>
                    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                        <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="M33.333 42.667H10.667A2.667 2.667 0 0 1 8 40V13.333a2.667 2.667 0 0 1 2.667-2.666h42.666A2.667 2.667 0 0 1 56 13.333v21.334M18.667 53.333h10.666M24 42.667v10.666M53.333 56l5.334-5.333-5.334-5.334m-8 0L40 50.667 45.333 56" />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                            Web Development
                        </p>
                    </div>
                    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                        <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="M26.666 18.667A5.333 5.333 0 0 1 32 13.333h16a5.333 5.333 0 0 1 5.333 5.334v26.666A5.333 5.333 0 0 1 48 50.667H32a5.333 5.333 0 0 1-5.334-5.334V18.667Zm-8 0v26.666m-8-24v21.334" />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                            Mobile App
                        </p>
                    </div>
                    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                        <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="M10.666 13.333a2.667 2.667 0 0 1 2.667-2.666h37.334a2.667 2.667 0 0 1 2.666 2.666v5.334a2.667 2.667 0 0 1-2.666 2.666H13.332a2.666 2.666 0 0 1-2.667-2.666v-5.334Zm0 21.334A2.667 2.667 0 0 1 13.333 32H24a2.667 2.667 0 0 1 2.666 2.667v16A2.667 2.667 0 0 1 24 53.333H13.333a2.666 2.666 0 0 1-2.667-2.666v-16ZM37.334 32h16m-16 10.667h16m-16 10.666h16" />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                            Product Design
                        </p>
                    </div>
                    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                        <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="M36.214 36.773a15.982 15.982 0 0 1 1.12 5.894A15.86 15.86 0 0 1 32 54.56a15.814 15.814 0 0 1-10.666 4.107c-8.827 0-16-7.174-16-16 0-7.36 5.013-13.6 11.786-15.44" />
                                <path d="M46.88 27.227c6.773 1.84 11.787 8.08 11.787 15.44 0 8.826-7.174 16-16 16A15.814 15.814 0 0 1 32 54.56" />
                                <path d="M16 21.333a16 16 0 1 0 32 0 16 16 0 0 0-32 0Z" />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                            Branding
                        </p>
                    </div>
                    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                        <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="M13.333 18.667H16a5.334 5.334 0 0 0 5.333-5.334A2.667 2.667 0 0 1 24 10.667h16a2.667 2.667 0 0 1 2.667 2.666A5.333 5.333 0 0 0 48 18.667h2.667A5.334 5.334 0 0 1 56 24v24a5.333 5.333 0 0 1-5.333 5.333H13.333A5.333 5.333 0 0 1 8 48V24a5.333 5.333 0 0 1 5.333-5.333Z" />
                                <path d="M24 34.667a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                            Photography
                        </p>
                    </div>
                    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                        <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="m49.621 47.333-10.4.715h-.072a36.88 36.88 0 0 0-9.925 2.208l-6.696 2.421a10.962 10.962 0 0 1-8.765-.576 10.188 10.188 0 0 1-5.28-6.738l-3.67-16.134a9.784 9.784 0 0 1 1.43-7.626 10.57 10.57 0 0 1 6.637-4.43l30-6.277c5.699-1.195 11.325 2.267 12.568 7.733l3.741 16.432a9.806 9.806 0 0 1-1.858 8.23 10.686 10.686 0 0 1-7.707 4.032v.005l-.003.005Z" />
                                <path d="M24 26.667 27.221 40l11.446-10.667L24 26.667Z" />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                            Motion Design
                        </p>
                    </div>
                    <div className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                        <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-12 w-12 text-primary lg:h-16 lg:w-16">
                                <path d="M26.667 32a5.333 5.333 0 1 0 10.666 0 5.333 5.333 0 0 0-10.666 0Z" />
                                <path d="M56 32c-6.4 10.667-14.4 16-24 16S14.4 42.667 8 32c6.4-10.667 14.4-16 24-16s17.6 5.333 24 16Z" />
                            </svg>
                        </div>
                        <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                            Visualization
                        </p>
                    </div>
                </div>
                <div className="mt-10 aspect-video overflow-hidden rounded-lg bg-light dark:bg-dark-2 lg:mt-14">
                    <img src="blog-img-1.jpg" alt="" className="h-full w-full rounded-lg object-cover" />
                </div>
                <div className="mt-10 lg:mt-14">
                    <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                        Working With 50+ Brands ✨ Worldwide
                    </h3>
                    <div className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4">
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="zeplin.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="figma.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="zeplin.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="figma.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="notion.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="webflow.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="mico.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                        <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                            <img src="framer.svg" alt="" className="h-8 w-8 lg:h-10 lg:w-10" />
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-14">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                            Trusted By 1200+ Clients
                        </h3>

                        <div className="flex items-center gap-2">
                            <button className="review-carousel-button-prev grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M4.167 10h11.666M4.167 10l5 5m-5-5 5-5" />
                                </svg>
                            </button>
                            <button className="review-carousel-button-next grid h-9 w-9 place-content-center rounded-lg border border-muted/30 text-muted transition hover:border-primary hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M4.167 10h11.666m-5 5 5-5m-5-5 5 5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="swiper review-carousel">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex flex-wrap items-center gap-1">
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                            </div>

                                            <a href="#" className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                                                <span>framer.com</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                                </svg>
                                            </a>
                                        </div>

                                        <blockquote className="mt-6 flex-1 text-lg">
                                            "We've been using BentoFolio for over a year now,
                                            and I must say, it's been a game-changer for us. The
                                            user interface is intuitive and the feature.
                                        </blockquote>

                                        <p className="mt-8 font-medium">
                                            Oliver Clain -
                                            <span className="font-normal text-muted">
													Product Designer
												</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex flex-wrap items-center gap-1">
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                            </div>

                                            <a href="#" className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                                                <span>framer.com</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                                </svg>
                                            </a>
                                        </div>

                                        <blockquote className="mt-6 flex-1 text-lg">
                                            "We've been using BentoFolio for over a year now,
                                            and I must say, it's been a game-changer for us. The
                                            user interface is intuitive and the feature.
                                        </blockquote>

                                        <p className="mt-8 font-medium">
                                            Oliver Clain -
                                            <span className="font-normal text-muted">
													Product Designer
												</span>
                                        </p>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="flex flex-wrap items-center gap-1">
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                                <img src="star-full.svg" alt="" className="h-4 w-4 shrink-0" />
                                            </div>

                                            <a href="#" className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                                                <span>framer.com</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                                    <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                                </svg>
                                            </a>
                                        </div>

                                        <blockquote className="mt-6 flex-1 text-lg">
                                            "We've been using BentoFolio for over a year now,
                                            and I must say, it's been a game-changer for us. The
                                            user interface is intuitive and the feature.
                                        </blockquote>

                                        <p className="mt-8 font-medium">
                                            Oliver Clain -
                                            <span className="font-normal text-muted">
													Product Designer
												</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-14">
                    <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                        Awards and Recognitions
                    </h3>

                    <div className="mt-8 space-y-4">
                        <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
                            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                                    <img src="adobe.svg" alt="" className="h-6 w-6 shrink-0" />
                                </div>
                                <div className="">
                                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                                        Adobe Design Contest
                                    </h5>
                                    <p className="text-muted">2022 - 2023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                                    <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
                                </svg>
                                <h5 className="font-medium leading-tight text-dark dark:text-light">
                                    Runner Up
                                </h5>
                            </div>

                            <div className="text-right">
                                <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                                    <span>View Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
                            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                                    <img src="dribbble.svg" alt="" className="h-6 w-6 shrink-0" />
                                </div>
                                <div className="">
                                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                                        Dribbble Design Contest
                                    </h5>
                                    <p className="text-muted">2022 - 2023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                                    <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
                                </svg>
                                <h5 className="font-medium leading-tight text-dark dark:text-light">
                                    Gold Winner
                                </h5>
                            </div>

                            <div className="text-right">
                                <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                                    <span>View Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
                            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                                    <img src="awwwards.png" alt="" className="h-6 w-6 shrink-0" />
                                </div>
                                <div className="">
                                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                                        Awwwards Nominee
                                    </h5>
                                    <p className="text-muted">2022 - 2023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                                    <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
                                </svg>
                                <h5 className="font-medium leading-tight text-dark dark:text-light">
                                    Runner Up
                                </h5>
                            </div>

                            <div className="text-right">
                                <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                                    <span>View Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="group relative grid grid-cols-1 items-center gap-4 rounded-lg border border-transparent bg-light p-6 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
                            <div className="flex flex-col gap-4 md:col-span-2 md:flex-row md:items-center md:gap-6">
                                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                                    <img src="behance.svg" alt="" className="h-6 w-6 shrink-0" />
                                </div>
                                <div className="">
                                    <h5 className="font-medium leading-tight text-dark dark:text-light xl:text-lg xl:leading-tight">
                                        Behance Design Contest
                                    </h5>
                                    <p className="text-muted">2022 - 2023</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5 shrink-0">
                                    <path d="M6 9.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0Z" />
                                    <path d="m12 15.5 3.4 5.89 1.598-3.233 3.598.232-3.4-5.889m-10.394 0-3.4 5.89L7 18.157l1.598 3.232 3.4-5.889" />
                                </svg>
                                <h5 className="font-medium leading-tight text-dark dark:text-light">
                                    Gold Winner
                                </h5>
                            </div>

                            <div className="text-right">
                                <a href="#" className="inline-flex items-center justify-center gap-2 rounded bg-white px-3 py-2 text-center text-sm leading-none text-dark transition after:absolute after:inset-0 after:h-full after:w-full after:content-[''] hover:bg-light hover:text-primary dark:bg-black dark:text-light/70 dark:hover:bg-dark-2 dark:hover:text-primary">
                                    <span>View Project</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                        <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-14">
                    <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                        Frequently Asked Questions
                    </h3>

                    <div className="hs-accordion-group mt-8 space-y-4">
                        <div className="hs-accordion rounded-lg border border-transparent bg-light transition hs-accordion-active:border-light hs-accordion-active:bg-white dark:border-transparent dark:bg-dark-2 dark:hs-accordion-active:border-dark-2 dark:hs-accordion-active:bg-black">
                            <button className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-5 text-start text-lg font-medium text-dark transition hover:text-muted disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary dark:text-light/70 dark:hover:text-light dark:focus:outline-none dark:hs-accordion-active:text-primary xl:text-2xl">
                                <span>What does a product designer need to know?</span>
                                <span
										className="grid h-8 w-8 shrink-0 place-content-center rounded bg-white text-primary hs-accordion-active:bg-light dark:bg-black dark:hs-accordion-active:bg-dark-2">
										<svg
											className="block h-3.5 w-3.5 hs-accordion-active:hidden"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
											<path d="M12 5v14" />
										</svg>
										<svg
											className="hidden h-3.5 w-3.5 hs-accordion-active:block"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
										</svg>
									</span>
                            </button>
                            <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                                <div className="px-6 pb-5">
                                    <p className="text-base xl:text-lg">
                                        I'm here to help if you're searching for a product
                                        designer to bring your idea to life or a design partner
                                        to help take your business to the next level.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hs-accordion active rounded-lg border border-transparent bg-light transition hs-accordion-active:border-light hs-accordion-active:bg-white dark:border-transparent dark:bg-dark-2 dark:hs-accordion-active:border-dark-2 dark:hs-accordion-active:bg-black">
                            <button className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-5 text-start text-lg font-medium text-dark transition hover:text-muted disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary dark:text-light/70 dark:hover:text-light dark:focus:outline-none dark:hs-accordion-active:text-primary xl:text-2xl">
                                <span>What does a product designer need to know?</span>
                                <span
										className="grid h-8 w-8 shrink-0 place-content-center rounded bg-white text-primary hs-accordion-active:bg-light dark:bg-black dark:hs-accordion-active:bg-dark-2">
										<svg
											className="block h-3.5 w-3.5 hs-accordion-active:hidden"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
											<path d="M12 5v14" />
										</svg>
										<svg
											className="hidden h-3.5 w-3.5 hs-accordion-active:block"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
										</svg>
									</span>
                            </button>
                            <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                                <div className="px-6 pb-5">
                                    <p className="text-base xl:text-lg">
                                        I'm here to help if you're searching for a product
                                        designer to bring your idea to life or a design partner
                                        to help take your business to the next level.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hs-accordion rounded-lg border border-transparent bg-light transition hs-accordion-active:border-light hs-accordion-active:bg-white dark:border-transparent dark:bg-dark-2 dark:hs-accordion-active:border-dark-2 dark:hs-accordion-active:bg-black">
                            <button className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-5 text-start text-lg font-medium text-dark transition hover:text-muted disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary dark:text-light/70 dark:hover:text-light dark:focus:outline-none dark:hs-accordion-active:text-primary xl:text-2xl">
                                <span>What does a product designer need to know?</span>
                                <span
										className="grid h-8 w-8 shrink-0 place-content-center rounded bg-white text-primary hs-accordion-active:bg-light dark:bg-black dark:hs-accordion-active:bg-dark-2">
										<svg
											className="block h-3.5 w-3.5 hs-accordion-active:hidden"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
											<path d="M12 5v14" />
										</svg>
										<svg
											className="hidden h-3.5 w-3.5 hs-accordion-active:block"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
										</svg>
									</span>
                            </button>
                            <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                                <div className="px-6 pb-5">
                                    <p className="text-base xl:text-lg">
                                        I'm here to help if you're searching for a product
                                        designer to bring your idea to life or a design partner
                                        to help take your business to the next level.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hs-accordion rounded-lg border border-transparent bg-light transition hs-accordion-active:border-light hs-accordion-active:bg-white dark:border-transparent dark:bg-dark-2 dark:hs-accordion-active:border-dark-2 dark:hs-accordion-active:bg-black">
                            <button className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-5 text-start text-lg font-medium text-dark transition hover:text-muted disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary dark:text-light/70 dark:hover:text-light dark:focus:outline-none dark:hs-accordion-active:text-primary xl:text-2xl">
                                <span>What does a product designer need to know?</span>
                                <span
										className="grid h-8 w-8 shrink-0 place-content-center rounded bg-white text-primary hs-accordion-active:bg-light dark:bg-black dark:hs-accordion-active:bg-dark-2">
										<svg
											className="block h-3.5 w-3.5 hs-accordion-active:hidden"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
											<path d="M12 5v14" />
										</svg>
										<svg
											className="hidden h-3.5 w-3.5 hs-accordion-active:block"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
										</svg>
									</span>
                            </button>
                            <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                                <div className="px-6 pb-5">
                                    <p className="text-base xl:text-lg">
                                        I'm here to help if you're searching for a product
                                        designer to bring your idea to life or a design partner
                                        to help take your business to the next level.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hs-accordion rounded-lg border border-transparent bg-light transition hs-accordion-active:border-light hs-accordion-active:bg-white dark:border-transparent dark:bg-dark-2 dark:hs-accordion-active:border-dark-2 dark:hs-accordion-active:bg-black">
                            <button className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-5 text-start text-lg font-medium text-dark transition hover:text-muted disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-primary dark:text-light/70 dark:hover:text-light dark:focus:outline-none dark:hs-accordion-active:text-primary xl:text-2xl">
                                <span>What does a product designer need to know?</span>
                                <span
										className="grid h-8 w-8 shrink-0 place-content-center rounded bg-white text-primary hs-accordion-active:bg-light dark:bg-black dark:hs-accordion-active:bg-dark-2">
										<svg
											className="block h-3.5 w-3.5 hs-accordion-active:hidden"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
											<path d="M12 5v14" />
										</svg>
										<svg
											className="hidden h-3.5 w-3.5 hs-accordion-active:block"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M5 12h14" />
										</svg>
									</span>
                            </button>
                            <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                                <div className="px-6 pb-5">
                                    <p className="text-base xl:text-lg">
                                        I'm here to help if you're searching for a product
                                        designer to bring your idea to life or a design partner
                                        to help take your business to the next level.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10 lg:mt-14">
                    <div className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
                        <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Let's 👋 Work Together
                            </a>
                            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Let's 👋 Work Together
                            </a>
                        </div>
                        <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Let's 👋 Work Together
                            </a>
                            <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                                Let's 👋 Work Together
                            </a>
                        </div>
                    </div>
                </div>
            </div>
  )
}