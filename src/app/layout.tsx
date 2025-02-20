import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const nunitoSans = Nunito_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
    title: {
        default: 'Priyanshu Sharma (@xtechilad)',
        template: '%s | Portfolio Website',
    },
    description: 'This is my portfolio website based on Next.js',
    icons: {
        icon: '/UserLogo.png'
    }
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={`${nunitoSans.className} relative flex flex-col max-w-[1536px] mx-auto max-[1536px]:w-full h-screen bg-[#102531]`}>
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
