import { heroImage } from "@/lib/images";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Hero Image */}
      <Image
        src={heroImage}
        alt="پخش رنگ آبی در آب"
        className="absolute left-0 right-0 -z-10 mx-auto md:w-[40vw]"
        priority
      />
      {/* Hero Title */}
      <div className="z-10 flex h-screen flex-col items-center justify-center gap-8 font-black text-white md:gap-20">
        {/* Company Name */}
        <h1 className="cyan-text-shadow text-6xl md:text-9xl">
          رنـــگ بــیـــان
        </h1>
        {/* Company Line of Work */}
        <h2 className="cyan-text-shadow flex flex-col gap-2 text-center text-2xl tracking-wide md:text-5xl">
          <span>تولـیـد کـنـنـده انـواع</span>
          <span>رنـگ و پـوشـش هـای رنـگـی</span>
        </h2>
      </div>
    </section>
  );
}
