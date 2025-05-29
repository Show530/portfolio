import React from "react";
import "./globals.css";
import NavLinks from "@/components/NavLinks";

export default function RootLayout(
    {children,}: Readonly<{children: React.ReactNode;}>
) {
    return(
        <html lang="en">
            <body>
                <NavLinks></NavLinks>
                {children}
            </body>
        </html>
    );
}