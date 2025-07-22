import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const jost = Jost({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jethro Cadang",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jost.className} bg-background h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
