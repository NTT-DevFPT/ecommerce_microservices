"use client";

import { useState } from "react";
import Link from "next/link";
import {phone, laptop, accessories, tablet, smartHome, smartwatch} from "@/app/data/product";
import {Product} from "@/types/product";

export default function Home() {


    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSlide = 4;

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

    const renderProductCarousel = (products: Product[]) => (
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
                        <Link
                            key={product.id}
                            href={`/${product.category}/${product.slug}`}
                            passHref>
                            <div
                                className="min-w-1/4 p-4 cursor-pointer"
                                style={{
                                    flex: "0 0 25%",
                                    width: "310px",
                                    height: "500px",
                                }}
                            >
                                <div
                                    className="bg-[#333333] p-4 rounded-lg text-center shadow-lg hover:scale-105 transition-transform duration-300"
                                    style={{
                                        height: "100%",
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-80 object-cover mb-4 rounded-lg"
                                        style={{
                                            height: "300px",
                                        }}
                                    />

                                    <h2
                                        className="font-bold mb-2 flex items-center justify-center"
                                        style={{
                                            fontSize: "16px",
                                            lineHeight: "1.2",
                                            height: "48px",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {product.name}
                                    </h2>

                                    <div>
                                        <div className="flex justify-center items-center gap-2 mb-2">
                                            <span className="text-white text-xl font-semibold">{product.price}</span>
                                            <span
                                                className="line-through text-gray-400 text-sm">{product.oldPrice}</span>
                                            <span className="text-red-500 font-bold">{product.discount}</span>
                                        </div>

                                        <div className="text-orange-400 font-medium">Online giá rẻ quá</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
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

            <h2 className="text-4xl text-center mb-4 font-bold">Điện thoại</h2>
                {renderProductCarousel(phone)}

                <h2 className="text-4xl text-center mb-4 font-bold">Máy tính</h2>
                {renderProductCarousel(laptop)}

                <h2 className="text-4xl text-center mb-4 font-bold">Đồng hồ thông minh</h2>
                {renderProductCarousel(smartwatch)}

                <h2 className="text-4xl text-center mb-4 font-bold">Máy tính bảng</h2>
                {renderProductCarousel(tablet)}

                <h2 className="text-4xl text-center mb-4 font-bold">Nhà thông minh</h2>
                {renderProductCarousel(smartHome)}

                <h2 className="text-4xl text-center mb-4 font-bold">Phụ kiện</h2>
                {renderProductCarousel(accessories)}
            </div>
        </div>
    );
}
