import MobileMenu from "@/components/MobileMenu";
import {
  bayanLogoSmallIcon,
  newspaperIcon,
  phoneCallIcon,
  questionMarkIcon,
  shoppingCartIcon,
} from "@/lib/icons";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed z-10 mt-6 w-full">
      <nav className="mx-auto flex w-[80vw] items-center justify-between rounded-3xl bg-white/95 px-5 py-4 md:w-[75vw]">
        {/* Logo Icon */}
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary outline outline-white md:h-12 md:w-12 md:rounded-2xl">
          <Image
            src={bayanLogoSmallIcon}
            alt="رنگ بیان"
            className="h-7 w-7 md:scale-125"
            unoptimized
          />
        </div>

        {/* Desktop Navbar Links */}
        <div className="max-md:hidden">
          <ul className="flex items-center gap-9 font-bold text-smooth-black/75">
            <li className="link-hover-active">
              <a href="#features" className="flex items-center gap-1.5">
                <Image
                  src={newspaperIcon}
                  alt="خصوصیات ما"
                  className="h-7 w-7"
                  unoptimized
                />
                <span>خصوصیات ما</span>
              </a>
            </li>
            <li className="link-hover-active">
              <a href="#products" className="flex items-center gap-1.5">
                <Image
                  src={shoppingCartIcon}
                  alt="محصولات ما"
                  className="h-7 w-7"
                  unoptimized
                />
                <span>محصولات ما</span>
              </a>
            </li>
            <li className="link-hover-active">
              <a href="#about" className="flex items-center gap-1.5">
                <Image
                  src={questionMarkIcon}
                  alt="درباره ما"
                  className="h-7 w-7"
                  unoptimized
                />
                <span>درباره ما</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Contact Button */}
        <div className="link-hover-active max-md:hidden">
          <a
            href="#contact"
            className="cyan-box-shadow flex items-center gap-2 rounded-2xl bg-primary px-3 py-2.5 font-bold text-smooth-white"
          >
            <span>تماس با ما</span>
            <Image src={phoneCallIcon} alt="تماس با ما" className="h-7 w-7" />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
