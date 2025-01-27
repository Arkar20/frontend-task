import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Task App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1a1a1a] dark`}
            >
                {/* logo section  */}
                <header className="bg-[#0d0d0d] h-52 grid place-content-center">
                    <Image src="/logo.svg" alt="logo" width={226} height={48} />
                </header>
                {/* logo section  */}
                <div className="max-w-screen-md mx-auto ">{children}</div>
            </body>
        </html>
    );
}
