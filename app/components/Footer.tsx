"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <img 
                src="/logo-actual.png" 
                alt="Actual Marketing" 
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Transform your business with data-driven digital marketing strategies. We help businesses grow through innovative solutions and measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Istanbul, Turkey</li>
              <li>+90 553 779 53 49</li>
              <li>mahmoud@actual-mktg.com</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Actual Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
