"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Try",
    },
    {
      text: "out",
    },
    {
      text: "Agreemint",
    },
    {
      text: "for",
    },
    {
      text: "Smooth",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Property",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Agreement.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem] border-t border-gray-400  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
        Get started free
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact us
        </button>
      </div>
    </div>
  );
}
