"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {ChevronDown, ChevronRight, Package, Phone, Shield, Truck} from 'lucide-react';
import ProductSpecifications from "@/components/layout/product/product-specifications";

interface Product {
    id: number;
    name: string;
    price: string;
    oldPrice: string;
    discount: string;
    image: string;
    category: string;
    slug: string;
    thumbnails: string[];
    storageOptions: {
        size: string;
        price: number;
    }[];
    colors: {
        name: string;
        value: string;
    }[];
}

export default function ProductDetail({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const unwrappedParams = use(params); // Unwrap the params
    const [product, setProduct] = useState<Product | null>(null);
    const [selectedStorage, setSelectedStorage] = useState<string>("8GB - 256GB");
    const [selectedColor, setSelectedColor] = useState<string>("Silver");
    const [selectedImage, setSelectedImage] = useState<string>("");

    const { category, slug } = unwrappedParams;

    useEffect(() => {
        // This would normally fetch from an API or database
        const mockProduct: Product = {
            id: 1,
            name: "MacBook Air 13 inch M2 8GPU",
            price: "24.490.000₫",
            oldPrice: "24.990.000₫",
            discount: "-2%",
            image: "/image/product/phone/xiaomi-14t-pro.jpg",
            category: category,
            slug: slug,
            storageOptions: [
                {size: "8GB - 256GB", price: 24490000},
                {size: "16GB - 256GB", price: 26490000}
            ],
            colors: [
                {name: "Silver", value: "bg-gray-200"},
                {name: "White", value: "bg-white"},
                {name: "Space Gray", value: "bg-gray-600"},
                {name: "Navy Blue", value: "bg-blue-900"}
            ],
            thumbnails: [
                "/image/product/phone/xiaomi-14t-pro.jpg",
                "/image/product/phone/xiaomi-14t-pro-2.jpg",
                "/image/product/phone/xiaomi-14t-pro-3.jpg"
            ]
        };
        setProduct(mockProduct);
        setSelectedImage(mockProduct.image);
    }, [category, slug]);

    if (!product) return <div className="text-center py-8">Loading...</div>;

    const handlePrevImage = () => {
        const currentIndex = product.thumbnails.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + product.thumbnails.length) % product.thumbnails.length;
        setSelectedImage(product.thumbnails[prevIndex]);
    };

    const handleNextImage = () => {
        const currentIndex = product.thumbnails.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % product.thumbnails.length;
        setSelectedImage(product.thumbnails[nextIndex]);
    };

    const specifications = [
        {
            title: "Bộ xử lý",
            specs: [
                { label: "Công nghệ CPU", value: "Apple M4 - Hãng không công bố" },
                { label: "Số nhân", value: "10" },
                { label: "Số luồng", value: "Hãng không công bố" },
                { label: "Tốc độ CPU", value: "120 GB/s memory bandwidth" },
                { label: "Tốc độ tối đa", value: "Hãng không công bố" }
            ]
        },
        {
            title: "Bộ nhớ RAM, Ổ cứng",
            specs: [
                { label: "RAM", value: "8GB" },
                { label: "Loại RAM", value: "Unified Memory" },
                { label: "Ổ cứng", value: "256GB SSD" }
            ]
        },
        {
            title: "Màn hình",
            specs: [
                { label: "Kích thước màn hình", value: "13.6 inch" },
                { label: "Công nghệ màn hình", value: "Liquid Retina" },
                { label: "Độ phân giải", value: "2560 x 1664 pixels" }
            ]
        },
        {
            title: "Đồ họa và Âm thanh",
            specs: [
                { label: "Card màn hình", value: "Card tích hợp - 10 nhân GPU" },
                {
                    label: "Công nghệ âm thanh",
                    value: "Hệ thống âm thanh 6 loa \nSpatial Audio \n3 microphones \nDolby Atmos"
                }
            ]
        },
        {
            title: "Cổng kết nối & tính năng ở rộng",
            specs:  [
                { label: "Cổng giao tiếp", value: "MagSafe 3 \n" +
                        "Jack tai nghe 3.5 mm \n" +
                        "HDMI \n" +
                        "3 x Thunderbolt 4 ( hỗ trợ DisplayPort, Thunderbolt 4 (up to 40Gb/s), USB 4 (up to 40Gb/s))" },
                { label: "Kết nối không dây", value: "Wi-Fi 6E (802.11ax) \n" +
                        "Bluetooth 5.3 \n" },
                {
                    label: "Khe đọc thẻ nhớ", value: "SD",
                },
                {
                    label: "Webcam", value: "1080p FaceTime HD camera",
                },
                {
                    label: "Tính năng khác", value: "Bao mật vân tay",
                },
                {
                    label: "Đèn bàn phím", value: "Đơn sắc trắng",
                }
            ]
        },
        {
            title: "Kích thước- Khối lượng - Pin",
            specs: [
                {
                    label: "Kích thước", value: "Dài 312.6 mm - Rộng 221.2 mm - Dày 15.5 mm - 1.55 kg",
                },
                {
                    label: "Chất liệu", value: "Vỏ nhôm tái chế 100%",
                },
                {
                    label: "Thông tin Pin", value: "Li-Po, 72.4 Wh",
                },
                {
                    label: "Hệ điều hành", value: "macOS Sequoia",
                },
                {
                    label: "Thời điểm ra mắt", value: "10/2024",
                }
            ]
        }
    ]

    return (
        <div className="bg-[#222] min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Product Image */}
                    <div className="relative ml-[-10vh]">
                        {/* Hình ảnh chính */}
                        <div className="relative">
                            {/* Hình ảnh chính */}
                            <div
                                className="relative w-[700px] h-[550px] rounded-lg overflow-hidden mb-4">
                                <Image
                                    src={selectedImage}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Thumbnails */}
                            <div className="flex space-x-4 mb-6 relative top-[5vh]">
                                {product.thumbnails.map((thumb, index) => (
                                    <div
                                        key={index}
                                        className="w-20 h-20 border-2 rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105"
                                        onClick={() => setSelectedImage(thumb)}
                                    >
                                        <Image
                                            src={thumb}
                                            alt={`Thumbnail ${index}`}
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Nút chuyển hình */}
                            <div
                                className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                                <button
                                    aria-label="Previous image"
                                    className="bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100 "
                                    onClick={handlePrevImage}
                                >
                                    &#8592;
                                </button>
                                <button
                                    aria-label="Next image"
                                    className="bg-black text-white p-2 rounded-full opacity-50 hover:opacity-100 relative right-[-4vh]"
                                    onClick={handleNextImage}
                                >
                                    &#8594;
                                </button>

                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="text-white relative right-[-10vh]">
                        {/* Product Title and Location */}
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold">{product.name}</h1>
                            <div className="flex items-center text-gray-400 mt-2">
                                <span>Giá và khuyến mãi tại: </span>
                                <span className="flex items-center ml-1">
                                    Hồ Chí Minh
                                    <ChevronDown className="w-4 h-4 ml-1"/>
                                </span>
                            </div>
                        </div>

                        {/* Price and VIP Badge */}
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-3xl font-bold">{product.price}</span>
                            <span className="line-through text-gray-400">{product.oldPrice}</span>
                        </div>

                        {/* Storage Options */}
                        <div className="mb-6">
                            <h3 className="text-lg mb-2">Dung lượng</h3>
                            <div className="flex gap-4">
                                {product.storageOptions.map((option) => (
                                    <button
                                        key={option.size}
                                        onClick={() => setSelectedStorage(option.size)}
                                        className={`px-4 py-2 rounded-lg border ${selectedStorage === option.size ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600'} hover:bg-blue-500/10 transition-colors duration-200`}
                                    >
                                        {option.size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Color Options */}
                        <div className="mb-6">
                            <h3 className="text-lg mb-2">Màu: {selectedColor}</h3>
                            <div className="flex gap-4">
                                {product.colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-8 h-8 rounded-full ${color.value} border-2 ${
                                            selectedColor === color.name
                                                ? 'border-blue-500'
                                                : 'border-transparent'
                                        }`}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Promotion Details */}
                        <Card className="bg-gray-800 border-none mb-6">
                            <div className="p-4">
                                <h3 className="font-bold mb-2">Khuyến mãi</h3>
                                <p className="text-sm text-gray-300">
                                    Giá và khuyến mãi dự kiến áp dụng đến 23:59 | 31/12
                                </p>
                                <div className="mt-2 text-sm text-gray-300">
                                    <p>• Nhập mã VNPAY200K giảm từ 50.000đ đến 200.000đ (áp dụng đơn từ 500.000đ) thanh
                                        toán qua VNPAY-QR.</p>

                                </div>
                            </div>
                        </Card>

                        {/* Action Buttons */}
                        <div className="mb-6">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full">
                                Mua ngay
                            </Button>
                        </div>

                        {/* Product Information */}
                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <Package className="w-4 h-4"/>
                                <span>Bộ sản phẩm gồm: Hộp, Adapter sạc, Cáp</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4"/>
                                <span>Bảo hành chính hãng 1 năm</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Truck className="w-4 h-4"/>
                                <span>Giao hàng nhanh toàn quốc </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4"/>
                                <span>Tổng đài: <a href="tel:1900066742" className="text-blue-400">1900 066 742</a> (8:00 - 21:30)</span>
                            </div>
                        </div>

                    </div>

                    <div className="col-span-1 lg:col-span-2 flex justify-center items-center">
                        <ProductSpecifications specifications={specifications}/>
                    </div>
                </div>
            </div>
        </div>
    );
}