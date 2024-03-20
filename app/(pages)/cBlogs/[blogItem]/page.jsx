import { getBlogPosts } from "../../../../api/api"

const blogs = await getBlogPosts();

export async function generateStaticParams() {
    return blogs.map((item) => ({
        blogItem: item.id.toString()
    }))
}

export default function blogItem({params}){
    let blogItem = blogs.find(blog => blog.id === Number(params.blogItem));
    return(
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
                <figure className="aspect-video overflow-hidden rounded-lg">
                    <img src={blogItem.image.fields.file.url} alt="blog" className="h-full w-full object-cover" />
                </figure>
                <article className="prose mt-6 dark:prose-invert xl:prose-lg prose-headings:font-medium prose-blockquote:border-primary lg:mt-10">
                    <h2 className="text-xl font-medium xl:text-3xl text-dark transition dark:text-light/70 mb-8">{blogItem.title}</h2>
                    <p className="text-lg text-dark transition dark:text-light/70">
                      {blogItem.description.content[0].content[0].value}
                    </p>
                </article>

                <div className="mt-10 flex flex-wrap justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-5">
                        <h6 className="text-lg font-medium text-dark dark:text-light">Type:</h6>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center justify-center gap-2 rounded border border-light bg-white px-2 py-1 text-center text-xs font-medium leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
                                {blogItem.type}
                            </span>
                        </div>
                        <h6 className="text-lg font-medium text-dark dark:text-light">Date:</h6>

                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center justify-center gap-2 rounded border border-light bg-white px-2 py-1 text-center text-xs font-medium leading-none text-dark transition hover:bg-primary hover:text-white dark:border-dark dark:bg-dark-2 dark:text-light/70 dark:hover:bg-primary dark:hover:text-white">
                                {blogItem.date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}