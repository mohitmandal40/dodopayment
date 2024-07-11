"use client";

import "./globals.css";
import Head from "next/head";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";
import NotificationBar from "@/components/NotificationBar";
import { Providers } from "@/components/providers";
import Header from "@/components/Header";
import { UserProvider } from "@/components/userProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationBarOpen, setIsNotificationBarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setIsSidebarOpen(false);
        setIsNotificationBarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSideBar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const toggleNotificationBar = () => {
    setIsNotificationBarOpen((prev) => !prev);
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="transition-all duration-100 ease-linear">
        <Providers>
          <UserProvider>
            <div className="grid w-screen h-screen">
              <div
                className={`hidden md:block fixed top-0 left-0 bottom-0 ${
                  isSidebarOpen ? "w-[300]" : "w-[100px]"
                }`}
              >
                <Sidebar
                  toggleSideBar={toggleSideBar}
                  active
                  isSidebarOpen={isSidebarOpen}
                />
              </div>
              <div
                className={`ml-0 overflow-x-hidden ${
                  isSidebarOpen
                    ? isNotificationBarOpen
                      ? "md:w-[calc(100vw-600px)] md:ml-[300px]"
                      : "md:w-[calc(100vw-300px)] md:ml-[300px]"
                    : isNotificationBarOpen
                    ? "md:w-[calc(100vw-400px)] md:ml-[100px]"
                    : "md:w-[calc(100vw-100px)] md:ml-[100px]"
                }`}
              >
                <Header toggleNotificationBar={toggleNotificationBar} />
                {children}
              </div>
              <div
                className={`hidden sm:block fixed transition-all duration-100 ease-linear top-0 h-dvh right-0 bottom-0 ${
                  isNotificationBarOpen ? "w-[300px]" : "w-[0]"
                }`}
              >
                <NotificationBar
                  toggleNotificationBar={toggleNotificationBar}
                />
              </div>
            </div>
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
