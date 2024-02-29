import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
      <HorizontalScrollCarousel />
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
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
      className="group relative h-[650px] w-[450px] overflow-hidden bg-neutral-200"
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
        <p className="bg-gradient-to-br from-white/5 to-white/0 p-8 text-4xl font-black uppercase text-black backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "https://sdgs.un.org/sites/default/files/2022-06/Screen%20Shot%202022-06-30%20at%209.38.35%20AM.png",
    title: "2022 SDG7 TAG Policy Briefs",
    id: 1,
  },
  {
    url: "https://sdgs.un.org/sites/default/files/2022-06/Screen%20Shot%202022-06-30%20at%209.25.33%20AM.png",
    title: "Tracking SDG7",
    id: 2,
  },
  {
    url: "https://sdgs.un.org/sites/default/files/2023-03/screen_shot_2023-03-16_at_6.26.38_pm_0.png",
    title: "2030 Agenda For Sustainable Development",
    id: 3,
  },
  {
    url: "https://sdgs.un.org/sites/default/files/2023-03/screen_shot_2023-03-02_at_11.11.28_am_0.png",
    title: "Sustainable Development Goal interactions through a climate lens",
    id: 4,
  },
  {
    url: "https://sdgs.un.org/sites/default/files/2023-09/un_climate_sdg_synergies_report-cover_1.png",
    title: "Synergy Solutions for a World in Crisis",
    id: 5,
  }
];