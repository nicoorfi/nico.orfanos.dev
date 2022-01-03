import Link from "next/link";

export function Header() {
  return (
          <Link href={"/"} as={`/`}>
            <a href="https://nico.orfanos.dev" className="gradiented text-5xl font-bold header">
              Nico Orfanos
            </a>
          </Link>
  );
}
