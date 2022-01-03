import { useState } from "react";
import Logo from './Logo';
import LogoMobile from './LogoMobile';
import { Header } from "@components/common";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex justify-start">
            <div className="flex items-center px-5">
                <Header></Header>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4 px-5">
          <a href="https://app.sigmie.com" className="text-black block px-3 py-2 rounded-md text-base font-semibold">Posts</a>
          <Link href={"/post/[slug]"} as={`/post/uses`}>
            <a href="https://docs.sigmie.com" className="text-black hover:no-underline hover:text-blue-500 block px-3 py-2 rounded-md text-base font-semibold">Uses</a>
          </Link>
              </div>
          </div>

          <div className="block sm:hidden">
            <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="px-5 pt-2 pb-3 space-y-1 bg-gray-50">
          <a href="https://app.sigmie.com" target="_blank" className="text-black hover:no-underline hover:text-blue-500 block px-3 py-2 rounded-md text-base font-semibold">Posts</a>
          <Link href={"/post/[slug]"} as={`/post/uses`}>
            <a href="https://docs.sigmie.com" className="text-black hover:no-underline hover:text-blue-500 block px-3 py-2 rounded-md text-base font-semibold">Uses</a>
          </Link>
        </div>
      </div>


    </nav>

  );
}

