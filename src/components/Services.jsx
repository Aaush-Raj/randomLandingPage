

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-20 items-center justify-center">
        <span className="font-semibold uppercase text-gray-500">
        Discover the Application's Features

        </span>
      </div>
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-4xl font-black uppercase text-white backdrop-blur-md">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Services;
const cards = [
  {
    url: "https://agreemint.pro/assets/instant-agreemint-creation-KAux1fkI.svg",
    title: "Instant Agreement Creation",
    id: 1,
  },
  {
    url: "https://agreemint.pro/assets/accessibility-cVV9pUxv.svg",
    title: "Accessibility Anytime, Anywhere",
    id: 2,
  },
  {
    url: "https://agreemint.pro/assets/multilingual-support-BX4zNWST.svg",
    title: "Multilingual Support",
    id: 3,
  },
  {
    url: "https://agreemint.pro/assets/ease-of-use-DHK3Sv0u.svg",
    title: "Ease of Use",
    id: 4,
  },
  {
    url: "https://agreemint.pro/assets/customization-VGj3FGJy.svg",
    title: "Customization and Tailoring",
    id: 5,
  },
  {
    url: "https://agreemint.pro/assets/delivery-Dxd96tBJ.svg",
    title: "Doorstep Delivery",
    id: 6,
  },
  // {
  //   url: "../assets/features/",
  //   title: "Title 7",
  //   id: 7,
  // },
];