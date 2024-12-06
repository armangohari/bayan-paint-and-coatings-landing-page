type AboutCardProps = {
  title: string;
  desc: string;
};

export default function AboutCard({ title, desc }: AboutCardProps) {
  return (
    <div className="glass-box glass-box-shadow flex max-w-4xl flex-col items-center justify-center gap-5 p-8 md:p-16">
      {/* AboutCard Title */}
      <h3 className="text-xl font-bold md:text-3xl">{title}</h3>
      {/* AboutCard Description */}
      <p className="px-3 text-justify text-sm font-medium md:text-lg">{desc}</p>
    </div>
  );
}
