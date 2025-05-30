"use client";

import { ThemeProvider } from "./ThemeProvider";
import { ReactNode } from "react";
import ProviderWrapper from "./ProviderWrapper";
import LiveVisualEditing from "../LiveVisualEditing";
import Header from "../navigations/Header";
import Footer from "../navigations/Footer";
import { AllMenusColor, FooterValues, HeaderValues } from "@/types/header";
import { SanityDocument } from "next-sanity";

export default function ClientLayout({
  children,
  navigation,
  footer,
  isEnabled,
  allMenuColor
}: {
  children: ReactNode;
  navigation: HeaderValues;
  footer: FooterValues;
  isEnabled: boolean;
  allMenuColor: AllMenusColor[]
}) {
  return (
    <ThemeProvider allMenuColor={allMenuColor}>
      <Header navigation={navigation} />
      <main>
        <ProviderWrapper>{children}</ProviderWrapper>
      </main>
      <Footer footer={footer} />
      {isEnabled && <LiveVisualEditing />}
    </ThemeProvider>
  );
}
