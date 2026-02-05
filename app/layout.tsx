import type {Metadata} from "next";
import {Doto, Hanken_Grotesk, Lexend_Zetta, Libre_Barcode_128, Roboto_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/next"
import "../styles/globals.css";


const lexendZetta = Lexend_Zetta({
    variable: "--font-lexend-zetta",
    subsets: ["latin"],
});

const HankenGrotesk = Hanken_Grotesk({
    variable: "--font-hanken-grotesk",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"],
});

const RobotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const DotoFont = Doto({
    variable: "--font-doto",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});


const libreBarcode39 = Libre_Barcode_128({
    variable: "--font-libre-barcode",
    subsets: ["latin"],
    weight: "400",
});



export const metadata: Metadata = {
    title: "Gabi Minto",
    description: "Site portfolio",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${HankenGrotesk.variable} ${lexendZetta.variable} ${libreBarcode39.variable} ${RobotoMono.variable} ${DotoFont.variable} antialiased overscroll-none overflow-hidden`}
        >
        <Analytics/>
        {children}
        </body>
        </html>
    );
}
