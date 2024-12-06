import Image, { StaticImageData } from "next/image";

type FeatureCardProps = {
  icon: StaticImageData;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="glass-box flex max-w-sm flex-col items-center justify-center gap-5 p-12">
      {/* Icon */}
      <Image src={icon} alt={title} className="h-28 w-28" unoptimized />
      {/* Title */}
      <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
      {/* Description */}
      <p className="text-justify text-sm font-medium md:text-base">{desc}</p>
    </div>
  );
}
