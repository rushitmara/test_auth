import { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
    title: "Home | Test Project",
    description: "Homepage of Rushit Mara's test project.",
};

const quicksand = Quicksand({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={quicksand.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
