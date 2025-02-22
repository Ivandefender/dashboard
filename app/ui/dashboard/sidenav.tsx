import Link from "next/link";
import AcmeLogo from "@/app/ui/acme-logo";
import NavLinks from "@/app/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import { signOut } from "@/auth";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        href="/"
        className="bg-blue-600 flex h-20 items-end mb-2 justify-start rounded-md p-4 md:h-40"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="md:block bg-gray-50 w-full h-auto grow rounded-md hidden"></div>
        <form action={
          async ()=>{
          "use server";
          await signOut({redirectTo: "/"})
        }}>
            <button className="grow flex w-full items-center justify-center gap-2 h-[48px] rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <PowerIcon className="w-6" />
                <div className="hidden md:block">Logout</div>
            </button>
        </form>
      </div>
    </div>
  );
}
