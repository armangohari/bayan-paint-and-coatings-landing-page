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
      <div className="cyan-text-shadow z-10 flex h-screen flex-col items-center justify-center gap-8 font-black text-white md:gap-20">
        {/* Company Name */}
        <h1 className="text-5xl md:text-9xl">رنــگ بــیــان</h1>
        {/* Company Line of Work */}
        <h2 className="text-center text-lg tracking-wide md:text-4xl">
          تولـیـد کـنـنـده انـواع <br /> رنـگ و پـوشـش هـای رنـگـی
        </h2>
      </div>
    </section>
  );
}
