import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  { ClerkProvider } from "@clerk/nextjs"
import  Dashboard  from "./dashboard/page"
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn
} from '@clerk/nextjs'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GYM100",
  description: "STAY FIT, STAY HEALTHY",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <SignedOut>

        </SignedOut>
        <SignedIn>
          {/* <Dashboard /> */}
        </SignedIn>
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
