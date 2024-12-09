"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Pagination from '../../_components/Pagination';
import { getBlogPosts } from '../../../api/api';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(4);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getBlogPosts();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = blogs.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(blogs.length / recordsPerPage);

  return (
    <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark lg:col-span-2 lg:p-10">
      <div className="">
        <h2 className="text-3xl font-semibold leading-tight text-dark dark:text-light lg:text-[40px] lg:leading-tight">
          My Recent Article
        </h2>
        {/* <p className="mt-4 text-lg text-muted dark:text-light/70">
          To die before you die, if you are assuming that living is about the attachment of everything physically then dying is detachment of everything physically.
        </p> */}
      </div>
      <div className="mt-10 lg:mt-14">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
          {currentRecords.map((item) => (
            <div key={item.id} className="">
              <div className="relative">
                <Link href={`cBlogs/${item.id}`} className="group block aspect-6/4 overflow-hidden rounded-lg">
                  <img src={item.image.fields.file.url} alt="blog" className="h-full w-full rounded-lg object-cover transition duration-700 group-hover:scale-105" />
                </Link>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center justify-center gap-2 rounded bg-white px-2 py-1 text-center text-xs leading-none text-primary shadow transition hover:bg-primary hover:text-white">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-medium xl:text-2xl">
                  <Link href={`cBlogs/${item.id}`} className="inline-block text-dark transition hover:text-primary dark:text-light/70 dark:hover:text-primary">
                    {item.title}
                  </Link>
                </h2>
                <ul className="mt-4 flex flex-wrap items-center gap-2">
                  <li className="relative text-sm text-muted/50 before:mr-1 dark:text-muted">
                    Published: {item.date}
                  </li>
                </ul>
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
    </div>
  );
}
