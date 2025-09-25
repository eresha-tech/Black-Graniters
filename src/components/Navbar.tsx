import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'backdrop-blur-md bg-white/95 border-b border-amber-200 shadow-lg'
                : 'backdrop-blur-sm bg-white/90'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-2xl font-bold text-primary">
                            Black Graniters
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-primary/90 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-secondary/10"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            variant="outline"
                            className="bg-secondary/10 border-secondary text-secondary hover:bg-secondary hover:text-white backdrop-blur-sm"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
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
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 backdrop-blur-md bg-white/95 border-t border-amber-200">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-primary/90 hover:text-primary block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary/10 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="pt-4 pb-2">
                        <Button
                            variant="outline"
                            className="w-full bg-secondary/10 border-secondary text-secondary hover:bg-secondary hover:text-white backdrop-blur-sm"
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
