import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";
import clsx from "clsx";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { LatestInvoice } from "@/app/lib/definitions";

export default async function LatestInvoices({ latestInvoices }: { latestInvoices: LatestInvoice[] }) {
  return (
    <div className="flex flex-col w-full md:col-span-4">
      <h2 className={`text-xl ${lusitana.className} md:text-2xl mb-4`}>Latest Invoices</h2>
      <div className="flex flex-col grow justify-between rounded-xl p-4 bg-gray-50">
        <div className="bg-white px-6">
          {latestInvoices.map((invoice, i) => {
            console.log(invoice)
            return (
              <div
                key={invoice.id}
                className={clsx("flex flex-row items-center justify-between py-4", {
                  // "border-t": i !== 0,
                  "border-b": i !== latestInvoices.length,
                })}
              >
                <div className="flex items-center">
                    <Image
                      src={invoice.imageurl}
                      alt={`${invoice.name}'s profile picture`}
                      width={32}
                      height={32}
                      className="rounded-full mr-4"
                    />
                    <div>
                        <p className="text-sm font-semi-bold md:text-base truncate">{invoice.name}</p>
                        <p className="text-sm text-gray-500 sm:block hidden">{invoice.email}</p>
                    </div>
                </div>
                <p className={`text-sm font-medium md:text-base ${lusitana.className}`}>{invoice.amount}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500"/>
          <h3 className="ml-2 text-sm text-gray-500">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
