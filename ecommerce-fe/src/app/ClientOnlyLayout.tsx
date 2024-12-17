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

    const excludedPaths = new Set(["/login", "/register"]);
    const isExcludedPage = excludedPaths.has(pathname);

    const excludedPatterns = [/^\/[^/]+\/[^/]+$/];

    // const dynamicPattern = /^\/products\/\d+$/; // Ví dụ: /products/123

    return isExcludedPage ? (
        <>{children}</>
    ) : (
        <>
            <Header />
            {!excludedPatterns.some(pattern => pattern.test(pathname)) && <Banner />}
            {children}
            <Footer />
        </>
    );
}
