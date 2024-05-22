type AboutCardProps = {
  title: string;
  desc: string;
};

export default function AboutCard({ title, desc }: AboutCardProps) {
  return (
    <div className="glass-box glass-box-shadow flex max-w-sm flex-col items-center justify-center gap-8 p-8 md:max-w-7xl">
      {/* AboutCard Title */}
      <h3 className="text-2xl font-bold">{title}</h3>
      {/* AboutCard Description */}
      <p className="px-8 text-justify font-medium">{desc}</p>
    </div>
  );
}
