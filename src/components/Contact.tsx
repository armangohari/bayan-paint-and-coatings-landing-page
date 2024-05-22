import {
  instagramIcon,
  locationIcon,
  telephoneIcon,
  whatsappIcon,
} from "@/lib/icons";
import ContactCard from "./ContactCard";

const contactData = [
  {
    label: "آدرس",
    content:
      "کرج، ماهدشت، خیابان سرداران، شهرک صنعتی خوارزمی، خیابان دهم جنوبی، پلاک ۴۷ و ۴۹",
    linkIcon: locationIcon,
    linkTitle: "مشاهده در گوگل مپ",
    linkUrl: "", // TODO: add link
  },
  {
    label: "تلفن دفتر",
    content: ["۰۲۶ ۳۷۸۵ ۸۵ ۶۵", "۰۲۶ ۳۷۸۵ ۸۳ ۱۷"],
    linkIcon: telephoneIcon,
    linkTitle: "تماس با دفتر",
    linkUrl: "tel:+982637858565",
  },
  {
    label: "واتساپ",
    content: "+۹۸ ۹۱۰ ۱۶۵ ۸۸۴۹",
    linkIcon: whatsappIcon,
    linkTitle: "مکالمه در واتساپ",
    linkUrl: "https://wa.me/989101658849",
  },
  {
    label: "اینستاگرام",
    content: "@Bayan_Rang",
    linkIcon: instagramIcon,
    linkTitle: "پیام در اینستاگرام",
    linkUrl: "https://instagram.com/bayan_rang",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center justify-center gap-8 px-8 md:flex-row"
    >
      {contactData.map(({ label, content, linkIcon, linkTitle, linkUrl }) => (
        <ContactCard
          key={label}
          label={label}
          content={content}
          linkIcon={linkIcon}
          linkTitle={linkTitle}
          linkUrl={linkUrl}
        />
      ))}
    </section>
  );
}
