import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LiveVisualEditing from "../components/LiveVisualEditing";
import { draftMode } from "next/headers";
import { ThemeProvider } from "../components/global/ThemeProvider";
import ProviderWrapper from "../components/global/ProviderWrapper";
import { loadQuery } from "../sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { NAVIGATION } from "../sanity/lib/client";
import Header from "../components/navigations/Header";
import Footer from "../components/navigations/Footer";
import Logo from "../public/nog_Logotype_ag-6.png"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "91 Group",
   icons: {
      icon: `${Logo}`,
      shortcut: `${Logo}`,
	},
};

type Params = Promise<{ slug: string }>

export default async function RootLayout({
  children,
  params 
}: Readonly<{
  children: React.ReactNode;
  params: Params 
}>) {
    const { slug } = await params
    const navigation = await loadQuery<SanityDocument[]>(NAVIGATION, {}, {
    cache: "no-store"
    });

  const { isEnabled } = await draftMode()
  

  return (
    <html className="html" lang="en">
      <body >
        <ThemeProvider navigation={navigation.data}>
          <Header navigation={navigation.data} />
          <ProviderWrapper>
            {children}
          </ProviderWrapper>
          <Footer navigation={navigation.data}  />
          {isEnabled && <LiveVisualEditing />}
       </ThemeProvider>
      </body>
    </html>
  );
}
