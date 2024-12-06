import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ContactCardProps = {
  label: string;
  content: string | string[];
  linkIcon: StaticImageData;
  linkTitle: string;
  linkUrl: string;
};

export default function ContactCard({
  label,
  content,
  linkIcon,
  linkTitle,
  linkUrl,
}: ContactCardProps) {
  return (
    <div className="glass-box flex w-80 flex-col items-center justify-center gap-8 bg-white p-8 font-bold md:min-h-72 md:justify-between">
      {/* Label */}
      <span className="rounded-xl bg-white/20 px-3.5 py-1.5 text-lg">
        {label}
      </span>
      {/* Content (single string or new-line separated strings) */}
      <span dir="ltr" className="text-center text-lg">
        {Array.isArray(content)
          ? content.flatMap((item, idx) => [
              item,
              idx < content.length - 1 && <br key={idx} />,
            ])
          : content}
      </span>
      {/* Link */}
      <Link
        href={linkUrl}
        target="_blank"
        className="cyan-box-shadow link-hover-active flex items-center justify-between gap-1.5 rounded-2xl bg-white px-3.5 py-2.5 text-sm active:shadow-inner"
      >
        {/* Link Icon */}
        <Image src={linkIcon} alt={linkTitle} className="h-6 w-6" />
        {/* Link Title */}
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
