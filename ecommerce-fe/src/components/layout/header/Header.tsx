'use client'

import Link from "next/link"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {ChevronDownIcon, MagnifyingGlassIcon, MapPinIcon, ShoppingCartIcon, UserIcon} from '@heroicons/react/24/outline'
import {Clock, Headphones, Home, Laptop, Monitor, Shirt, Smartphone, Tablet, Watch} from 'lucide-react'
import React, {useEffect, useRef, useState} from "react"
import {AddressDialog} from "./address-dialog"
import {AccessoriesMenu} from "./accessories-menu"
import {API_URLS} from "@/lib/map";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [addressDialogOpen, setAddressDialogOpen] = useState(false);
    const [currentAddress, setCurrentAddress] = useState("Đang xác định vị trí...");
    const [, setShowAccessoriesMenu] = useState(false);
    const accessoriesRef = useRef<HTMLLIElement>(null);

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

    useEffect(() => {
        const fetchLocation = async () => {
            if (!navigator.geolocation) {
                console.error("Trình duyệt không hỗ trợ GPS.");
                setCurrentAddress("Không thể xác định vị trí.");
                return;
            }

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const {latitude, longitude} = position.coords;

                    try {

                        const response = await fetch(API_URLS.GOONG_GEOCODE(latitude, longitude));
                        const data = await response.json();

                        if (data.results && data.results.length > 0) {
                            const address = data.results[0].formatted_address || "Không xác định được địa chỉ.";
                            setCurrentAddress(address);
                        } else {
                            setCurrentAddress("Không tìm thấy địa chỉ từ GPS.");
                        }
                    } catch (error) {
                        console.error("Lỗi khi gọi Goong API:", error);
                        setCurrentAddress("Lỗi khi lấy địa chỉ từ GPS.");
                    }
                },
                (error) => {
                    console.error("Lỗi khi lấy vị trí:", error.message);
                    setCurrentAddress("Không thể truy cập GPS.");
                }
            );
        };

        void fetchLocation();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (accessoriesRef.current && !accessoriesRef.current.contains(event.target as Node)) {
                setShowAccessoriesMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header
            className={`w-full bg-[#ff7f50] text-white ${scrolled ? 'shadow-md' : ''} sticky top-0 z-50`}
        >
            {/* Top header with decorative lights */}
            <div className="h-6 bg-[url('/lights.png')] bg-repeat-x"/>

            {/* Main header */}
            <div
                className="w-full max-w-[1400px] mx-auto px-4 lg:px-10 xl:px-20 flex justify-between items-center py-2">
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
                        <UserIcon className="mr-2 h-5 w-5"/>
                        <span className="hidden sm:inline">Đăng nhập</span>
                    </Button>

                    <Button
                        variant="ghost"
                        className="h-12 text-white hover:bg-[#f0932b] text-sm whitespace-nowrap"
                    >
                        <ShoppingCartIcon className="mr-2 h-5 w-5"/>
                        <span className="hidden sm:inline">Giỏ hàng</span>
                    </Button>

                    <Button
                        variant="ghost"
                        className="h-12 text-white hover:bg-[#f0932b] text-sm whitespace-nowrap"
                        onClick={() => setAddressDialogOpen(true)}
                    >
                        <MapPinIcon className="mr-2 h-5 w-5"/>
                        <span className="hidden sm:inline">{currentAddress}</span>
                        <ChevronDownIcon className="ml-1 h-5 w-5"/>
                    </Button>

                </div>
            </div>

            {/* Navigation */}
            <nav className="w-full overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                <div className="w-full max-w-[1500px] mx-auto px-4 lg:px-10 xl:px-20">
                    <ul className="flex items-center gap-0.5 text-sm py-1 w-max min-w-full">
                        <NavItem icon={<Smartphone className="h-5 w-5"/>} label="Điện thoại"/>
                        <NavItem icon={<Laptop className="h-5 w-5"/>} label="Laptop"/>
                        <NavItem
                            icon={<Headphones className="h-5 w-5"/>}
                            label="Phụ kiện"
                            showChevron
                            showAccessories
                        />
                        <NavItem icon={<Watch className="h-5 w-5"/>} label="Smartwatch"/>
                        <NavItem icon={<Clock className="h-5 w-5"/>} label="Đồng hồ"/>
                        <NavItem icon={<Tablet className="h-5 w-5"/>} label="Tablet"/>
                        <NavItem icon={<Monitor className="h-5 w-5"/>} label="PC, Máy chiếu" showChevron/>
                        <NavItem icon={<Home className="h-5 w-5"/>} label="Nhà thông minh" showChevron/>
                        <NavItem icon={<Shirt className="h-5 w-5"/>} label="Thể thao, thời trang" showChevron/>
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
    showAccessories?: boolean
    onHover?: () => void
    onLeave?: () => void
}

function NavItem({icon, label, showChevron, showAccessories, onHover, onLeave}: NavItemProps) {

    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const handleMouseEnter = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onHover && onHover();
        setIsMenuVisible(true);
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onLeave && onLeave();
            setIsMenuVisible(false);
        }, 100);
    };

    return (
        <li
            className="flex-grow relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{position: 'static'}}
        >
            <Button
                variant="ghost"
                className="h-12 text-white hover:bg-[#f0932b] text-sm whitespace-nowrap w-full relative z-10"
            >
                {icon}
                <span className="ml-2">{label}</span>
                {showChevron && <ChevronDownIcon className="ml-1 h-5 w-5 text-white"/>}
            </Button>

            {showAccessories && isMenuVisible && (
                <div
                    className="absolute left-0 w-screen bg-white shadow-lg z-50"
                    style={{top: '100%'}}
                >
                    <div className="relative max-w-[1400px] mx-auto">
                        <AccessoriesMenu/>
                    </div>
                </div>
            )}
        </li>
    );
}

