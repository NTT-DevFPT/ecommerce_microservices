"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Search } from 'lucide-react'

interface AddressDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    currentAddress: string
    onAddressChange: (address: string) => void
}

interface AdminUnit {
    code: string
    name: string
    name_en: string
    full_name: string
    full_name_en: string
    code_name: string
}

export function AddressDialog({ open, onOpenChange, currentAddress, onAddressChange }: AddressDialogProps) {
    const [activeTab, setActiveTab] = useState<'province' | 'district' | 'ward' | null>('province');
    const [provinces, setProvinces] = useState<AdminUnit[]>([])
    const [districts, setDistricts] = useState<AdminUnit[]>([])
    const [wards, setWards] = useState<AdminUnit[]>([])
    const [selectedProvince, setSelectedProvince] = useState<AdminUnit | null>(null)
    const [selectedDistrict, setSelectedDistrict] = useState<AdminUnit | null>(null)
    const [selectedWard, setSelectedWard] = useState<AdminUnit | null>(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [detailedAddress, setDetailedAddress] = useState("")
    const [addressComplete, setAddressComplete] = useState(false);

    useEffect(() => {
        fetch('https://provinces.open-api.vn/api/?depth=1')
            .then(response => response.json())
            .then(data => setProvinces(data))
            .catch(error => console.error('Error fetching provinces:', error))
    }, [])

    useEffect(() => {
        if (selectedProvince) {
            fetch(`https://provinces.open-api.vn/api/p/${selectedProvince.code}?depth=2`)
                .then(response => response.json())
                .then(data => setDistricts(data.districts))
                .catch(error => console.error('Error fetching districts:', error))
        }
    }, [selectedProvince])

    useEffect(() => {
        if (selectedDistrict) {
            fetch(`https://provinces.open-api.vn/api/d/${selectedDistrict.code}?depth=2`)
                .then(response => response.json())
                .then(data => setWards(data.wards))
                .catch(error => console.error('Error fetching wards:', error))
        }
    }, [selectedDistrict])

    useEffect(() => {
        if (open) {
            setAddressComplete(false);
            setDetailedAddress("");
        }
    }, [open]);

    const handleProvinceSelect = (province: AdminUnit) => {
        setSelectedProvince(province)
        setSelectedDistrict(null)
        setSelectedWard(null)
        setActiveTab('district')
    }

    const handleDistrictSelect = (district: AdminUnit) => {
        setSelectedDistrict(district)
        setSelectedWard(null)
        setActiveTab('ward')
    }

    const handleWardSelect = (ward: AdminUnit) => {
        setSelectedWard(ward);
        setAddressComplete(true);
    };

    const filteredUnits = activeTab === 'province'
        ? provinces
        : activeTab === 'district'
            ? districts
            : activeTab === 'ward'
                ? wards
                : [];

    const filteredAndSearchedUnits = filteredUnits.filter(unit =>
        unit.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleConfirmAddress = () => {
        const fullAddress = `${detailedAddress}, ${selectedWard?.name || ''}, ${selectedDistrict?.name || ''}, ${selectedProvince?.name || ''}`;
        onAddressChange(fullAddress);
        setAddressComplete(false);
        onOpenChange(false);
    };

    const handleBackToAddressSelection = () => {
        setAddressComplete(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[600px] h-[600px] p-0 bg-white text-black flex flex-col">
                <DialogHeader className="p-6 pb-4 flex-shrink-0">
                    <DialogTitle className="text-2xl font-semibold">Chọn địa chỉ nhận hàng</DialogTitle>
                    <p className="text-sm text-gray-500 mt-2 relative top-[1vh]">
                        Địa chỉ đang chọn: {selectedWard ? `${selectedWard.name}, ` : ''}
                        {selectedDistrict ? `${selectedDistrict.name}, ` : ''}
                        {selectedProvince ? selectedProvince.name : currentAddress}
                    </p>
                </DialogHeader>

                {/* Chọn địa chỉ */}
                {!addressComplete && (
                    <div className="px-6 flex-grow flex flex-col">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" aria-hidden="true" />
                            <Input
                                placeholder="Tìm nhanh tỉnh thành, quận huyện, phường xã"
                                className="pl-9 bg-white text-black border-gray-300"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Tìm kiếm địa chỉ"
                            />
                        </div>
                        <div className="grid grid-cols-3 mt-2" role="tablist">
                            <TabButton
                                active={activeTab === 'province'}
                                onClick={() => setActiveTab('province')}
                                disabled={false}
                            >
                                Tỉnh/TP
                            </TabButton>
                            <TabButton
                                active={activeTab === 'district'}
                                onClick={() => {
                                    if (!selectedProvince) {
                                        // Nếu chưa chọn tỉnh, không cho phép chọn quận/huyện
                                        alert('Vui lòng chọn tỉnh thành trước khi chọn quận huyện.');
                                        return;
                                    }
                                    setActiveTab('district');
                                }}
                                disabled={!selectedProvince}
                            >
                                Quận/Huyện
                            </TabButton>
                            <TabButton
                                active={activeTab === 'ward'}
                                onClick={() => {
                                    if (!selectedDistrict) {
                                        // Nếu chưa chọn quận, không cho phép chọn phường/xã
                                        alert('Vui lòng chọn quận huyện trước khi chọn phường xã.');
                                        return;
                                    }
                                    setActiveTab('ward');
                                }}
                                disabled={!selectedDistrict}
                            >
                                Phường/Xã
                            </TabButton>
                        </div>
                        <div className="flex-grow overflow-auto max-h-[400px]">
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                {filteredAndSearchedUnits.map((unit) => (
                                    <AdminUnitButton
                                        key={unit.code}
                                        unit={unit}
                                        isSelected={
                                            (activeTab === 'province' && selectedProvince?.code === unit.code) ||
                                            (activeTab === 'district' && selectedDistrict?.code === unit.code) ||
                                            (activeTab === 'ward' && selectedWard?.code === unit.code)
                                        }
                                        onClick={() => {
                                            if (activeTab === 'province') handleProvinceSelect(unit);
                                            else if (activeTab === 'district') handleDistrictSelect(unit);
                                            else if (activeTab === 'ward') handleWardSelect(unit);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Nhập số nhà, tên đường */}
                {addressComplete && (
                    <div className="p-6 flex flex-col justify-between h-full">
                        <div>
                            <Input
                                placeholder="Số nhà, tên đường"
                                className="w-full bg-white text-black border-gray-300 mb-2 relative top-[-4vh]"
                                value={detailedAddress}
                                onChange={(e) => setDetailedAddress(e.target.value)}
                            />
                            <p className="text-sm text-gray-500 mb-4 relative top-[-3vh]">
                                Vui lòng cho chúng tôi biết số nhà, tên đường để thuận tiện giao hàng cho quý khách.
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-300"
                                onClick={handleBackToAddressSelection}
                            >
                                Quay lại
                            </button>
                            <button
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700"
                                onClick={handleConfirmAddress}
                            >
                                Xác nhận địa chỉ
                            </button>
                        </div>
                    </div>
                )}

            </DialogContent>
        </Dialog>
    );
}

interface TabButtonProps {
    active: boolean
    onClick: () => void
    disabled: boolean
    children: React.ReactNode
}

function TabButton({ active, onClick, disabled, children }: TabButtonProps) {
    return (
        <button
            className={cn(
                "px-6 py-2 text-sm font-medium border-b-2 transition-colors w-full",
                active
                    ? "border-blue-600 text-blue-600"
                    : "border-gray-200 text-gray-500 hover:text-blue-600"
            )}
            onClick={onClick}
            disabled={disabled}
            role="tab"
            aria-selected={active}
        >
            {children}
        </button>
    )
}

interface AdminUnitButtonProps {
    unit: AdminUnit
    isSelected: boolean
    onClick: () => void
}

function AdminUnitButton({ unit, isSelected, onClick }: AdminUnitButtonProps) {
    return (
        <button
            className={cn(
                "text-left px-4 py-2 rounded hover:bg-blue-100 text-sm",
                isSelected ? "bg-blue-100" : ""
            )}
            onClick={onClick}
            role="option"
            aria-selected={isSelected}
        >
            {unit.name}
        </button>
    )
}

