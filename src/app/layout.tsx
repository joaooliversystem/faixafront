import { Inter } from "next/font/google";
import "./globals.css";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import React from 'react';
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" data-bs-theme="light">
            <head>
                {/* Google Font  */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
                />

                {/* Plugins CSS  */}
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/font-awesome/css/all.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/OverlayScrollbars-master/css/OverlayScrollbars.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/choices.js/public/assets/styles/choices.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/glightbox-master/dist/css/glightbox.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/dropzone/dist/dropzone.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/flatpickr/dist/flatpickr.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/plyr/plyr.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/zuck.js/dist/zuck.min.css"
                />

                <link
                    rel="stylesheet"
                    type="text/css"
                    // charset="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />

                {/* Theme CSS  */}
                <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/color.css" />
                <link rel="stylesheet" type="text/css" href="/globals.css" />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/assets/vendor/bootstrap-icons/bootstrap-icons.css"
                />
                <link rel="stylesheet" type="text/css" href="/assets/css/footer.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/editProfile.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/photos.css" />
                <link rel="stylesheet" type="text/css" href="/assets/css/activate.css" />
            </head>
            <body>
                <NextAuthSessionProvider>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div>
                            <Header />
                        </div>
                        <div
                            style={{
                                marginTop: "40px",
                            }}
                        >
                            {children}
                        </div>
                    </div>
                </NextAuthSessionProvider>
            </body>
        </html>
    );
}
