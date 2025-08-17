import Image from "next/image"
import { localImageLinks } from "./lib/assets"

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Top Banner */}
      <div className="w-full relative bg-linear-to-r/srgb from-[#FC004E] to-[#10CBE0] sm:h-[76px] lg:h-[46px] flex items-center justify-center">
        <div className="text-white font-semibold sm:text-[16px] lg:text-[22px] text-center">
          <span>🚀</span>{" "}
          <span className="text-[#00E7F9] font-extrabold">FRESH BEGINNINGS SALE: &nbsp;</span>
          <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="2xl:w-[1440px] mx-auto xl:relative">
        <div className="px-5 lg:pl-[215px] lg:pr-[211px]">
          {/* Header */}
          <header className="flex justify-center items-center lg:items-start lg:justify-between pt-[35px]">
            <div>
              <Image
                src={localImageLinks.BrandImage}
                alt="Brand Logo"
                width={173}
                height={74}
                className="w-[105px] h-[45px] lg:w-[173px] lg:h-[74px]"
              />
            </div>
            <nav className="lg:flex space-x-10 hidden z-10">
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

          {/* Main Content */}
          <div className="mt-[57px] flex flex-col 2xl:flex-row lg:mb-20">
            {/* Left Side Content */}
            <div className="mb-12 lg:mb-0 lg:w-[516px] text-white z-100 order-last 2xl:order-first">
              <h1 className="font-urbanist text-center lg:text-left text-[25px] lg:text-[35px] font-bold leading-tight">
                Want to Turn Social Media Into a Profitable Career?
              </h1>
              <h2 className="font-urbanist text-center lg:text-left text-[25px] lg:text-[35px] font-bold mb-8 text-[#00E7F9] drop-shadow-[0_4px_2px_#FC004E]">
                Discover your way to success with Fametonic:
              </h2>

              {/* Feature List */}
              <ul className="space-y-4 lg:mb-[30px] text-base font-normal lg:font-semibold">
                <li className="flex items-start">
                  <span className="mr-3 flex-shrink-0">
                    <Image src={localImageLinks.starIcon} alt="Star Icon" width={22} height={22} />
                  </span>
                  <span className="text-white">
                    Start growing your influence right away—no waiting required!
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex-shrink-0">
                    <Image src={localImageLinks.starIcon} alt="Star Icon" width={22} height={22} />
                  </span>
                  <span className="text-white">
                    Create viral TikToks and Reels step by step with easy-to-follow lessons
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex-shrink-0">
                    <Image src={localImageLinks.starIcon} alt="Star Icon" width={22} height={22} />
                  </span>
                  <span className="text-white">Use a Personal AI Worker to boost your content</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex-shrink-0">
                    <Image src={localImageLinks.starIcon} alt="Star Icon" width={22} height={22} />
                  </span>
                  <span className="text-white">
                    Learn from expert-led courses designed for aspiring influencers
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="flex flex-col">
                <div className="lg:w-[313px] order-last lg:order-first mt-8 lg:mt-0">
                  <div className="flex flex-col items-center gap-[10px]">
                    <button className="w-full flex items-center justify-center text-white font-bold text-xl bg-[#FC004E] py-2 rounded-xl drop-shadow-[2px_2px_4px_#00E7F9]">
                      <span className="mr-3">GET STARTED</span>{" "}
                      <span>
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.19238 6.26465C7.60266 6.67918 7.60225 7.33287 7.19141 7.74707L2.29102 12.6875C1.87768 13.1039 1.22189 13.104 0.808594 12.6875C0.607462 12.4847 0.50002 12.2157 0.5 11.9512L0.5 11.7451L0.538086 11.707C0.551454 11.6485 0.568204 11.5907 0.591797 11.5352C0.644656 11.4108 0.722378 11.2983 0.819336 11.2041L4.97949 7L0.818359 2.7959L0.819336 2.79492C0.408805 2.3804 0.4084 1.72679 0.819336 1.3125C1.23271 0.895833 1.88939 0.895784 2.30273 1.3125L2.30273 1.31348L7.19238 6.26465Z"
                            fill="white"
                            stroke="white"
                          />
                        </svg>
                      </span>
                    </button>
                    <p className="text-white text-xs">1-minute quiz for personalized insights</p>
                  </div>
                </div>

                {/* Footer Text */}
                <div className="text-xs text-[#ABABAB] mt-[22px] lg:mt-[30px] order-first lg:order-last">
                  <div className="text-center lg:text-left">
                    <span>By clicking &quot;Get Started&quot;, you agree with </span>
                    <span className="cursor-pointer">Terms and Conditions</span>,{" "}
                    <span className="cursor-pointer">Privacy Policy</span>,{" "}
                    <span className="cursor-pointer">Subscription Terms</span>
                  </div>
                  <p className="font-nunito font-medium text-[10px] text-center lg:text-left mt-4">
                    Fametonic 2025 ©All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className="xl:absolute left-[673px] top-[80px] order-first 2xl:order-last">
              <div className="xl:w-[666px] xl:h-[679px] mx-auto">
                <Image
                  src={localImageLinks.MobileImage}
                  alt="Mobile Image"
                  width={666}
                  height={679}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
