import type {Metadata} from 'next';
import '@/styles/globals.css';
import ViewTransitions from '@/components/ViewTransitions';

export const metadata: Metadata = {
    title: 'Gabi Minto',
    description: 'Personal website',
    openGraph: {
        title: 'Gabi Minto',
        type: 'website',
        url: 'https://GabiMinto.com',
        images: [
            {
                url: '/images/preview.jpg',
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
            <link href="/images/pointer.ico" id="favicon" rel="icon" type="image/x-icon"/>
            <link href="https://fonts.googleapis.com" rel="preconnect"/>
            <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Lexend:wght@100..900&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        <ViewTransitions>{children}</ViewTransitions>
        </body>
        </html>
    );
}

