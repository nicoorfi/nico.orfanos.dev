import { useState } from "react";
import Logo from './Logo';
import LogoMobile from './LogoMobile';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`h-6 w-6 ${open ? 'hidden' : 'block'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`h-6 w-6 ${open ? 'block' : 'hidden'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <LogoMobile></LogoMobile>
              <Logo></Logo>
            </div>
            <div className="hidden sm:block sm:ml-6">
              {/* Middle */}
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a href="https://app.sigmie.com" className="text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Application</a>
                <a href="https://docs.sigmie.com" className="text-gray-500 px-3 py-2 rounded-md text-sm font-medium">Documentation</a>
              </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${open ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="https://app.sigmie.com" className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium">Application</a>
          <a href="https://docs.sigmie.com" className="text-gray-500 block px-3 py-2 rounded-md text-base font-medium">Documentation</a>
        </div>
      </div>
    </nav>

  );
}

