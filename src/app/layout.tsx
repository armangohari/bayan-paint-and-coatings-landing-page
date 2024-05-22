import { iranSansFont } from "@/lib/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "کارخانه رنگ بیان",
  description: "رنگ بیان تولید کننده انواع رنگ و پوشش های رنگی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${iranSansFont.className} bg-smooth-white text-smooth-black`}
      >
        {children}
      </body>
    </html>
  );
}
