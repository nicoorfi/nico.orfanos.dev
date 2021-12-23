import { useState, useEffect } from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import Navigation from "./Navigation";

export function Layout({ children }) {
  return (
    <div className="w-full min-h-screen">

        <nav className="bg-white border-b border-gray-200">
          <Navigation />
        </nav>

      <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased text-semibold text-gray-800">
        <Header />
        <main>{children}</main>
        <footer className="text-lg">
          {/* © {new Date().getFullYear()} */}
        </footer>
      </div>
    </div>
  );
}

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { pathname } = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked) => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme("dark");
    else setTheme("light");
  };

  const isRoot = pathname === "/";
  const isDarkMode = resolvedTheme === "dark";

  return (
    <header
      className={clsx("flex items-center justify-between ", {
        "mb-8": isRoot,
        "mb-2": !isRoot,
      })}
    >
      <div className={"max-w-md"}>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
    </header>
  );
};

const LargeTitle = () => (
  <h1></h1>
);

const SmallTitle = () => (
  <h1></h1>
);
