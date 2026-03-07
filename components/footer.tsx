import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { MapPin, Clock, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/assets/logo-circle.png"
                alt="Dive-In Aquatics"
                width={50}
                height={50}
                className="w-12 h-12"
              />
              <span className="text-xl font-bold text-white">
                Dive-In <span className="text-brand-blue">Aquatics</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              Professional swimming classes for all ages. Learn to swim with certified coaches.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="hover:text-brand-blue transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-brand-blue transition-colors">
                  Schedule & Fees
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="hover:text-brand-blue transition-colors">
                  Coaches
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-blue transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm">{SITE_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-brand-blue block">
                    {SITE_CONFIG.contact.phone}
                  </a>
                  <a href={`tel:${SITE_CONFIG.contact.phoneSecondary}`} className="hover:text-brand-blue block">
                    {SITE_CONFIG.contact.phoneSecondary}
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-sm hover:text-brand-blue">
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Weekdays</p>
                  <p>{SITE_CONFIG.hours.weekdays}</p>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-white">Weekends</p>
                  <p>{SITE_CONFIG.hours.weekends}</p>
                </div>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-blue transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Dive-In Aquatics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
