import { fetchCustomers } from "@/app/lib/data";
import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Invoice"
  }
export default async function Page() {

  const customers = await fetchCustomers();
    
  return (
    <main>
        <Breadcrumbs breadcrumbs={[
            { label: 'Invoices', href: '/dashboard/invoices' },
            { label: 'New Invoice', active: true, href: '/dashboard/invoices/create' }
        ]} />
        <Form customers={customers} />  
    </main>
  )
}

