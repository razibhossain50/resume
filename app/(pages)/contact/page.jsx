"use client";
export default function Contact() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <div className="">
                <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
                    Lets 👋 <span className="text-primary">Work</span> Together
                </h2>
                <p className="mt-4 text-lg text-muted dark:text-light/70">
                    Im here to help if youre searching for a product designer to bring
                    your idea to life or a design partner to help take your business to the
                    next level.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    <a href="#" className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
                        </svg>
                        <span>Book A Call</span>
                    </a>
                    <button type="button" data-clipboard-text="shams.sujon.01@gmail.com" data-clipboard-action="copy" data-clipboard-success-text="Copied to clipboard" className="js-clipboard hs-tooltip inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition [--trigger:focus] hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                            <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
                            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>
                        <span>Copy Email</span>

                        <span
                            className="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                            role="tooltip">
                            Copied to clipboard
                        </span>
                    </button>
                </div>
            </div>

            <div className="mt-10 lg:mt-14">
                <form id="contact-form" method="post" action="assets/php/contact_email.php" className="space-y-6 rounded-lg bg-light p-6 dark:bg-dark-2 xl:p-12">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="">
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-dark dark:text-light">
                                Name
                            </label>
                            <input required type="text" id="name" name="name" placeholder="Enter your name" className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20" />
                        </div>
                        <div className="">
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-dark dark:text-light">
                                Email
                            </label>
                            <input required type="email" id="email" name="email" placeholder="Enter your email" className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-1">
                        <div className="">
                            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-dark dark:text-light">
                                Subject
                            </label>
                            <input required type="text" id="subject" name="subject" placeholder="Subject" className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20" />
                        </div>
                    </div>

                    <div className="">
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-dark dark:text-light">
                            Message
                        </label>

                        <textarea required id="message" name="message" placeholder="Type details about your inquiry" rows="4" className="block w-full rounded-lg border border-gray-200 bg-white px-6 py-4 text-base outline-none transition focus:border-dark focus:ring focus:ring-dark/20 disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:bg-black dark:text-white dark:focus:border-muted dark:focus:ring-white/20"></textarea>
                    </div>

                    <button type="submit" className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 text-center font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50">
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-5 w-5">
                            <path d="M17.5 11.667v-5h-5" />
                            <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>

                    <div className="status alert hidden"></div>
                </form>
            </div>
            <div className="mt-10 aspect-video overflow-hidden rounded-lg lg:mt-14">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2527998699!2d-74.14448787425354!3d40.697631233397885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1706676940522!5m2!1sen!2sbd" width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full object-cover"></iframe>
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
                                    Im here to help if youre searching for a product
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
                                    Im here to help if youre searching for a product
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
                                    Im here to help if youre searching for a product
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
                                    Im here to help if youre searching for a product
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
                                    Im here to help if youre searching for a product
                                    designer to bring your idea to life or a design partner
                                    to help take your business to the next level.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
