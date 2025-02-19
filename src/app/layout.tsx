import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito_Sans } from "next/font/google";
// import SocialSections from "@/components/SocialSections";

const nunitoSans = Nunito_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
    title: {
        default: 'Disney Clone | Powered by Next.js',
        template: '%s | Disney Clone',
    },
    description: 'This is a disney clone based on Next.js',
    icons: {
        icon: '/UserLogo.png'
    }
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${nunitoSans.className} relative flex flex-col font-semibold max-w-screen h-screen bg-[#111031]`}>
                <Header />

                {/* <SocialSections /> */}

                {children}
            </body>
        </html>
    );
}
