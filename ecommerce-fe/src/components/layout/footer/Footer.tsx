import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Youtube, ChevronRight } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-900 text-zinc-100 py-12">
            <div className="container mx-auto max-w-10xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
                {/* Support Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">HỖ TRỢ</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Dịch vụ
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Điều khoản sử dụng
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Bảo hành
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Chính sách hoàn trả
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Câu hỏi thường gặp về vận chuyển
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Câu hỏi thường gặp về thanh toán
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Mua hàng
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Trung tâm Dịch vụ
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Phí sửa chữa dịch vụ đối với điện thoại
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Introduction Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">GIỚI THIỆU</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Xiaomi
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Đội ngũ lãnh đạo
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Chính sách bảo vệ dữ liệu cá nhân
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                Xiaomi HyperOS
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Column */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">LIÊN HỆ VỚI CHÚNG TÔI</h3>
                    <ul className="space-y-2">
                        <li className="text-zinc-400">
                            Email: service.vn@support.mi.com
                        </li>
                        <li className="text-zinc-400">
                            Số điện thoại: 1800400410
                        </li>
                    </ul>
                </div>

                {/* Follow Us Column */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">THEO DÕI Xiaomi</h3>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                <Facebook className="h-6 w-6" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                                <span className="sr-only">TikTok</span>
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                <Youtube className="h-6 w-6" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                            <Link href="#" className="text-zinc-400 hover:text-white">
                                <svg
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-sm">Nhập địa chỉ email của bạn để đăng ký nhận thông tin</p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Nhập địa chỉ Email"
                                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
                            />
                            <Button
                                type="submit"
                                variant="ghost"
                                className="border-zinc-700 text-white hover:bg-zinc-800"
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

