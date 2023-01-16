import { CheckBadgeIcon } from "@heroicons/react/24/solid";

import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

function Hero() {
  return (
    <div className="flex flex-col items-center space-y-5">
      {/* image */}
      <div className="w-fit p-[1px] bg-gradient-to-br from-zinc-100 to-pink-600 rounded-full">
        <img
          className="w-20 h-20 rounded-full object-cover object-top bg-white"
          src="/man.png"
          alt=""
        />
      </div>
      <div className="space-x-2 flex items-center">
        <span className={`font-bold text-lg text-zinc-800 ${inter.className}`}>
          @ashikrana49
        </span>
        <CheckBadgeIcon className="icon text-sky-500" />
      </div>
    </div>
  );
}

export default Hero;
