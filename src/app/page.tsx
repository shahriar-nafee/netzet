import Image from "next/image"
import { localImageLinks } from "./lib/assets"

export default function Home() {
  return (
    <div className="mt-4 lg:mt-[57px] flex flex-col 2xl:flex-row lg:mb-20">
      {/* Left Side Content */}
      <div className="mb-12 lg:mb-0 lg:w-[516px] text-white z-100 order-last 2xl:order-first">
        <h1 className="font-urbanist text-center lg:text-left text-[25px] lg:text-[35px] font-extrabold lg:font-bold leading-tight">
          Want to Turn Social Media Into a Profitable Career?
        </h1>
        <h2 className="font-urbanist text-center lg:text-left text-[25px] lg:text-[35px] font-extrabold lg:font-bold mb-[22px] lg:mb-4 text-[#00E7F9] drop-shadow-[0_4px_2px_#FC004E]">
          Discover your way to success with Fametonic:
        </h2>

        {/* Feature List */}
        <ul className="space-y-3 lg:mb-[30px] text-base font-normal lg:font-semibold">
          <li className="flex items-center">
            <span className="mr-3 flex-shrink-0">
              <Image src={localImageLinks.starIcon} alt="Star Icon" width={22} height={22} />
            </span>
            <span className="text-white">
              Start growing your influence right away—no waiting required!
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 flex-shrink-0">
              <Image src={localImageLinks.starIcon} alt="Star Icon" width={22} height={22} />
            </span>
            <span className="text-white">
              Create viral TikToks and Reels step by step with easy-to-follow lessons
            </span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 flex-shrink-0">
              <Image src={localImageLinks.starIcon} alt="Star Icon" width={22} height={22} />
            </span>
            <span className="text-white">Use a Personal AI Worker to boost your content</span>
          </li>
          <li className="flex items-center">
            <span className="mr-3 flex-shrink-0">
              <Image src={localImageLinks.starIcon} alt="Star Icon" width={22} height={22} />
            </span>
            <span className="text-white">
              Learn from expert-led courses designed for aspiring influencers
            </span>
          </li>
        </ul>

        {/* Button */}
        <div className="flex flex-col">
          <div className="lg:w-[313px] order-last lg:order-first mt-8 lg:mt-0">
            <div className="flex flex-col items-center gap-[10px]">
              <button className="w-full flex items-center justify-center text-white font-bold text-xl bg-[#FC004E] py-3 rounded-xl drop-shadow-[2px_2px_4px_#00E7F9]">
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

          {/* Footer */}
          <div className="text-xs text-[#ABABAB] mt-[22px] lg:mt-[30px] order-first lg:order-last">
            <div className="text-center font-medium lg:text-left">
              <span>By clicking &quot;Get Started&quot;, you agree with </span>
              <span className="cursor-pointer">Terms and Conditions</span>,{" "}
              <span className="cursor-pointer">Privacy Policy</span>,{" "}
              <span className="cursor-pointer">Subscription Terms</span>
            </div>
            <p className="font-medium text-[10px] text-center lg:text-left mt-[25px] lg:mt-3 font-nunito">
              Fametonic 2025 ©All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Phone Mockup */}
      <div className="xl:absolute left-[673px] top-[80px] order-first 2xl:order-last">
        <div className="xl:w-[666px] xl:h-[679px] mx-auto">
          <Image src={localImageLinks.MobileImage} alt="Mobile Image" width={666} height={679} />
        </div>
      </div>
    </div>
  )
}
