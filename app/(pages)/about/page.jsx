
export default function About() {
  return (
    <>
      <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
        <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
          <div className="">
            <h2 className="text-3xl font-semibold text-dark dark:text-light lg:text-[40px]">
              Hi, I&apos;am <span className="text-primary">Razib Hossain</span> 👋
            </h2>
            <p className="mt-4 text-lg text-muted dark:text-light/70 lg:mt-6 lg:text-2xl">
            A Professional <span className="font-semibold text-dark dark:text-white"> Software Engineer</span> having <span className="font-semibold text-dark dark:text-white">5+</span> years of experience and completed<span className="font-semibold text-dark dark:text-white">10+</span>  professional projects. I understand the importance of creating<span className="font-semibold text-dark dark:text-white"> user-centric </span> interfaces that provide an exceptional user experience. My experience working on <span className="font-semibold text-dark dark:text-white">cross-functional</span> teams has provided me with a strong understanding of the importance of collaboration and communication in achieving project success.
            </p>
          </div>
          <div>
          <div className="relative hidden h-[100px] w-[100px] p-4 lg:block">
            <img src="icons/circle-text.svg" alt="" className="absolute inset-0 h-full w-full animate-spin-slow dark:hidden" />
            <img src="icons/circle-text-light.svg" alt="" className="absolute inset-0 hidden h-full w-full animate-spin-slow dark:block" />
            <div className="grid h-full w-full place-content-center rounded-full bg-primary text-light">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-10 w-10">
                <path d="M20 5v30m-5-5 5 5 5-5" />
              </svg>
            </div>
          </div>

          </div>
        </div>

        <div className="mt-6 lg:mt-14">
          <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
            Education and Certification
          </h3>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="group relative rounded-lg border border-transparent bg-light p-4 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
              <div className="flex flex-row gap-4 md:col-span-2 items-center">
                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                  <img src="icons/education.svg" alt="education" className="h-6 w-6 shrink-0" />
                </div>
                <div className="">
                <p className="text-muted">2013 - 2017</p>
                  <h5 className="font-medium leading-normal text-dark dark:text-light xl:text-md">
                    BSc in Computer Science and Engineering
                  </h5>
                  <p className="text-muted">Daffodil Institute of IT</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-lg border border-transparent bg-light p-4 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
              <div className="flex flex-row gap-4 md:col-span-2 items-center">
                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                  <img src="icons/certificate.svg" alt="certificate" className="h-6 w-6 shrink-0" />
                </div>
                <div className="">
                <p className="text-muted">2023</p>
                  <h5 className="font-medium leading-normal text-dark dark:text-light xl:text-md">
                  Programming With Javascript
                  </h5>
                  <p className="text-muted">Meta</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-lg border border-transparent bg-light p-4 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
              <div className="flex flex-row gap-4 md:col-span-2 items-center">
                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                <img src="icons/certificate.svg" alt="certificate" className="h-6 w-6 shrink-0" />
                </div>
                <div className="">
                <p className="text-muted">2021</p>
                  <h5 className="font-medium leading-normal text-dark dark:text-light xl:text-md">
                  NopCommerce Certificate Developer
                  </h5>
                  <p className="text-muted">Nop Commerce</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-lg border border-transparent bg-light p-4 transition hover:border-light hover:bg-white dark:bg-dark-2 dark:hover:border-primary dark:hover:bg-black md:grid-cols-4 xl:gap-10">
              <div className="flex flex-row gap-4 md:col-span-2 items-center">
                <div className="grid h-10 w-10 shrink-0 place-content-center rounded-lg bg-white transition group-hover:bg-light dark:bg-black dark:group-hover:bg-dark-2">
                <img src="icons/certificate.svg" alt="certificate" className="h-6 w-6 shrink-0" />
                </div>
                <div className="">
                <p className="text-muted">2017</p>
                  <h5 className="font-medium leading-normal text-dark dark:text-light xl:text-md">
                  Web Development with PHP 
                  </h5>
                  <p className="text-muted">BITM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:mt-14">
                <h3 className="text-2xl font-medium text-dark dark:text-light lg:text-3xl">
                     Skills ✨
                </h3>
                <div className="mt-8 grid grid-cols-[repeat(auto-fit,_minmax(60px,1fr))] gap-2 lg:grid-cols-[repeat(auto-fit,_minmax(80px,1fr))] lg:gap-4">
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/javascript.svg" alt="javascript" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/reactjs.svg" alt="react" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/nextjs.svg" alt="next" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/vuejs.svg" alt="vue" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/angularjs.svg" alt="angular" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/jquery.svg" alt="jquery" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/html.svg" alt="html5" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/php.svg" alt="PHP" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/wordpress.svg" alt="wordpress" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/aem.svg" alt="AEM" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/scss.svg" alt="scss" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/git.svg" alt="git" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/material-design.svg" alt="material design" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/storybook.svg" alt="storybook" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/figma.svg" alt="Figma" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
                    <div className="grid h-16 place-content-center rounded-lg bg-light p-3 dark:bg-dark-2 lg:h-20 lg:rounded-2xl lg:p-4">
                        <img src="icons/redux.svg" alt="redux" className="h-8 w-8 lg:h-10 lg:w-10" />
                    </div>
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
    </>
  )
}