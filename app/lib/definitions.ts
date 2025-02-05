export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type Customer = {
    id: string;
    name: string;
    email: string;
    imageurl: string;
}

export type Invoice = {
    id: string;
    customerId: string;
    amount: number;
    status: "paid" | "pending";
    date: string;
}

export type LatestInvoice = {
    id: string;
    name: string;
    // imageurl: string;
    imageurl: string; //costul
    amount: string;
    email: string;
}

export type Revenue = {
    month: string;
    revenue: number;
}

export type LatestInvoiceRaw = Omit<LatestInvoice, "amount"> & {amount: number;}

export type InvoicesTable = {
    id: string;
    customerId: string;
    name: string;
    email: string;
    imageurl: string;
    date: string;
    amount: number;
    status: "paid" | "pending";
}

export type CustomersTable = {
    id: string;
    name: string;
    email: string;
    imageurl: string;
    totalInvoices: number;
    totalPending: number;
    totalPaid: number;
}

export type FormattedCustomersTable = {
    id: string;
    name: string;
    email: string;
    imageurl: string;
    totalInvoices: number;
    totalPending: number;
    totalPaid: number;
}

export type CustomerField = {
    id: string;
    name: string;
}

export type InvoiceForm = {
    id: string;
    customerId: string;
    amount: number;
    status: "paid" | "pending";
    // date: string;
}