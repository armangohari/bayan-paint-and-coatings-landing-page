import Image from "next/image";
import AboutCard from "./AboutCard";
import { fogColorImage } from "@/lib/images";

const aboutCardsData = [
  {
    title: "درباره ما",
    desc: "کارخانه ما با سال‌ها تجربه در صنعت رنگ و پوشش، به عنوان یکی از پیشگامان در ارائه محصولات نوآورانه و با کیفیت شناخته شده است. ما متعهد به تولید رنگ‌ها و پوشش‌هایی هستیم که نه تنها استانداردهای بالای صنعتی را برآورده می‌کنند، بلکه به بهبود کیفیت زندگی و حفاظت از محیط زیست نیز کمک می‌کنند.",
  },
  {
    title: "ماموریت ما",
    desc: "هدف ما ارائه محصولات با کیفیت بالا است که امنیت، زیبایی و دوام را به فضاهای کاری و زندگی شما اضافه کنند. ما به دنبال نوآوری در فرمولاسیون‌هایمان هستیم تا اطمینان حاصل شود که هر محصولی که تولید می‌کنیم، علاوه بر عملکرد بالا، دوستدار محیط زیست نیز باشد.",
  },
  {
    title: "چشم‌انداز ما",
    desc: "ما به دنبال آن هستیم که به عنوان رهبری قابل اعتماد در صنعت رنگ و پوشش شناخته شویم. با تکیه بر دانش فنی و تخصص تیم متخصص خود، ما می‌خواهیم استانداردهای جدیدی را در صنعت ما تعریف کنیم و تاثیر مثبتی بر جوامعی که در آن فعالیت می‌کنیم، بگذاریم.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex flex-col items-center justify-center gap-16 px-8 md:max-w-7xl"
    >
      {/* Image */}
      <Image
        src={fogColorImage}
        alt="پخش رنگ آبی در آب"
        className="absolute -z-10 h-screen w-auto object-cover md:object-contain"
      />

      {/* About Cards */}
      {aboutCardsData.map(({ title, desc }) => (
        <AboutCard key={title} title={title} desc={desc} />
      ))}

      {/* Company Motto */}
      <h4 className="max-w-sm text-center text-2xl font-bold md:max-w-4xl">
        به <span className="text-primary underline">رنگ بیان</span> خوش آمدید؛
        جایی که{" "}
        <span className="cyan-gradient-background bg-clip-text text-transparent">
          کیفیت، نوآوری، و مسئولیت پذیری{" "}
        </span>
        دست در دست هم می‌روند تا بهترین‌ها را برای شما و دنیای اطرافمان به
        ارمغان بیاورند.
      </h4>
    </section>
  );
}
