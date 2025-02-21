import { Josefin_Sans, Readex_Pro, Lato, Roboto_Mono, Rubik } from "next/font/google";

const josefinSans = Josefin_Sans({
    display: 'swap',
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '600', '700']
});

const readexPro = Readex_Pro({
    display: 'swap',
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '700']
});

const lato = Lato({
    display: 'swap',
    subsets: ["latin"],
    weight: ['100', '300', '400', '700', '900']
});

const robotoMono = Roboto_Mono({
    display: 'swap',
    subsets: ["latin"],
    weight: ['100', '200', '300', '400', '500', '700']
});

const rubik = Rubik({
    display: 'swap',
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700', '800', '900']
});

export {
    josefinSans,
    readexPro,
    lato,
    robotoMono,
    rubik,
}
