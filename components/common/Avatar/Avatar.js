import Link from "next/link";

export function Avatar() {
  return (
        <div className="h-32 w-32 md:64 md:64 bg-gradient-to-r from-blue-400 to-green-300 rounded-full overflow-hidden shadow-lg">
          <img src="https://avatars0.githubusercontent.com/u/15706832?s=460&u=e2262b5777aea47219f3f10ec55e5339ec40be3a&v=4" alt="James Brooks" className="h-32 w-32 flex-shrink-0 rounded-full p-2"></img>
        </div>
  );
}
