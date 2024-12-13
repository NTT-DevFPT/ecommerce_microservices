"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Banner from "@/components/layout/banner/Banner";

export default function ClientOnlyLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/login";

    return (
        <>
            {!isLoginPage && <Header />}
            {!isLoginPage && <Banner />}
            {children}
            {!isLoginPage && <Footer />}
        </>
    );
}
