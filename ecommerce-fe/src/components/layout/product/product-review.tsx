'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Camera } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RatingDialog } from "@/components/layout/product/rating-dialog"

interface Review {
    author: string
    rating: number
    comment: string
    date: string
    images?: string[]
}

interface ProductReviewProps {
    productName: string
    productImage: string
    averageRating: number
    totalReviews: number
    ratingDistribution: Record<number, number>
    reviews: Review[]
}

export default function ProductReview({
                                          productName,
                                          productImage,
                                          averageRating,
                                          totalReviews,
                                          ratingDistribution,
                                          reviews
                                      }: ProductReviewProps) {
    const [isRatingDialogOpen, setIsRatingDialogOpen] = useState(false)
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
    const [rating, setRating] = useState(0)

    const handleRatingSelect = (selectedRating: number) => {
        setRating(selectedRating)
        setIsRatingDialogOpen(false)
        setIsReviewModalOpen(true)
    }

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Đánh giá {productName}</h2>

            {/* Rating Overview */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                <div className="text-center md:w-1/4">
                    <div className="text-5xl font-extrabold text-yellow-500">{averageRating.toFixed(1)}</div>
                    <div className="flex gap-1 my-2 justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                className={`w-8 h-8 ${star <= averageRating ? 'fill-yellow-500 text-yellow-500' : 'fill-gray-200 text-gray-200'}`}
                            />
                        ))}
                    </div>
                    <div className="text-sm text-gray-500">{totalReviews} đánh giá</div>
                </div>

                <div className="flex-1 w-full md:w-3/4">
                    {Object.entries(ratingDistribution)
                        .sort(([a], [b]) => Number(b) - Number(a))
                        .map(([rating, percentage]) => (
                            <div key={rating} className="flex items-center gap-2 mb-4">
                                <div className="w-16 text-right text-gray-700 font-medium">{rating} sao</div>
                                <div className="flex-1 h-3 bg-gray-300 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-yellow-500"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                                <div className="w-16 text-sm text-gray-500">{percentage}%</div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-8">
                {reviews.map((review, index) => (
                    <div key={index} className="border-b pb-6">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`w-5 h-5 ${star <= review.rating ? 'fill-yellow-500 text-yellow-500' : 'fill-gray-300 text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">• {review.date}</span>
                        </div>
                        <div className="font-semibold text-lg mb-2">{review.author}</div>
                        <p className="text-gray-700 mb-4">{review.comment}</p>
                        {review.images && (
                            <div className="flex gap-4 flex-wrap">
                                {review.images.map((image, idx) => (
                                    <Image
                                        key={idx}
                                        src={image}
                                        alt={`Review image ${idx + 1}`}
                                        width={100}
                                        height={100}
                                        className="rounded-lg object-cover shadow-lg"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Write Review Button */}
            <div className="flex justify-center mb-6 relative bottom-[-3vh]">
                <Button
                    onClick={() => setIsRatingDialogOpen(true)}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md"
                >
                    Viết đánh giá
                </Button>
            </div>

            {/* Initial Rating Dialog */}
            <RatingDialog
                open={isRatingDialogOpen}
                onOpenChange={setIsRatingDialogOpen}
                productName={productName}
                productImage={productImage}
                onRatingSelect={handleRatingSelect}
            />

            {/* Full Review Modal */}
            <Dialog open={isReviewModalOpen} onOpenChange={setIsReviewModalOpen}>
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>
                        <DialogTitle className="text-center text-xl font-semibold">Đánh giá sản phẩm</DialogTitle>
                    </DialogHeader>

                    <div className="flex flex-col items-center gap-6 mt-4">
                        <Image
                            src={productImage}
                            alt={productName}
                            width={120}
                            height={80}
                            className="object-contain rounded-lg shadow-lg"
                        />
                        <h3 className="font-medium text-lg text-gray-800">{productName}</h3>

                        <div className="flex gap-2 justify-center">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`w-7 h-7 ${star <= rating ? 'fill-yellow-500 text-yellow-500' : 'fill-gray-300 text-gray-300'}`}
                                />
                            ))}
                        </div>

                        <Textarea
                            placeholder="Mời bạn chia sẻ cảm nhận..."
                            className="min-h-[120px] w-full p-4 border-2 border-gray-300 rounded-lg"
                        />

                        <div className="flex items-center space-x-2 self-start">
                            <Checkbox id="recommend" />
                            <Label htmlFor="recommend" className="text-sm text-gray-700">
                                Tôi sẽ giới thiệu sản phẩm cho bạn bè, người thân
                            </Label>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                            <Input placeholder="Họ tên (bắt buộc)" />
                            <Input placeholder="Số điện thoại (bắt buộc)" />
                        </div>

                        <div className="flex gap-2 self-start">
                            <Button variant="outline" className="gap-2">
                                <Camera className="w-5 h-5" />
                                Gửi ảnh thực tế (tối đa 3 ảnh)
                            </Button>
                        </div>

                        <div className="flex items-center space-x-2 self-start">
                            <Checkbox id="privacy" />
                            <Label htmlFor="privacy" className="text-sm text-gray-700">
                                Tôi đồng ý với{" "}
                                <a href="#" className="text-blue-500 hover:underline">
                                    Chính sách xử lý dữ liệu cá nhân
                                </a>{" "}
                                của Xiaomi
                            </Label>
                        </div>

                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3">
                            Gửi đánh giá
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
