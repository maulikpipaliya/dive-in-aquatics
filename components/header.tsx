'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Programs', href: '/programs' },
  { name: 'Schedule & Fees', href: '/schedule' },
  { name: 'Coaches', href: '/coaches' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center space-x-3 relative z-50">
              <Image
                src="/assets/logo-circle.png"
                alt="Dive-In Aquatics"
                width={60}
                height={60}
                className="w-14 h-14 md:w-16 md:h-16"
              />
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                Dive-In <span className="text-brand-blue">Aquatics</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-brand-blue transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/contact?trial=true">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                  Book a Trial
                </Button>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 relative z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-20 bg-white shadow-lg border-t max-h-[calc(100vh-5rem)] overflow-y-auto z-[60] lg:hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    router.push(item.href);
                    setTimeout(() => setIsMobileMenuOpen(false), 100);
                  }}
                  className="text-gray-700 hover:text-brand-blue transition-colors font-medium px-4 py-3 rounded-md hover:bg-gray-50 text-lg active:bg-gray-100 text-left w-full"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  router.push('/contact?trial=true');
                  setTimeout(() => setIsMobileMenuOpen(false), 100);
                }}
                className="px-4 pt-2 w-full"
              >
                <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark py-6 text-lg active:bg-brand-blue-dark">
                  Book a Trial
                </Button>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
