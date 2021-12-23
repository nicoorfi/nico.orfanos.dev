import clsx from "clsx";

import { Image } from "..";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center align-middle max-w-sm mx-auto`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-28 h-28"
        src="https://avatars0.githubusercontent.com/u/15706832?s=460&u=e2262b5777aea47219f3f10ec55e5339ec40be3a&v=4"
        alt="Profile"
      />

      <p className="text-base leading-7">
        <b className="text-3xl">Nico Orfanos</b>
        <br></br>
        <a className="font-medium text-black align-baseline flex hover:no-underline hover:text-gray-700" href={`https://twitter.com/@nicoorfi`}>

<span className="flex items-center justify-center pr-1"> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.72558 4.75625L9.76677 5.4483L9.08034 5.36356C6.58175 5.03872 4.39891 3.9371 2.54555 2.08693L1.63947 1.16891L1.40608 1.84684C0.911856 3.35804 1.22761 4.95398 2.25725 6.02735C2.8064 6.62054 2.68284 6.70528 1.73557 6.35219C1.40608 6.2392 1.11778 6.15446 1.09033 6.19683C0.994228 6.2957 1.32371 7.58092 1.58456 8.08937C1.9415 8.79553 2.66911 9.48758 3.46537 9.89716L4.13806 10.222L3.34181 10.2361C2.57301 10.2361 2.54555 10.2502 2.62792 10.5468C2.9025 11.4649 3.98705 12.4394 5.19516 12.8631L6.04633 13.1597L5.30499 13.6116C4.20671 14.2613 2.91622 14.6285 1.62574 14.6567C1.00796 14.6709 0.5 14.7273 0.5 14.7697C0.5 14.911 2.17488 15.7019 3.14961 16.0126C6.07379 16.9306 9.54711 16.5351 12.1555 14.9674C14.0089 13.8517 15.8622 11.6343 16.7271 9.48758C17.1939 8.34359 17.6607 6.25333 17.6607 5.25057C17.6607 4.60089 17.7019 4.51615 18.4707 3.73937C18.9237 3.28742 19.3493 2.7931 19.4317 2.65187C19.569 2.38352 19.5552 2.38352 18.8551 2.62362C17.6881 3.04732 17.5234 2.99083 18.1 2.35528C18.5256 1.90333 19.0335 1.08417 19.0335 0.844077C19.0335 0.801707 18.8276 0.872324 18.5942 0.999434C18.3471 1.14067 17.798 1.35252 17.3861 1.47963L16.6448 1.71973L15.9721 1.25365C15.6014 0.999434 15.0797 0.716967 14.8051 0.632227C14.105 0.434499 13.0342 0.462746 12.4026 0.68872C10.6866 1.32427 9.60203 2.96258 9.72558 4.75625Z"
            fill="#55ACEE"
          />
        </svg>
</span>

<span className="font-semibold">
          @nicoorfi
</span>
        </a>
      </p>
    </div>
  );
}
