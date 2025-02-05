import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/invoices/table";
import {CreateInvoice} from "@/app/ui/invoices/buttons";
import { fetchInvoicesPages } from "@/app/lib/data";
import { Metadata } from 'next';

export const metadata: Metadata = {
//   title: "Invoices | Acme-Dashboard",
  title: "Invoices",
}

export default async function Page(props:{
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>
}
) {
    const searchParams = await props.searchParams
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchInvoicesPages(query);

  return (
    <main className="w-full ">
        <div className="flex items-center justify-between w-full">
            <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
        </div>
        <div className="flex items-center justify-between gap-2 mt-4 md:mt-8">
            <Search placeholder="search invoices..."/>
            <CreateInvoice />   
        </div>
        <Suspense key={query+currentPage} fallback={<InvoicesTableSkeleton />}>
            <Table query={query} currentPage={currentPage}/>
        </Suspense>
        <div>
            <Pagination totalPages={totalPages}/>
        </div>
    </main>
    )
}
