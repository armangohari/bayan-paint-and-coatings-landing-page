import { iranSansFont } from "@/lib/fonts";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "کارخانه رنگ بیان",
  description: "رنگ بیان تولید کننده انواع رنگ و پوشش های رنگی",
  keywords: [
    "رنگ بیان",
    "بیان",
    "رنگ",
    "تولید کننده رنگ",
    "رنگ مصطفی",
    "تولید کننده رنگ و پوشش های رنگی",
    "تولید کننده پوشش های رنگی",
    "تولید کننده رنگ ضد زنگ",
    "bayan paint",
    "bayanpaint",
    "bayanpaint.com",
  ],
  openGraph: {
    type: "website",
    url: "https://bayanpaint.com",
    title: "رنگ بیان",
    description: "رنگ بیان تولید کننده انواع رنگ و پوشش های رنگی",
    siteName: "کارخانه رنگ بیان",
  },
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
