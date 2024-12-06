import Image, { StaticImageData } from "next/image";

type ProductCardProps = {
  image: StaticImageData;
  title: string;
  desc: string;
};

export default function ProductCard({ image, title, desc }: ProductCardProps) {
  return (
    <div className="flex max-w-sm flex-col items-center justify-center gap-8 md:max-w-full md:gap-40 md:odd:flex-row md:even:flex-row-reverse ">
      {/* Image */}
      <Image
        src={image}
        alt={title}
        className="w-full rounded-3xl md:h-[30vw] md:w-[30vw]"
        priority
      />

      <div className="flex flex-col items-center justify-center gap-8 md:items-start">
        {/* Title */}
        <h3 className="text-xl font-bold md:text-3xl">{title}</h3>
        {/* Description */}
        <p className="px-5 text-justify text-sm font-medium leading-loose md:px-0 md:text-lg">
          {desc}
        </p>
      </div>
    </div>
  );
}
