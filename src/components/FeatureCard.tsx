import Image, { StaticImageData } from "next/image";

type FeatureCardProps = {
  icon: StaticImageData;
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: FeatureCardProps) {
  return (
    <div className="glass-box flex max-w-sm flex-col items-center justify-center gap-10 p-12">
      {/* Icon */}
      <Image src={icon} alt={title} className="h-28 w-28" unoptimized />
      {/* Title */}
      <h3 className="text-2xl font-bold">{title}</h3>
      {/* Description */}
      <p className="text-justify font-medium">{desc}</p>
    </div>
  );
}
