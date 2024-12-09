"use client";
import Link from 'next/link'
import projects from "./api/projects.json"
import services from "./api/services.json"
import skills from "./api/skills.json"
import experiences from "./api/experiences.json"

export default function Home() {
	return (
		<>
			<div className="grid grid-cols-1 gap-4 lg:gap-6">
				<div
					className="group rounded-2xl bg-white px-6 pt-0 shadow dark:bg-black dark:shadow-dark">
					<h3
						className="relative z-10 bg-white pb-2 pt-6 text-2xl font-semibold dark:bg-black dark:text-light">
						Work Experience
					</h3>

					<div
						className="max-h-[200px] space-y-4 overflow-hidden pb-6 pt-4 [&::-webkit-scrollbar-thumb]:bg-gray-400 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-0">
						<div
							className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
							{experiences.map((item) => (

								<div key={item.id} className="flex flex-col gap-1 md:flex-row md:gap-5 xl:gap-10">
									<p
										className="flex-shrink-0 mt-1 text-sm font-medium text-muted dark:text-light/70">
										{item.year}
									</p>
									<div className="flex items-center gap-3">
										<div
											className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
											<img src="/icons/company.svg" alt="company" className="h-5 w-5" />
										</div>
										<div className="">
											<h6
												className="text-base font-semibold text-dark dark:text-light/70">
												{item.company}
											</h6>
											<p className="text-sm text-muted">
												{item.designation}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
						<div
							className="animate-scrollY space-y-4 group-hover:[animation-play-state:paused]">
							{experiences.map((item) => (

								<div key={item.id} className="flex flex-col gap-1 md:flex-row md:gap-5 xl:gap-10">
									<p
										className="flex-shrink-0 mt-1 text-sm font-medium text-muted dark:text-light/70">
										{item.year}
									</p>
									<div className="flex items-center gap-3">
										<div
											className="grid h-8 w-8 shrink-0 place-content-center rounded-lg bg-light dark:bg-dark-2">
											<img src="/icons/company.svg" alt="company" className="h-5 w-5" />
										</div>
										<div className="">
											<h6
												className="text-base font-semibold text-dark dark:text-light/70">
												{item.company}
											</h6>
											<p className="text-sm text-muted">
												{item.designation}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
					<h3 className="text-2xl font-semibold dark:text-light">My Expertise Area</h3>

					<div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
						{skills.map((item, index) => (
							index < 6 && (

								<div key={item.id} className="text-center">
									<div
										className="grid place-content-center rounded-lg bg-light p-3 dark:bg-dark-2">
										<img src={item.imgUrl} alt={item.imgAlt} className="h-8 w-8" />
									</div>
									<p className="mt-1 text-base font-medium text-dark dark:text-light/70">
										{item.name}
									</p>
								</div>
							)
						))}
					</div>
				</div>
			</div>
			<div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
				<div className="flex flex-wrap items-center justify-between gap-2">
					<h3 className="text-2xl font-semibold dark:text-light">Recent Projects</h3>
					<Link href="/portfolio" className='inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary'>
						<span>All Projects</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							className="h-5 w-5">
							<path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
						</svg>
					</Link>
				</div>

				<div className="mt-6 space-y-6">
					{projects.map((item, index) => (
						index < 2 && (
							<div key={item.id}
								className="group relative overflow-hidden rounded-lg bg-light p-4 pb-0 dark:bg-dark-2 md:p-6 md:pb-0">
								<div className="relative aspect-6/4 overflow-hidden rounded-t-lg">
									<img
										src={item.imgUrl}
										alt={item.imgAlt}
										className="h-full w-full rounded-t-lg object-cover object-top transition" />

									<a
										href={item.url}
										target="_blank"
										className="project-gallery-link absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-white text-primary shadow-lg transition lg:invisible lg:-translate-y-[40%] lg:opacity-0 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:opacity-100">
										<img
											src="/icons/external-link.svg"
											className="h-6 w-6"
											alt="hbk" />
									</a>
								</div>

								<div
									className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
									<span
										className="rounded bg-white px-2 py-1 text-xs font-medium text-primary shadow">
										Corporate
									</span>
								</div>
							</div>

						)
					))}

				</div>
			</div>
			<div
				className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2">
				<div className="flex flex-wrap items-center justify-between gap-2">
					<h3 className="text-2xl font-semibold dark:text-light">Services I Offer</h3>
					<Link href="/services" className='inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary'>
						<span>See All Services</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							className="h-5 w-5">
							<path d="M4.167 10h11.666m-4.999 5 5-5m-5-5 5 5" />
						</svg>
					</Link>

				</div>

				<div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
					{services.map((item, index) => (
						index < 4 && (
							<div key={item.id} className="rounded-2xl bg-light p-2 text-center dark:bg-dark-2 md:p-4">
								<div
									className="grid place-content-center rounded-lg bg-white p-6 dark:bg-black">
									<img src={item.imgUrl} alt={item.imgAlt} className="h-12 w-12 text-primary lg:h-16 lg:w-16"></img>
								</div>
								<p className="mt-3 text-base font-medium text-dark dark:text-light/70">
									{item.name}
								</p>
							</div>
						)
					))}
				</div>
			</div>
			<div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
				<marquee
					behavior="scroll"
					direction="left"
					className="overflow-hidden text-nowrap rounded-lg bg-light p-3 text-lg font-medium text-muted dark:bg-dark-2">
					Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀
					Crafting Digital Experiences 🎨
				</marquee>

				<h2
					className="mt-4 text-[40px] font-semibold leading-snug text-dark dark:text-light">
					Let&apos;s👋 <br />
					Work Together
				</h2>
				<Link
					href="/contact"
					className="mt-6 inline-flex items-center justify-center gap-2 border-b text-center text-base text-primary transition hover:border-b-primary dark:border-b-muted dark:hover:border-b-primary">
					<span>Let&apos;s Talk</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						className="h-5 w-5">
						<path d="M17.5 11.667v-5h-5" />
						<path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
					</svg>
				</Link>
			</div>
		</>
	);
}
