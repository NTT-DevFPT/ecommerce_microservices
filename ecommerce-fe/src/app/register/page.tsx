'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Facebook, Chrome } from 'lucide-react'

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Mật khẩu không khớp!')
            return
        }
        // Add your login logic here
        console.log('Register with:', name, phone, password)
    }

    const handleGoogleLogin = () => {
        // Add Google login logic
        console.log('Login with Google')
    }

    const handleFacebookLogin = () => {
        // Add Facebook login logic
        console.log('Login with Facebook')
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-teal-500 animate-gradientBackground">
            <div className="w-full max-w-md">
                <div className="bg-white shadow-lg rounded-lg px-8 pt-8 pb-8 mb-4 border border-gray-200">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8 animate__animated animate__fadeIn">
                        Đăng kí
                    </h2>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="relative">
                            <label htmlFor="name"
                                   className="block text-sm font-medium text-gray-700 animate__animated animate__fadeIn">
                                Tên
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-500 transform hover:scale-105"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="phone"
                                   className="block text-sm font-medium text-gray-700 animate__animated animate__fadeIn">
                                Số điện thoại
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-500 transform hover:scale-105"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700 animate__animated animate__fadeIn">
                                Mật khẩu
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-500 transform hover:scale-105"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="confirmPassword"
                                   className="block text-sm font-medium text-gray-700 animate__animated animate__fadeIn">
                                Nhập lại mật khẩu
                            </label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-500 transform hover:scale-105"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105"
                            >
                                Đăng kí
                            </button>
                        </div>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">Hoặc đăng kí với</span>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        <path
                                            fill="#4285F4"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#EA4335"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                        <path fill="none" d="M1 1h22v22H1z"/>
                                    </svg>
                                    Google
                                </button>
                                <button
                                    onClick={handleFacebookLogin}
                                    className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-300 ease-in-out transform hover:scale-105"
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        <path
                                            fill="#1877F2"
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                        />
                                    </svg>
                                    Facebook
                                </button>
                            </div>

                            <p className="mt-6 text-center text-sm text-gray-600">
                                Đã có tài khoản?{' '}
                                <Link href="/login" className="font-medium text-blue-600 hover:underline">
                                    Đăng nhập
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
