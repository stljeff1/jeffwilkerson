"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode, useMemo, useState } from 'react';
import Header from './components/content/Header';
import Footer from './components/content/Footer';
import theme from "./assets/theme";
import { PaletteMode, ThemeProvider } from "@mui/material";
import './assets/scss/global.scss';
import { ScrollPositionProvider } from "./components/layout/ScrollPosition.context";
import useScrollPosition from "./lib/useScrollPosition";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: 'My Website',
//   description: 'A portfolio and resume site',
// };

export default function RootLayout({ children }: { children: ReactNode }) {

  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const scrollPosition = useScrollPosition();


  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light'); // or 'dark'

  const customTheme = useMemo(() => theme(mode), [mode]);

  const isScrolling = useMemo(() => scrollPosition > 100, [ scrollPosition ]);''

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <ThemeProvider theme={customTheme}>
          {/* <ScrollPositionProvider> */}
          {/* <div className={`app-container ${isScrolling ? 'is-scrolling' : ''}`}> */}
            <Header />
            <main>{children}</main>
            <Footer />
          {/* </div> */}
          {/* </ScrollPositionProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
