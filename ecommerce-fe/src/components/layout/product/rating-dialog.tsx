'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Star } from 'lucide-react'
import Image from "next/image"

interface RatingDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    productName: string
    productImage: string
    onRatingSelect: (rating: number) => void
}

export function RatingDialog({
                                 open,
                                 onOpenChange,
                                 productName,
                                 productImage,
                                 onRatingSelect,
                             }: RatingDialogProps) {
    const ratingLabels = {
        1: 'Rất tệ',
        2: 'Tệ',
        3: 'Tạm ổn',
        4: 'Tốt',
        5: 'Rất tốt'
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl">Đánh giá sản phẩm</DialogTitle>
                </DialogHeader>

                <div className="flex flex-col items-center gap-6 py-4">
                    <Image
                        src={productImage}
                        alt={productName}
                        width={180}
                        height={120}
                        className="object-contain"
                    />
                    <h3 className="font-medium text-lg text-center">{productName}</h3>

                    <div className="flex gap-4 justify-center">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => onRatingSelect(rating)}
                                className="flex flex-col items-center gap-2 group"
                            >
                                <Star
                                    className="w-8 h-8 group-hover:fill-yellow-400 group-hover:text-yellow-400 fill-gray-200 text-gray-200 transition-colors"
                                />
                                <span className="text-xs text-gray-500">
                  {ratingLabels[rating as keyof typeof ratingLabels]}
                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
