import { Noto_Sans_KR } from "next/font/google";
import { Metadata } from "next";

import { config } from "config";
import { Providers } from "./providers";
import Scripts from "src/components/scripts";

import "./globals.css";

const notosans = Noto_Sans_KR({ weight: "700", subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.blog.title,
  description: config.blog.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="ko">
      <head>
        <Scripts />
      </head>
      <body
        className={
          (notosans.className, "min-h-screen bg-slate-100 dark:bg-black")
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
