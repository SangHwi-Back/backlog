import './ui/globals.css';
import {ReactNode} from "react";
import {Metadata} from "next";
import Providers from "./providers";
import MainLayout from "./_components/Main/MainLayout";

export const metadata: Metadata = {
  title: "BLOG",
  description: "Welcome to backlog!"
}

type Props = { children: ReactNode, modal: ReactNode, toast: ReactNode };

export default function RootLayout({ children, modal, toast }: Props) {
  return (
    <html>
    <Providers>
      <MainLayout>
        { children }
        { modal }
        { toast }
      </MainLayout>
    </Providers>
    </html>
  )
}