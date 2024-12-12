'use client'

import * as React from "react"
import Link from "next/link"
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {Badge} from "@/components/ui/badge"
import '/src/components/css/banner.css'

interface BannerSlide {
    id: number
    title: string
    subtitle: string
    description: string
    image: string
    ctaText: string
    ctaLink: string
    badge?: string
    theme: "light" | "dark"
}

const slides: BannerSlide[] = [
    {
        id: 1,
        title: "xiaomi 14T Pro",
        subtitle: "Master light, capture night",
        description: "Ghi lại khoảnh khắc đêm hoàn hảo với ống kính Leica",
        image: "/image/banner/banner_01.jpg",
        ctaText: "Mua ngay",
        ctaLink: "#",
        badge: "Advanced AI",
        theme: "dark"
    },
    {
        id: 2,
        title: "Có Xiaomi, làm gì cũng dễ như ăn bánh",
        subtitle: "Trổ tài làm bánh siêu đơn giản",
        description: "với các thiết bị nhà bếp của Xiaomi, cho năm mới thêm hương vị ngọt ngào!",
        image: "/image/banner/banner_04.jpg",
        ctaText: "Tìm hiểu thêm",
        ctaLink: "#",
        theme: "dark"
    },
    {
        id: 3,
        title: "Xiaomi HyperOS",
        subtitle: "Nhanh hơn. Thông minh hơn. Mượt mà hơn.",
        description: "Có mặt đầu tiên trên Xiaomi 14T Series.",
        image: "/image/banner/banner_02.jpg",
        ctaText: "Tìm hiểu thêm",
        ctaLink: "#",
        theme: "light"
    },
    {
        id: 4,
        title: "Xiaomi Imagery Awards 2024",
        subtitle: "Cơ hội cuối cùng để giành chiến thắng!",
        description: "Biến tài năng của bạn thành giải thưởng",
        image: "/image/banner/banner_03.jpg",
        ctaText: "Tìm hiểu thêm",
        ctaLink: "#",
        theme: "light"
    }
]

export default function Banner() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isHovered, setIsHovered] = React.useState(false); // Trạng thái hover
    const slide = slides[currentSlide];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={slide.image} alt={slide.title} className="w-full h-[700px] object-cover"/>

            {/* Content */}
            <div
                className={`absolute inset-0 bg-gradient-to-r ${slide.theme === 'light' ? 'from-background/80 to-background/20' : 'from-background/90 to-background/90'}`}>
                <div className="container relative flex h-full flex-col justify-center space-y-6 px-4 md:px-6">
                    {slide.badge && (
                        <Badge
                            className="w-fit bg-black text-white px-4 py-1 rounded-full text-sm font-medium ml-[100px]">
                            {slide.badge}
                        </Badge>
                    )}
                    <div className="space-y-4">
                        <h1
                            className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl 
                                ${slide.id === 1 || slide.id === 2 ? "text-black" : "text-white"} 
                                ${slide.id === 3 ? "text-center pl-[210px]" : ""}
                                ${slide.id === 1 ? "pl-[100px]" : slide.id === 2 ? "pl-[80px]" : "pl-[60px]"}`}
                        >
                            {slide.title}
                        </h1>

                        <h2
                            className={`text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl 
                                ${slide.id === 1 || slide.id === 2 ? "text-black" : "text-white"} 
                                ${slide.id === 3 ? "text-center pl-[180px] text-2xl" : ""}
                                ${slide.id === 1 ? "pl-[100px]" : slide.id === 2 ? "pl-[80px]" : "pl-[60px]"}`}
                        >
                            {slide.subtitle}
                        </h2>

                        <p
                            className={`w-full max-w-[6000px] md:text-lg whitespace-normal 
                                ${slide.id === 1 || slide.id === 2 ? "text-black/80" : "text-white/80"} 
                                ${slide.id === 3 ? "text-center pl-[235px]" : ""}
                                ${slide.id === 1 ? "pl-[100px]" : slide.id === 2 ? "pl-[80px]" : "pl-[60px]"} 
                                break-words`}
                        >
                            {slide.description}
                        </p>

                    </div>

                    <Link
                        href={slide.ctaLink}
                        className={`inline-flex h-12 items-center justify-center rounded-lg px-10 w-fit text-lg font-medium transition-color 
                            ${slide.id === 1 || slide.id === 2 ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90"}
                            ${slide.id === 1 ? "ml-[400px] relative top-[3vh]" : ""}
                            ${slide.id === 2 ? "ml-[80px] relative top-[3vh]" : ""}
                            ${slide.id === 3 ? "ml-[740px] relative top-[10vh]" : ""}
                            ${slide.id === 4 ? "ml-[60px] relative top-[4vh]" : ""}
                        `}
                    >
                        {slide.ctaText}
                    </Link>

                </div>
            </div>

            {/* Button điều hướng trái/phải */}
            <div
                className={`absolute top-1/2 left-0 right-0 flex justify-between px-6 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
            >
                <button
                    className="w-12 h-12 bg-white/80 hover:bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-6 w-6 text-gray-700"/>
                </button>

                <button
                    className="w-12 h-12 bg-white/80 hover:bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-6 w-6 text-gray-700"/>
                </button>
            </div>

            {/* Indicator */}
            <div
                className="container absolute bottom-4 left-1/2 flex -translate-x-1/2 justify-center gap-2 px-4 md:px-6">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 transition-all duration-300 ${index === currentSlide ? "w-12 bg-white" : "w-4 bg-white/50"}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}
