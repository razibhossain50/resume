"use client";
export default function Contact() {
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
            <div className="">
                <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
                    Lets 👋 <span className="text-primary">Work</span> Together
                </h2>
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
        </div>
    )
}
