import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import styles from "@/app/ui/home.module.css";
import { lusitana } from "@/app/ui/fonts";
import AcmeLogo from "@/app/ui/acme-logo";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen p-6">
      <div className="h-20 bg-blue-500 rounded-lg flex shrink-0 items-end p-4 md:h-52">
        <AcmeLogo />
      </div>

      <div className="flex flex-col mt-4 grow gap-4 md:flex-row">
        <div className="flex flex-col justify-center bg-gray-50 gap-6 rounded-lg px-6 py-10 md:w-2/5 md:px-20">
          <div className={styles.shape} />
          {/* <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" /> */}
          <p
            className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className}`}
          >
            <strong>Welcome to Acme</strong> This is example for the{" "}
            <a href="#" className="text-blue-500">
              Next.js
            </a>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start bg-blue-500 rounded-lg px-6 py-3 text-white text-sm font-medium uppercase transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Login</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="hero-image"
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            alt="hero-image"
            className="block md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
