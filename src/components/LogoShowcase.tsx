import { bayanLogoMediumIcon } from "@/lib/icons";
import Image from "next/image";

export default function LogoShowcase() {
  return (
    <section className="my-32">
      <Image
        src={bayanLogoMediumIcon}
        alt="لوگوی رنگ بیان"
        className="mx-auto drop-shadow-xl"
      />
    </section>
  );
}
