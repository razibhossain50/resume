"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import services from "../../api/services.json"
export default function Services() {
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
                {services.map((service)=>(
                <div key={service.id} className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
                    <div className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
                        <img src={service.imgUrl} alt={service.imgAlt} className="h-12 w-12 text-primary lg:h-16 lg:w-16"/>
                    </div>
                    <p className="mt-3 text-base font-medium text-dark dark:text-light/70">
                       {service.name}
                    </p>
                </div>

                ))}
            </div>
            <div className="mt-10 lg:mt-14">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                        Clients Feedback
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
                    <Swiper
                        className="mySwiper"
                        navigation={{
                            nextEl: ".review-carousel-button-next",
                            prevEl: ".review-carousel-button-prev",
                        }}
                        modules={[Navigation]}
                        spaceBetween={24}
                        loop={true}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            }
                        }}>
                        <SwiperSlide>
                            <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-1">
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                    </div>

                                    <a href="https://www.fiverr.com/razuahmed290?up_rollout=true" target='__blank' className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                                        <span>fiver.com</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                            <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                        </svg>
                                    </a>
                                </div>

                                <blockquote className="mt-6 flex-1 text-lg">
                                GREAT! Love it It was fast and really nice! He made it outstanding by himself! Just send your wishes (like example website) and your wish comes true! Thanks alot - Really recommended for anyone who want&apos;s a good website!!
                                </blockquote>

                                <p className="mt-8 font-medium">
                                aquacentrum
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-1">
                                    <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                    </div>

                                    <a href="https://www.fiverr.com/razuahmed290?up_rollout=true" target='__blank' className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                                        <span>fiver.com</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                            <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                        </svg>
                                    </a>
                                </div>

                                <blockquote className="mt-6 flex-1 text-lg">
                                Very knowledgeable and quickly solved a problem we had devoted hours to solving.
                                </blockquote>

                                <p className="mt-8 font-medium">
                                jesus4all
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-1">
                                    <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                    </div>

                                    <a href="https://www.fiverr.com/razuahmed290?up_rollout=true" target='__blank' className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                                        <span>fiver.com</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                            <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                        </svg>
                                    </a>
                                </div>

                                <blockquote className="mt-6 flex-1 text-lg">
                                Raz delivered my order within few minutes, amazing.

                                </blockquote>

                                <p className="mt-8 font-medium">
                                umkhalid
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-1">
                                    <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                    </div>

                                    <a href="https://www.fiverr.com/razuahmed290?up_rollout=true" target='__blank' className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                                        <span>fiver.com</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                            <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                        </svg>
                                    </a>
                                </div>

                                <blockquote className="mt-6 flex-1 text-lg">
                                Loved it!! She is Quick, professional and knows hers stuff. Thank you!! Look no further this gig is AWESOME!
                                </blockquote>

                                <p className="mt-8 font-medium">
                                adrianadixon
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex h-full flex-col justify-between rounded-lg bg-light p-6 dark:bg-dark-2">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex flex-wrap items-center gap-1">
                                    <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                        <img src="/icons/star-full.svg" alt="star" className="h-4 w-4 shrink-0" />
                                    </div>

                                    <a href="https://www.fiverr.com/razuahmed290?up_rollout=true" target='__blank' className="inline-flex items-center gap-2 rounded bg-white px-2 py-1 text-sm leading-none text-primary transition hover:bg-primary hover:text-white dark:bg-black">
                                        <span>fiver.com</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 shrink-0">
                                            <path d="m9.917 4.583-5.834 5.834m.584-5.834h5.25v5.25" />
                                        </svg>
                                    </a>
                                </div>

                                <blockquote className="mt-6 flex-1 text-lg">
                                Fast response, quick fulfillment, great price. What more could you ask for. Highly recommend 11/10.
                                </blockquote>

                                <p className="mt-8 font-medium">
                                ernie33
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="mt-10 lg:mt-14">
                <div className="group flex gap-6 overflow-hidden rounded-lg bg-light p-6 dark:bg-dark-2">
                    <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                        <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                            Let&apos;s 👋 Work Together
                        </a>
                        <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                            Let&apos;s 👋 Work Together
                        </a>
                    </div>
                    <div className="relative flex min-w-full shrink-0 animate-infinite-scroll gap-6 group-hover:[animation-play-state:paused]">
                        <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                            Let&apos;s 👋 Work Together
                        </a>
                        <a href="contact.html" className="relative inline-block whitespace-nowrap text-3xl font-medium text-muted transition before:mr-3 before:content-['\2022'] hover:text-dark dark:text-muted dark:hover:text-white md:text-[40px]">
                            Let&apos;s 👋 Work Together
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}