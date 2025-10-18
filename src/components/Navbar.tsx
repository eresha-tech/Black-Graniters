import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [mobileShopOpen, setMobileShopOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shopCategories = [
        { name: 'All Products', path: '/shop' },
        { name: 'Granite', path: '/shop/granite' },
        { name: 'Sandstone', path: '/shop/sandstone' },
        { name: 'Marble', path: '/shop/marble' },
        { name: 'Onyx & Quartzite', path: '/shop/others' },
        { name: 'Other Products', path: '/shop/other-products' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'backdrop-blur-md bg-white/95 border-b border-[#F7A145]/20 shadow-lg'
                : 'backdrop-blur-sm bg-white/90'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center gap-3">
                            <img 
                                src={getImageUrl('logo.png')} 
                                alt="Black Graniters" 
                                className="h-12 w-auto"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                }}
                            />
                            <span className="text-2xl font-bold text-[#502b21]">
                                Black Graniters
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-1">
                            <Link
                                to="/"
                                className="text-[#502b21] hover:text-[#F7A145] px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
                            >
                                Home
                            </Link>
                            
                            <Link
                                to="/about"
                                className="text-[#502b21] hover:text-[#F7A145] px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
                            >
                                About Us
                            </Link>

                            {/* Shop Dropdown */}
                            <div 
                                className="relative"
                                onMouseEnter={() => setShopDropdownOpen(true)}
                                onMouseLeave={() => setShopDropdownOpen(false)}
                            >
                                <button
                                    className="text-[#502b21] hover:text-[#F7A145] px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 flex items-center gap-1"
                                >
                                    Shop
                                    <ChevronDown size={16} className={`transition-transform duration-200 ${shopDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {shopDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {shopCategories.map((category) => (
                                            <Link
                                                key={category.path}
                                                to={category.path}
                                                className="block px-4 py-2.5 text-sm text-[#502b21] hover:bg-[#F7A145]/10 hover:text-[#F7A145] font-medium transition-colors"
                                            >
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/gallery"
                                className="text-[#502b21] hover:text-[#F7A145] px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
                            >
                                Gallery
                            </Link>

                            <Link
                                to="/contact"
                                className="text-[#502b21] hover:text-[#F7A145] px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            to="/contact"
                            className="bg-[#502b21] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#F7A145] transition-colors duration-300 shadow-md hover:shadow-lg"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#502b21] hover:bg-[#F7A145]/10 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="block h-6 w-6" />
                            ) : (
                                <Menu className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                    ? 'max-h-[600px] opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-white/95 border-t border-[#F7A145]/20">
                    <Link
                        to="/"
                        className="text-[#502b21] hover:text-[#F7A145] block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    
                    <Link
                        to="/about"
                        className="text-[#502b21] hover:text-[#F7A145] block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </Link>

                    {/* Mobile Shop Dropdown */}
                    <div>
                        <button
                            onClick={() => setMobileShopOpen(!mobileShopOpen)}
                            className="w-full text-left text-[#502b21] hover:text-[#F7A145] px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200 flex items-center justify-between"
                        >
                            Shop
                            <ChevronDown size={16} className={`transition-transform duration-200 ${mobileShopOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileShopOpen && (
                            <div className="pl-4 space-y-1 mt-1">
                                {shopCategories.map((category) => (
                                    <Link
                                        key={category.path}
                                        to={category.path}
                                        className="text-[#502b21]/80 hover:text-[#F7A145] block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setMobileShopOpen(false);
                                        }}
                                    >
                                        {category.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        to="/gallery"
                        className="text-[#502b21] hover:text-[#F7A145] block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Gallery
                    </Link>

                    <Link
                        to="/contact"
                        className="text-[#502b21] hover:text-[#F7A145] block px-3 py-2 rounded-md text-base font-semibold transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>

                    <div className="pt-4 pb-2">
                        <Link
                            to="/contact"
                            className="block w-full bg-[#502b21] text-white px-6 py-2.5 rounded-lg text-center font-semibold hover:bg-[#F7A145] transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Quote
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
