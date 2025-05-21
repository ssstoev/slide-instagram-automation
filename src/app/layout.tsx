import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/providers/react-query-provider";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReduxProvider from "@/providers/redux-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slide",
  description: "Slide App made using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          suppressHydrationWarning={true} 
          className={jakarta.className}>
        <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
            >
            <ReduxProvider>
              <ReactQueryProvider>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
              </ReactQueryProvider>
            </ReduxProvider>
              <Toaster />
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
