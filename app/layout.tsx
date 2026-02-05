import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Gabi Minto",
    description: "Gabi Minto - Full-stack Developer Portfolio",
    metadataBase: new URL("https://GabiMinto.com"),
    openGraph: {
        title: "Gabi Minto",
        type: "website",
        url: "https://GabiMinto.com",
        images: [
            {
                url: "/images/preview.jpg",
                alt: "Gabi Minto Portfolio Preview",
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/images/pointer.ico" type="image/x-icon" id="favicon"/>
        </head>
        <body>{children}</body>
        </html>
    );
}
