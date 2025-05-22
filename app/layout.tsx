import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/components/navigations/header.css"
import { ThemeProvider } from "@/components/global/ThemeProvider";
import ProviderWrapper from "@/components/global/ProviderWrapper";
import { draftMode } from "next/headers";
import { FOOTER, HEADER, NAVIGATION } from "@/sanity/lib/client";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";
import LiveVisualEditing from "@/components/LiveVisualEditing";
import Header from "@/components/navigations/Header";
import { FooterValues, HeaderValues } from "@/types/header";
import logo from "@/public/Group 13.png";
import Footer from "@/components/navigations/Footer";

export const metadata: Metadata = {
  title: "Ocean and Sea",
  icons: {
    icon: `${logo}`,
    shortcut: `${logo}`,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = await loadQuery<HeaderValues>(
    HEADER,
    {},
    {
      cache: "no-store",
    }
  );
    const footer = await loadQuery<FooterValues>(
    FOOTER,
    {},
    {
      cache: "no-store",
    }
  );

  const { isEnabled } = await draftMode();
  return (
    <html lang="en">
      <head>
        
      {/* <link rel="preload" href="/public/fonts/AktivGrotesk-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/> */}
      </head>
      <body>
        <ThemeProvider >
          <Header navigation={navigation.data} />
          <main>  
            <ProviderWrapper>{children}</ProviderWrapper>
          </main>
          <Footer footer={footer.data} />
          {isEnabled && <LiveVisualEditing />}
        </ThemeProvider>
      </body>
    </html>
  );
}
