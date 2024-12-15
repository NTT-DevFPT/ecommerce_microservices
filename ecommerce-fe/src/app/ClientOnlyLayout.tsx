"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Banner from "@/components/layout/banner/Banner";

interface ClientOnlyLayoutProps {
    children: ReactNode;
}

export default function ClientOnlyLayout({ children }: ClientOnlyLayoutProps) {
    const pathname = usePathname();
    const excludedPaths = ["/login", "/register"];
    const isExcludedPage = excludedPaths.includes(pathname);

    return isExcludedPage ? (
        <>{children}</>
    ) : (
        <>
            <Header />
            <Banner />
            {children}
            <Footer />
        </>
    );
}
