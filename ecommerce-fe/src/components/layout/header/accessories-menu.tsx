import Link from 'next/link'
import {
    Battery0Icon,
    BriefcaseIcon,
    CameraIcon,
    TruckIcon,
    DocumentTextIcon,
    CircleStackIcon,
    SpeakerWaveIcon,
    MicrophoneIcon,
    CursorArrowRaysIcon,
    PencilIcon,
    PowerIcon,
    ServerIcon,
    DevicePhoneMobileIcon,
    DeviceTabletIcon,
    TagIcon,
    SquaresPlusIcon,
    UsersIcon,
    ClockIcon,
    ComputerDesktopIcon,
} from '@heroicons/react/24/outline'

interface AccessoryItem {
    name: string
    icon: React.ReactNode
    href: string
}

interface AccessoryCategory {
    title: string
    items: AccessoryItem[]
}

const mobileAccessories: AccessoryCategory = {
    title: "Phụ kiện di động",
    items: [
        {name: "Sạc dự phòng", icon: <Battery0Icon className="w-6 h-6"/>, href: "#"},
        {name: "Sạc, cáp", icon: <PowerIcon className="w-6 h-6"/>, href: "#"},
        {name: "Ốp lưng điện thoại", icon: <DevicePhoneMobileIcon className="w-6 h-6"/>, href: "#"},
        {name: "Ốp lưng máy tính bảng", icon: <DeviceTabletIcon className="w-6 h-6"/>, href: "#"},
        {name: "Miếng dán", icon: <SquaresPlusIcon className="w-6 h-6"/>, href: "#"},
        {name: "Miếng dán Camera", icon: <CameraIcon className="w-6 h-6"/>, href: "#"},
        {name: "Bút tablet", icon: <PencilIcon className="w-6 h-6"/>, href: "#"},
        {name: "Dây đồng hồ", icon: <ClockIcon className="w-6 h-6"/>, href: "#"},

    ]
}

const laptopAccessories: AccessoryCategory = {
    title: "Phụ kiện laptop",
    items: [
        {name: "Hub, cáp chuyển đổi", icon: <PowerIcon className="w-6 h-6"/>, href: "#"},
        {name: "Chuột máy tính", icon: <CursorArrowRaysIcon className="w-6 h-6"/>, href: "#"},
        {name: "Bàn phím", icon: <ComputerDesktopIcon className="w-6 h-6"/>, href: "#"},
        {name: "Router - Thiết bị mạng", icon: <ServerIcon className="w-6 h-6"/>, href: "#"},
        {name: "Balo, túi chống sốc", icon: <BriefcaseIcon className="w-6 h-6"/>, href: "#"},
        {name: "Phần mềm", icon: <DocumentTextIcon className="w-6 h-6"/>, href: "#"},
    ]
}

const audioDevices: AccessoryCategory = {
    title: "Thiết bị âm thanh",
    items: [
        {name: "Tai nghe Bluetooth", icon: <SpeakerWaveIcon className="w-6 h-6"/>, href: "#"},
        {name: "Tai nghe dây", icon: <SpeakerWaveIcon className="w-6 h-6"/>, href: "#"},
        {name: "Tai nghe chụp tai", icon: <SpeakerWaveIcon className="w-6 h-6"/>, href: "#"},
        {name: "Tai nghe thể thao", icon: <UsersIcon className="w-6 h-6"/>, href: "#"},
        {name: "Loa", icon: <SpeakerWaveIcon className="w-6 h-6"/>, href: "#"},
        {name: "Micro", icon: <MicrophoneIcon className="w-6 h-6"/>, href: "#"},
    ]
}

const storageDevices: AccessoryCategory = {
    title: "Thiết bị lưu trữ",
    items: [
        {name: "Ổ cứng di động", icon: <CircleStackIcon className="w-6 h-6"/>, href: "#"},
        {name: "Thẻ nhớ", icon: <CircleStackIcon className="w-6 h-6"/>, href: "#"},
        {name: "USB", icon: <CircleStackIcon className="w-6 h-6"/>, href: "#"},
    ]
}

const otherAccessories: AccessoryCategory = {
    title: "Phụ kiện khác",
    items: [
        {name: "Pin tiểu", icon: <Battery0Icon className="w-6 h-6"/>, href: "#"},
        {name: "Phụ kiện ô tô", icon: <TruckIcon className="w-6 h-6"/>, href: "#"},
    ]
}

export function AccessoriesMenu() {

    return (
        <div
            className="absolute left-1/2 transform -translate-x-1/2 w-[1100px] bg-white shadow-lg border rounded-lg mt-1 z-50">
            <div
                className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                <div className="p-8">
                    <div className="grid grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="space-y-8">
                            {/* Mobile Accessories */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-6">{mobileAccessories.title}</h3>
                                <div className="grid grid-cols-4 gap-6">
                                    {mobileAccessories.items.map((item) => (
                                        <AccessoryItem key={item.name} item={item}/>
                                    ))}
                                </div>
                            </div>

                            {/* Storage Devices */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-6">{storageDevices.title}</h3>
                                <div className="grid grid-cols-4 gap-6">
                                    {storageDevices.items.map((item) => (
                                        <AccessoryItem key={item.name} item={item}/>
                                    ))}
                                </div>
                            </div>

                            {/* Other Accessories */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-6">{otherAccessories.title}</h3>
                                <div className="grid grid-cols-4 gap-6">
                                    {otherAccessories.items.map((item) => (
                                        <AccessoryItem key={item.name} item={item}/>
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="space-y-8">
                            {/* Laptop Accessories */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-6">{laptopAccessories.title}</h3>
                                <div className="grid grid-cols-4 gap-6">
                                    {laptopAccessories.items.map((item) => (
                                        <AccessoryItem key={item.name} item={item}/>
                                    ))}
                                </div>
                            </div>

                            {/* Audio Devices */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-6">{audioDevices.title}</h3>
                                <div className="grid grid-cols-4 gap-6">
                                    {audioDevices.items.map((item) => (
                                        <AccessoryItem key={item.name} item={item}/>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function AccessoryItem({item}: { item: AccessoryItem }) {
    return (
        <Link
            href={item.href}
            className="flex flex-col items-center group"
        >
            <div
                className="w-14 h-14 mb-2 p-1 flex items-center justify-center text-gray-600 group-hover:text-black">
                {item.icon}
            </div>
            <span className="text-xs text-gray-600 text-center group-hover:text-black">
                {item.name}
            </span>
        </Link>
    )
}

