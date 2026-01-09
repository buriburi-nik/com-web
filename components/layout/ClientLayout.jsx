"use client";

import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactFormModal from '../contact/ContactFormModal';

export default function ClientLayout({ children }) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <>
            <Header onOpenContactModal={() => setIsContactModalOpen(true)} />
            <main className="pt-16">
                {children}
            </main>
            <Footer />
            <ContactFormModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </>
    );
}
