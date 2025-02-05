import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
import { sql } from "@vercel/postgres";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
  }

export default function LoginPage() {
  console.dir(sql)
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="flex mx-auto w-full max-w-[400px] flex-col">
        <div className="bg-blue-500 rounded-lg h-20 flex items-end p-3 md:h-36">
          <div>
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}