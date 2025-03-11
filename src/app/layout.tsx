import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import StoreProvider from "./StoreProvider";
import SocialLinks from "@/components/SocialLinks";
import { nunitoSans } from "@/app/_lib/fonts";

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
        <StoreProvider>
            <html lang="en">
                <body className={`${nunitoSans.className} relative flex flex-col max-w-[1536px] mx-auto max-[1536px]:w-full h-screen bg-[linear-gradient(90deg,_rgba(9,27,37,1)_0%,_rgba(18,39,51,1)_100%)] select-none`}>
                    <Header />

                    <Menu />

                    {children}

                    <SocialLinks />

                    <Footer />
                </body>
            </html>
        </StoreProvider>
    );
}
