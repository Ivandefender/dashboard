import '@/app/ui/global.css';
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: "Acme-Dashboard",
  title: {
    template: "%s | Acme-Dashboard",
    default: "Acme-Dashboard"
  },
  description: "Dashboard with App-routing",
  metadataBase: new URL("https://dashboard-omega-ochre-63.vercel.app/")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
