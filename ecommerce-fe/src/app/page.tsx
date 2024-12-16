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
                {/* Header */}
                <div className="flex justify-center mb-8">
                    <div className="text-4xl font-bold px-6 py-2 rounded-lg shadow-lg bg-[#1e272e]">
                        Xiaomi Products
                    </div>
                </div>

                <h2 className="text-2xl text-center mb-4 font-bold">Phone</h2>
                {renderProductCarousel(phone)}

                <h2 className="text-2xl text-center mb-4 font-bold">Laptop</h2>
                {renderProductCarousel(laptop)}

                <h2 className="text-2xl text-center mb-4 font-bold">Accessories</h2>
                {renderProductCarousel(accessories)}

                <h2 className="text-2xl text-center mb-4 font-bold">Smartwatch</h2>
                {renderProductCarousel(smartwatch)}

                <h2 className="text-2xl text-center mb-4 font-bold">Tablet</h2>
                {renderProductCarousel(tablet)}

                <h2 className="text-2xl text-center mb-4 font-bold">Smart Home</h2>
                {renderProductCarousel(smartHome)}
            </div>
        </div>
    );
}
