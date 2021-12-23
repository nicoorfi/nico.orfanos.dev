import { useState } from "react";
import Logo from './Logo';
import LogoMobile from './LogoMobile';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="hidden sm:block sm:ml-6">

              <div className="flex space-x-4">
                <a href="https://nico.orfanos.blog" className="text-blue-500 px-3 py-2 rounded-md text-lg font-medium">nico.orfanos.blog</a>
              </div>
          </div>
        </div>

      </div>
    </nav>

  );
}

