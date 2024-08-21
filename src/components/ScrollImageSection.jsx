import React from "react";
import { ContainerScroll } from "./container-scroll-animation";
// CHANGE overflow- to overflow-hidden so the Ipad section wont overflow the other div
export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow- bg-gradient-to-r from-slate-300 to-slate-800">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              as easy as chatting  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                whatsapp chatbot
              </span>
            </h1>
          </>
        }
      >
        <img
          src={`https://res.cloudinary.com/practicaldev/image/fetch/s--741cavWb--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/auzo82le2dydbf2pjk4y.JPG`}
          alt="hero"
          height={720}
          width={1200}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
