import "@/app/ui/global.css";
import { oxanium } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${oxanium.className} antialiased`}>{children}</body>
    </html>
  );
}
