import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import Navbar from "./_components/navbar";

export const metadata = {
  title: "Lily O'Sullivan",
  description: "Personal site of Lily O'Sullivan",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="bg-zinc-900 font-inter text-gray-200 antialiased">
        <main>
          <div className="mx-auto max-w-2xl px-4 pb-8 pt-32 transition-opacity">
            {/* <Navbar /> */}
            {children}
          </div>
        </main>
        <footer>
          <div className="flex flex-col items-center justify-center text-center">
            This should be at the bottom of the page
          </div>
        </footer>
      </body>
    </html>
  );
}
