// Користувачі:
// id: 410544b2-4001-4271-9855-fec4b6a6442a
// Клієнти:
// id: d6e15727-9fe1-4961-8c5b-ea44a9bd81aa 
// id: 3958dc9e-712f-4377-85e9-fec4b6a6442a
// id: 3958dc9e-742f-4377-85e9-fec4b6a6442a
// id: 76d65c26-f784-44a2-ac19-586678f7c2f2
// id: CC27C14A-0ACF-4F4A-A6C9-D45682C144B9
// id: 13D07535-C59E-4157-A011-F8D2EF4E0CBB

const users = [{
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@example.com",
    password: "12345678"
}];

const customers = [
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Amy Burns",
        email: "amyburns@example.com",
        imageUrl: "/customers/amy-burns.png"
    },
    {
        id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
        name: "Balazs Orban",
        email: "balazsorban@example.com",
        imageUrl: "/customers/balazs-orban.png"
    },
    {
        id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
        name: "Delba de Oliveira",
        email: "delbadeoliveira@example.com",
        imageUrl: "/customers/delba-de-oliveira.png"
    },
    {
        id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
        name: "Evil Rabbit",
        email: "evilrabbit@example.com",
        imageUrl: "/customers/evil-rabbit.png"
    },
    {
        id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
        name: "Lee Robinson",
        email: "leerobinson@example.com",
        imageUrl: "/customers/lee-robinson.png"
    },
    {
        id: "13D07535-C59E-4157-A011-F8D2EF4E0CBB",
        name: "Michael Novotny",
        email: "michaelnovotny@example.com",
        imageUrl: "/customers/michael-novotny.png"
    },
];

const invoices = [
    {
        customerId: customers[0].id,
        amount: 323,
        status: "paid",
        date: "2024-11-22"
    },
    {
        customerId: customers[0].id, 
        amount: 500,
        status: "pending",
        date: "2024-11-20"
    },
    {
        customerId: customers[1].id,
        amount: 1000,
        status: "pending",
        date: "2024-10-15"
    },
    {
        customerId: customers[1].id, 
        amount: 1200,
        status: "pending",
        date: "2024-10-05"
    },
    {
        customerId: customers[2].id,
        amount: 100,
        status: "paid",
        date: "2024-11-15"
    },
    {
        customerId: customers[2].id, 
        amount: 56,
        status: "paid",
        date: "2024-11-20"
    },
    {
        customerId: customers[3].id,
        amount: 600,
        status: "pending",
        date: "2023-08-20"
    },
    {
        customerId: customers[3].id, 
        amount: 78,
        status: "paid",
        date: "2023-09-20"
    },
    {
        customerId: customers[4].id,
        amount: 454,
        status: "pending",
        date: "2024-02-24"
    },
    {
        customerId: customers[4].id, 
        amount: 154,
        status: "paid",
        date: "2023-10-15"
    },
    {
        customerId: customers[5].id,
        amount: 895,
        status: "pending",
        date: "2024-09-01"
    },
    {
        customerId: customers[5].id, 
        amount: 123,
        status: "paid",
        date: "2024-10-01"
    },
];

const revenue = [
    { month: "Jan", revenue: 2000 },
    { month: "Feb", revenue: 5000 },
    { month: "Mar", revenue: 4500 },
    { month: "Apr", revenue: 3500 },
    { month: "May", revenue: 2578 },
    { month: "Jun", revenue: 4587 },
    { month: "Jul", revenue: 1504 },
    { month: "Aug", revenue: 999 },
    { month: "Sep", revenue: 1200 },
    { month: "Oct", revenue: 2900 },
    { month: "Nov", revenue: 3678 },
    { month: "Dec", revenue: 7000 },
];

export {users, customers, invoices, revenue};