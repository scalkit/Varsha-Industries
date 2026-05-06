"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-primary/10 shadow-sm text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <div className="relative w-32 h-12 md:w-48 md:h-16 transition-all duration-300">
                                <Image
                                    src="/assets/logo.png"
                                    alt="PlastX Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="relative font-medium hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                                Home
                            </Link>

                            <div className="relative group">
                                <button
                                    onClick={toggleDropdown}
                                    className="relative flex items-center gap-1 font-medium hover:text-primary transition-colors focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
                                >
                                    About Us <ChevronDown className="w-4 h-4" />
                                </button>

                                {/* Dropdown Menu */}
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out border border-gray-100">
                                    <Link href="/about" className="block px-4 py-2 text-sm hover:bg-accent/20 hover:text-primary">Overview</Link>
                                    <Link href="/about/infrastructure" className="block px-4 py-2 text-sm hover:bg-accent/20 hover:text-primary">Infrastructure</Link>
                                    <Link href="/about/rnd" className="block px-4 py-2 text-sm hover:bg-accent/20 hover:text-primary">Research & Development</Link>
                                    <Link href="/about/certifications" className="block px-4 py-2 text-sm hover:bg-accent/20 hover:text-primary">Certifications & Quality Assurance</Link>
                                    <Link href="/about/product-literature" className="block px-4 py-2 text-sm hover:bg-accent/20 hover:text-primary">Product Literature</Link>
                                </div>
                            </div>

                            <Link href="/products" className="relative font-medium hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                                Products
                            </Link>
                            <Link href="/oem-solutions" className="relative font-medium hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                                OEM Solutions
                            </Link>
                            <Link href="/events-insights" className="relative font-medium hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                                Events & Insights
                            </Link>
                            <Link href="/contact" className="relative font-medium hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-accent/20 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 absolute w-full max-h-[85vh] overflow-y-auto shadow-xl">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        <Link href="/" className="block px-3 py-3 rounded-md text-lg font-medium hover:bg-accent/10 hover:text-primary transition-colors">
                            Home
                        </Link>
                        <div className="space-y-1">
                            <button
                                onClick={toggleDropdown}
                                className="w-full flex items-center justify-between px-3 py-3 rounded-md text-lg font-medium hover:bg-accent/10 hover:text-primary transition-colors"
                            >
                                About Us <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isDropdownOpen && (
                                <div className="pl-4 space-y-1 mt-1 border-l-2 border-primary/10 ml-3">
                                    <Link href="/about" className="block px-3 py-2 rounded-md text-base text-gray-600 hover:text-primary hover:bg-gray-50">Overview</Link>
                                    <Link href="/about/infrastructure" className="block px-3 py-2 rounded-md text-base text-gray-600 hover:text-primary hover:bg-gray-50">Infrastructure</Link>
                                    <Link href="/about/rnd" className="block px-3 py-2 rounded-md text-base text-gray-600 hover:text-primary hover:bg-gray-50">R&D</Link>
                                    <Link href="/about/certifications" className="block px-3 py-2 rounded-md text-base text-gray-600 hover:text-primary hover:bg-gray-50">Certifications & Quality Assurance</Link>
                                    <Link href="/about/product-literature" className="block px-3 py-2 rounded-md text-base text-gray-600 hover:text-primary hover:bg-gray-50">Product Literature</Link>
                                </div>
                            )}
                        </div>
                        <Link href="/products" className="block px-3 py-3 rounded-md text-lg font-medium hover:bg-accent/10 hover:text-primary transition-colors">
                            Products
                        </Link>
                        <Link href="/oem-solutions" className="block px-3 py-3 rounded-md text-lg font-medium hover:bg-accent/10 hover:text-primary transition-colors">
                            OEM Solutions
                        </Link>
                        <Link href="/events-insights" className="block px-3 py-3 rounded-md text-lg font-medium hover:bg-accent/10 hover:text-primary transition-colors">
                            Events & Insights
                        </Link>
                        <Link href="/contact" className="block px-3 py-3 rounded-md text-lg font-medium hover:bg-accent/10 hover:text-primary transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
