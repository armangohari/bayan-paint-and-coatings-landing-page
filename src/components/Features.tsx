import { greekHelmetIcon, labBottleIcon, woodenBoxIcon } from "@/lib/icons";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: labBottleIcon,
    title: "فرمولاسیون پیشرفته",
    desc: "استفاده از فناوری‌های نوآورانه در رنگ‌های مبتنی بر آب رنگ بیان، که سلامت کارکنان و محیط زیست را تضمین می‌کند. این رنگ‌ها کمترین آسیب را به محیط زیست دارند.",
  },
  {
    icon: woodenBoxIcon,
    title: "دوام بی نظیر",
    desc: "کشف پوشش‌های صنعتی رنگ بیان که به طور خاص برای مقاومت در برابر شرایط سخت طراحی شده‌اند. این پوشش‌ها، با دوام بالا، زندگی را برای کارگران سخت‌کوش آسان‌تر می‌کنند.",
  },
  {
    icon: greekHelmetIcon,
    title: "محافظت فوق العاده",
    desc: "رنگ بیان ارائه‌دهنده ضد زنگ‌های قدرتمند با فرمولاسیونی که از سازه‌های فلزی در برابر خوردگی محافظت می‌کند، به ویژه در محیط‌های سخت و خورنده.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto flex w-full flex-col items-center justify-center gap-8 px-8 md:max-w-7xl md:flex-row"
    >
      {features.map(({ icon, title, desc }) => (
        <FeatureCard key={title} icon={icon} title={title} desc={desc} />
      ))}
    </section>
  );
}
