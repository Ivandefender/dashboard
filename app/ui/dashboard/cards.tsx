import { lusitana } from "@/app/ui/fonts";
import { ClockIcon, BanknotesIcon, UserGroupIcon, InboxIcon } from "@heroicons/react/24/outline";
import { fetchCardData } from "@/app/lib/data";

const iconMap = {
  pending: ClockIcon,
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total invoices" value={numberOfInvoices} type="invoices" />
      <Card title="Total customers" value={numberOfCustomers} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: string | number;
  type: "pending" | "collected" | "customers" | "invoices";
}) {
  const Icon = iconMap[type];
  return (
    <div className="bg-gray-50 p-2 shadow-sm rounded-xl">
      <div className="flex p-4">
        {Icon ? <Icon className="w-5 h-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium truncate">{title}</h3>
      </div>
      <p className="rounded-xl bg-white px-4 py-8 text-center text-2xl">{value}</p>
    </div>
  );
}
