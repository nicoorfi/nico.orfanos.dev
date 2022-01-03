import clsx from "clsx";

import { Image, Avatar } from "..";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center align-middle mx-auto`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-28 h-28"
        src="https://avatars0.githubusercontent.com/u/15706832?s=460&u=e2262b5777aea47219f3f10ec55e5339ec40be3a&v=4"
        alt="Profile"
      />

      <p className="text-base leading-7">
        By &nbsp;
        <b className="text-lg">Nico Orfanos</b>
        <br></br>
        Full-Stack developer and Elasticsearch enthusiast.
        <a className="font-medium text-black align-baseline flex hover:no-underline hover:text-gray-700" href={`https://twitter.com/@nicoorfi`}>

<span className="font-medium">
            Find me on&nbsp;<a className="text-gray-800 underline" target="_blank" href="https://twitter.com/nicoorfi">Twitter</a>&nbsp;or&nbsp;<a className="text-gray-800 underline" target="_blank" href="https://github.com/nicoorfi">Github</a>.
</span>
        </a>
      </p>
    </div>
  );
}
