"use client";

import {
  closeIcon,
  menuIcon,
  newspaperIcon,
  phoneCallIcon,
  questionMarkIcon,
  shoppingCartIcon,
} from "@/lib/icons";
import { clsx } from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /**
   * Use ref and effect to make the hidden menu container visible in order for
   * `animate-collapse` animation to not have an effect on page initial load.
   */
  const menuContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      menuContainerRef.current?.classList.remove("invisible");
    }, 550); // 0.5s `animate-contract` animation duration hence the 500ms delay + 50ms slippage
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <div className="relative">
      {/* Mobile Menu Button */}
      <button
        className="cyan-box-shadow grid h-9 w-9 place-items-center rounded-xl bg-primary transition-all active:scale-95 active:bg-primary/50 active:shadow-inner"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <Image src={closeIcon} alt="بستن منو" />
        ) : (
          <Image src={menuIcon} alt="منو" />
        )}
      </button>

      {/* Mobile Menu Container */}
      <div ref={menuContainerRef} className="invisible">
        {/* Mobile Menu Background */}
        <div
          className={clsx(
            "mobile-menu-container absolute left-0 top-0 -z-10 h-9 w-9 rounded-full",
            isMenuOpen ? "animate-expand" : "animate-contract",
          )}
        />
        {/* Mobile Menu Links */}
        <ul
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 -z-10 flex flex-col items-center justify-center gap-12 text-2xl font-medium text-smooth-black/75",
            isMenuOpen ? "animate-fade-in" : "animate-fade-out",
          )}
        >
          <li className="transition-transform active:scale-95">
            <a
              href="#features"
              className="glass-box flex w-56 items-center justify-between px-5 py-3"
              onClick={closeMenu}
            >
              <Image
                src={newspaperIcon}
                alt="خصوصیات ما"
                className="h-10 w-10"
              />
              <span>خصوصیات ما</span>
            </a>
          </li>
          <li className="transition-transform active:scale-95">
            <a
              href="#products"
              className="glass-box flex w-56 items-center justify-between px-5 py-3"
              onClick={closeMenu}
            >
              <Image
                src={shoppingCartIcon}
                alt="محصولات ما"
                className="h-10 w-10"
              />
              <span>محصولات ما</span>
            </a>
          </li>
          <li className="transition-transform active:scale-95">
            <a
              href="#about"
              className="glass-box flex w-56 items-center justify-between px-5 py-3"
              onClick={closeMenu}
            >
              <Image
                src={questionMarkIcon}
                alt="درباره ما"
                className="h-10 w-10"
              />
              <span>درباره ما</span>
            </a>
          </li>
          <li className="transition-transform active:scale-95">
            <a
              href="#contact"
              className="cyan-box-shadow flex w-56 items-center justify-between rounded-3xl bg-primary px-5 py-3 text-smooth-white"
              onClick={closeMenu}
            >
              <Image
                src={phoneCallIcon}
                alt="تماس با ما"
                className="h-10 w-10"
              />
              <span>تماس با ما</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
