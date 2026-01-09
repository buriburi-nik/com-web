
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* Brand Section - 4 cols */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="text-2xl font-bold bg-linear-to-r from-[#D4AF37] to-[#B8941F] bg-clip-text text-transparent inline-block mb-6">
                            Decor
                        </Link>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Elevating spaces with premium stainless steel solutions and bespoke interior designs. Where functionality meets artistry.
                        </p>
                        <div className="flex items-center space-x-4">
                            <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} label="LinkedIn" />
                            <SocialLink href="https://instagram.com" icon={<Instagram size={20} />} label="Instagram" />
                            <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} label="Twitter" />
                            <SocialLink href="https://facebook.com" icon={<Facebook size={20} />} label="Facebook" />
                        </div>
                    </div>

                    {/* Quick Links - 2 cols */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-gray-900 mb-6 tracking-wide">Company</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/products">Our Work</FooterLink>
                            <FooterLink href="/blog">News & Insights</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Services - 2 cols */}
                    <div className="lg:col-span-2">
                        <h3 className="font-semibold text-gray-900 mb-6 tracking-wide">Services</h3>
                        <ul className="space-y-4">
                            <FooterLink href="/services#residential">Residential</FooterLink>
                            <FooterLink href="/services#commercial">Commercial</FooterLink>
                            <FooterLink href="/services#custom">Custom Art</FooterLink>
                            <FooterLink href="/services#consultation">Design Consult</FooterLink>
                        </ul>
                    </div>

                    {/* Contact - 4 cols */}
                    <div className="lg:col-span-4">
                        <h3 className="font-semibold text-gray-900 mb-6 tracking-wide">Get in Touch</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start">
                                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 mr-3 shrink-0" />
                                <span className="text-gray-600">123 Design District, Creative Avenue,<br />Mumbai, Maharashtra 400001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" />
                                <a href="tel:+919876543210" className="text-gray-600 hover:text-[#D4AF37] transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" />
                                <a href="mailto:hello@decor.com" className="text-gray-600 hover:text-[#D4AF37] transition-colors">hello@decor.com</a>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-3">Subscribe to our newsletter</h4>
                            <div className="flex max-w-sm">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] text-sm"
                                />
                                <button className="px-4 py-2 bg-black text-white rounded-r-lg hover:bg-[#D4AF37] transition-colors">
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Decor. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link href="/privacy" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="text-gray-500 hover:text-[#D4AF37] transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-600 hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, children }) {
    return (
        <li>
            <Link
                href={href}
                className="text-gray-600 hover:text-[#D4AF37] transition-colors hover:pl-1 duration-200"
            >
                {children}
            </Link>
        </li>
    );
}
