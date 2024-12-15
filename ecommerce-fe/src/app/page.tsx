"use client";

import { useState } from "react";

export default function Home() {
    const phone = [
        {
            id: 1,
            name: "Xiaomi 14T Pro 5G",
            price: "15.460.000₫",
            oldPrice: "16.990.000₫",
            discount: "-9%",
            image: "/image/product/phone/xiaomi-14t-pro.jpg",
        },
        {
            id: 2,
            name: "Xiaomi 14T 5G",
            price: "12.990.000₫",
            oldPrice: "13.990.000₫",
            discount: "-1%",
            image: "/image/product/phone/xiaomi-14t.jpg",
        },
        // thêm sản phẩm khác...
    ];

    const laptop = [
        {
            id: 1,
            name: "Xiaomi Mi Notebook Pro 14",
            price: "19.990.000₫",
            oldPrice: "22.990.000₫",
            discount: "-13%",
            image: "/image/product/laptop/xiaomi-mi-notebook-pro-14.jpg",
        },
        {
            id: 2,
            name: "Xiaomi RedmiBook 15",
            price: "10.990.000₫",
            oldPrice: "12.990.000₫",
            discount: "-15%",
            image: "/image/product/laptop/xiaomi-redmibook-15.jpg",
        },
        // thêm sản phẩm khác...
    ];

    const accessories = [
        {
            id: 1,
            name: "Xiaomi Mi Wireless Mouse",
            price: "350.000₫",
            oldPrice: "400.000₫",
            discount: "-12%",
            image: "/image/product/accessories/xiaomi-mi-wireless-mouse.jpg",
        },
        {
            id: 2,
            name: "Xiaomi Mi Power Bank 3",
            price: "250.000₫",
            oldPrice: "300.000₫",
            discount: "-17%",
            image: "/image/product/accessories/xiaomi-mi-power-bank-3.jpg",
        },
        // thêm sản phẩm khác...
    ];

    const smartwatch = [
        {
            id: 1,
            name: "Xiaomi Mi Band 7",
            price: "850.000₫",
            oldPrice: "999.000₫",
            discount: "-15%",
            image: "/image/product/smartwatch/xiaomi-mi-band-7.jpg",
        },
        {
            id: 2,
            name: "Xiaomi Watch S1",
            price: "3.990.000₫",
            oldPrice: "4.990.000₫",
            discount: "-20%",
            image: "/image/product/smartwatch/xiaomi-watch-s1.jpg",
        },
        // thêm sản phẩm khác...
    ];

    const tablet = [
        {
            id: 1,
            name: "Xiaomi Pad 5",
            price: "7.990.000₫",
            oldPrice: "9.990.000₫",
            discount: "-20%",
            image: "/image/product/tablet/xiaomi-pad-5.jpg",
        },
        {
            id: 2,
            name: "Xiaomi Pad 6",
            price: "10.990.000₫",
            oldPrice: "12.990.000₫",
            discount: "-15%",
            image: "/image/product/tablet/xiaomi-pad-6.jpg",
        },
        // thêm sản phẩm khác...
    ];

    const smartHome = [
        {
            id: 1,
            name: " Mi Home Security Camera 360°",
            price: "1.190.000₫",
            oldPrice: "1.490.000₫",
            discount: "-20%",
            image: "/image/product/smartHome/xiaomi-mi-home-security-camera.jpg",
        },
        {
            id: 2,
            name: "Xiaomi Mi Smart Plug",
            price: "200.000₫",
            oldPrice: "300.000₫",
            discount: "-33%",
            image: "/image/product/smartHome/xiaomi-mi-smart-plug.jpg",
        },
        // thêm sản phẩm khác...
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 4; // Số sản phẩm hiển thị cùng lúc

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + itemsPerSlide >= phone.length ? 0 : prev + itemsPerSlide
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev - itemsPerSlide < 0
                ? phone.length - itemsPerSlide
                : prev - itemsPerSlide
        );
    };

    const renderProductCarousel = (products: any[]) => (
        <div className="relative flex items-center mb-8">
            <button
                onClick={prevSlide}
                className="absolute left-[-7vh] z-10 bg-[#333] p-4 rounded-full hover:bg-yellow-400 transition duration-300"
            >
                ◀
            </button>
            <div className="overflow-hidden w-full">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="min-w-1/4 p-4"
                            style={{ flex: "0 0 25%" }}
                        >
                            <div className="bg-[#333333] p-4 rounded-lg text-center shadow-lg hover:scale-105 transition-transform duration-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-80 object-cover mb-4 rounded-lg"
                                />
                                <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                                <div className="flex justify-center items-center gap-2 mb-2">
                                    <span className="text-white text-xl font-semibold">
                                        {product.price}
                                    </span>
                                    <span className="line-through text-gray-400 text-sm">
                                        {product.oldPrice}
                                    </span>
                                    <span className="text-red-500 font-bold">
                                        {product.discount}
                                    </span>
                                </div>
                                <div className="text-orange-400 font-medium">
                                    Online giá rẻ quá
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={nextSlide}
                className="absolute right-[-7vh] z-10 bg-[#333] p-4 rounded-full hover:bg-yellow-400 transition duration-300"
            >
                ▶
            </button>
        </div>
    );

    return (
        <div className="bg-[#222] text-white min-h-screen">
            <div className="container mx-auto px-4 py-8 relative">
                {/* Header */}
                <div className="flex justify-center mb-8">
                    <div className="text-4xl font-bold px-6 py-2 rounded-lg shadow-lg bg-[#1e272e]">
                        Xiaomi Products
                    </div>
                </div>

                {/* Phone Carousel */}
                <h2 className="text-2xl text-center mb-4 font-bold">Phone</h2>
                {renderProductCarousel(phone)}

                {/* Laptop Carousel */}
                <h2 className="text-2xl text-center mb-4 font-bold">Laptop</h2>
                {renderProductCarousel(laptop)}

                {/* Accessories Carousel */}
                <h2 className="text-2xl text-center mb-4 font-bold">Accessories</h2>
                {renderProductCarousel(accessories)}

                {/* Smartwatch Carousel */}
                <h2 className="text-2xl text-center mb-4 font-bold">Smartwatch</h2>
                {renderProductCarousel(smartwatch)}

                {/* Tablet Carousel */}
                <h2 className="text-2xl text-center mb-4 font-bold">Tablet</h2>
                {renderProductCarousel(tablet)}

                {/* Smart Home Carousel */}
                <h2 className="text-2xl text-center mb-4 font-bold">Smart Home</h2>
                {renderProductCarousel(smartHome)}
            </div>
        </div>
    );
}
