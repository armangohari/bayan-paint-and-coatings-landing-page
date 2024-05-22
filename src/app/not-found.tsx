import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4">
      <h5 className="cyan-gradient-background cyan-gradient-text text-6xl font-bold">
        404
      </h5>
      <p className="text-2xl font-medium">صفحه مورد نظر یافت نشد.</p>
      <Link
        href="/"
        className="glass-box px-2.5 py-1.5 text-primary transition-all hover:brightness-150 active:shadow-inner"
      >
        &larr; بازگشت به صفحه اصلی
      </Link>
    </main>
  );
}
