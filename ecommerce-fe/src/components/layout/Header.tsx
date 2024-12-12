'use client'

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Smartphone, Laptop, Headphones, Watch, Clock, Tablet, Monitor, Home, Shirt } from 'lucide-react'
import { useEffect, useState } from "react"
import { AddressDialog } from "@/components/address-dialog"

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [addressDialogOpen, setAddressDialogOpen] = useState(false);
    const [currentAddress, setCurrentAddress] = useState("123 Đường ABC, Phường XYZ, TP.HCM");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`w-full bg-[#ff7f50] text-white ${scrolled ? 'shadow-md' : ''} sticky top-0 z-50`}
        >
            {/* Top header with decorative lights */}
            <div className="h-6 bg-[url('/lights.png')] bg-repeat-x"/>

            {/* Main header */}
            <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-10 xl:px-20 flex justify-between items-center py-2">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <h1 className="text-4xl font-bold text-white">Xiaomi</h1>
                </Link>

                {/* Search */}
                <div className="flex-1 mx-4">
                    <div className="relative max-w-xl">
                        <MagnifyingGlassIcon
                            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                        />
                        <Input
                            type="search"
                            placeholder="Bạn tìm gì hả..."
                            className="pl-8 bg-white text-black rounded-full w-full"
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    <Button
                        variant="ghost"
                        className="h-12 text-white hover:bg-[#f0932b] text-sm whitespace-nowrap"
                    >
                        <UserIcon className="mr-2 h-5 w-5" />
                        <span className="hidden sm:inline">Đăng nhập</span>
                    </Button>

                    <Button
                        variant="ghost"
                        className="h-12 text-white hover:bg-[#f0932b] text-sm whitespace-nowrap"
                    >
                        <ShoppingCartIcon className="mr-2 h-5 w-5" />
                        <span className="hidden sm:inline">Giỏ hàng</span>
                    </Button>

                    <Button
                        variant="ghost"
                        className="h-12 text-white hover:bg-[#f0932b] text-sm w-auto min-w-[200px] max-w-[300px] truncate"
                        onClick={() => setAddressDialogOpen(true)}
                    >
                        <MapPinIcon className="mr-2 h-5 w-5 flex-shrink-0"/>
                        <span className="truncate">{currentAddress}</span>
                        <ChevronDownIcon className="ml-1 h-5 w-5 flex-shrink-0"/>
                    </Button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="overflow-x-auto">
                <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-10 xl:px-20">
                    <ul className="flex items-center gap-0.5 text-sm py-1 w-full">
                        <NavItem icon={<Smartphone className="h-5 w-5" />} label="Điện thoại" />
                        <NavItem icon={<Laptop className="h-5 w-5" />} label="Laptop" />
                        <NavItem icon={<Headphones className="h-5 w-5" />} label="Phụ kiện" showChevron />
                        <NavItem icon={<Watch className="h-5 w-5" />} label="Smartwatch" />
                        <NavItem icon={<Clock className="h-5 w-5" />} label="Đồng hồ" />
                        <NavItem icon={<Tablet className="h-5 w-5" />} label="Tablet" />
                        <NavItem icon={<Monitor className="h-5 w-5" />} label="PC, Máy chiếu" showChevron />
                        <NavItem icon={<Home className="h-5 w-5" />} label="Nhà thông minh" showChevron />
                        <NavItem icon={<Shirt className="h-5 w-5" />} label="Thể thao, thời trang" showChevron />
                    </ul>
                </div>
            </nav>

            <AddressDialog
                open={addressDialogOpen}
                onOpenChange={setAddressDialogOpen}
                currentAddress={currentAddress}
                onAddressChange={setCurrentAddress}
            />
        </header>
    );
}

interface NavItemProps {
    icon: React.ReactNode
    label: string
    showChevron?: boolean
}

function NavItem({ icon, label, showChevron }: NavItemProps) {
    return (
        <li className="flex-grow">
            <Button
                variant="ghost"
                className="h-12 text-white hover:bg-[#f0932b] text-sm whitespace-nowrap w-full"
            >
                {icon}
                <span className="ml-2">{label}</span>
                {showChevron && <ChevronDownIcon className="ml-1 h-5 w-5 text-white" />}
            </Button>
        </li>
    );
}

