import { footerImage } from "@/lib/images";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-32">
      <Image
        src={footerImage}
        alt="پخش رنگ آبی در آب"
        className="absolute bottom-0 left-0 right-0 -z-10 mx-auto h-screen object-cover md:object-contain"
      />
      <div className="absolute bottom-3 flex w-full flex-col gap-1 text-center text-white">
        <div className="referral-text-shadow text-sm">
          طراحی و توسعه توسط{" "}
          <a
            href="https://armangohari.com"
            target="_blank"
            className="font-bold hover:brightness-200 active:brightness-95"
          >
            armangohari.com
          </a>
        </div>
        <span className="text-xs">
          تمامی حقوق این وبسایت محفوظ و متعلق به bayanpaint.com می باشد.
        </span>
      </div>
    </footer>
  );
}
