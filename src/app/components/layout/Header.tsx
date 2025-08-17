import { localImageLinks } from "@/app/lib/assets"
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex justify-center items-center lg:items-start lg:justify-between pt-[16px] lg:pt-[35px]">
      <div>
        <Image
          src={localImageLinks.BrandImage}
          alt="Brand Logo"
          width={173}
          height={74}
          className="w-[105px] h-[45px] lg:w-[173px] lg:h-[74px]"
        />
      </div>
      <nav className="lg:flex space-x-10 hidden z-10 font-semibold">
        <a href="#" className="text-[#A9A9A9] text-lg">
          About us
        </a>
        <a href="#" className="text-[#A9A9A9] text-lg">
          Contact
        </a>
      </nav>
      <nav className="lg:hidden absolute right-7">
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1.03597"
            x2="19"
            y2="1.03597"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1"
            y1="7.03597"
            x2="19"
            y2="7.03597"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="1"
            y1="13.036"
            x2="19"
            y2="13.036"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </nav>
    </header>
  )
}
