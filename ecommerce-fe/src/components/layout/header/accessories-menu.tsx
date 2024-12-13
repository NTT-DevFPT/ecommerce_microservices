import Link from 'next/link'
import { cn } from "@/lib/utils"

interface AccessoryItem {
    name: string
    icon: string
    href: string
}

interface AccessoryCategory {
    title: string
    items: AccessoryItem[]
}

const mobileAccessories: AccessoryCategory = {
    title: "Phụ kiện di động",
    items: [
        { name: "Sạc dự phòng", icon: "🔋", href: "#" },
        { name: "Sạc, cáp", icon: "🔌", href: "#" },
        { name: "Ốp lưng điện thoại", icon: "📱", href: "#" },
        { name: "Ốp lưng máy tính bảng", icon: "💻", href: "#" },
        { name: "Miếng dán", icon: "🔳", href: "#" },
        { name: "Miếng dán Camera", icon: "📷", href: "#" },
        { name: "Tai nghe Bluetooth", icon: "🎧", href: "#" },
        { name: "Tai nghe dây", icon: "🎧", href: "#" },
        { name: "Tai nghe chụp tai", icon: "🎧", href: "#" },
        { name: "Tai nghe thể thao", icon: "🏃", href: "#" },
        { name: "Loa", icon: "🔊", href: "#" },
        { name: "Micro", icon: "🎙️", href: "#" },
    ]
}

const smartHomeAccessories: AccessoryCategory = {
    title: "Thiết bị nhà thông minh",
    items: [
        { name: "Camera trong nhà", icon: "🏠", href: "#" },
        { name: "Camera ngoài trời", icon: "🌳", href: "#" },
    ]
}

const laptopAccessories: AccessoryCategory = {
    title: "Phụ kiện laptop",
    items: [
        { name: "Hub, cáp chuyển đổi", icon: "🔌", href: "#" },
        { name: "Chuột máy tính", icon: "🖱️", href: "#" },
        { name: "Bàn phím", icon: "⌨️", href: "#" },
        { name: "Router - Thiết bị mạng", icon: "📡", href: "#" },
        { name: "Balo, túi chống sốc", icon: "🎒", href: "#" },
    ]
}

const brands = [
    { name: "Apple", logo: "🍎", href: "#" },
    { name: "Samsung", logo: "🌟", href: "#" },
    { name: "Imou", logo: "📹", href: "#" },
    { name: "Baseus", logo: "🔋", href: "#" },
    { name: "JBL", logo: "🎵", href: "#" },
    { name: "Anker", logo: "⚡", href: "#" },
    { name: "Xmobile", logo: "📱", href: "#" },
]

export function AccessoriesMenu() {
    return (
        <div className="absolute left-0 w-screen bg-white shadow-lg border-t mt-1 z-50">
            <div className="w-[700px] mx-auto p-4 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                {/* Mobile Accessories */}
                <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">{mobileAccessories.title}</h3>
                    <div className="grid grid-cols-6 gap-4">
                        {mobileAccessories.items.map((item) => (
                            <AccessoryItem key={item.name} item={item} />
                        ))}
                    </div>
                </div>

                {/* Smart Home Accessories */}
                <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">{smartHomeAccessories.title}</h3>
                    <div className="grid grid-cols-6 gap-4">
                        {smartHomeAccessories.items.map((item) => (
                            <AccessoryItem key={item.name} item={item} />
                        ))}
                    </div>
                </div>

                {/* Laptop Accessories */}
                <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">{laptopAccessories.title}</h3>
                    <div className="grid grid-cols-6 gap-4">
                        {laptopAccessories.items.map((item) => (
                            <AccessoryItem key={item.name} item={item} />
                        ))}
                    </div>
                </div>

                {/* Brands */}
                <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Thương hiệu hàng đầu</h3>
                    <div className="grid grid-cols-7 gap-4">
                        {brands.map((brand) => (
                            <Link
                                key={brand.name}
                                href={brand.href}
                                className="flex flex-col items-center group"
                            >
                                <div className="w-10 h-10 mb-2 flex items-center justify-center text-2xl">
                                    {brand.logo}
                                </div>
                                <span className="text-xs text-gray-600 text-center group-hover:text-blue-600">
                                    {brand.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function AccessoryItem({ item }: { item: AccessoryItem }) {
    return (
        <Link
            href={item.href}
            className="flex flex-col items-center group"
        >
            <div className="w-10 h-10 mb-2 flex items-center justify-center text-2xl">
                {item.icon}
            </div>
            <span className="text-xs text-gray-600 text-center group-hover:text-blue-600">
        {item.name}
      </span>
        </Link>
    )
}

