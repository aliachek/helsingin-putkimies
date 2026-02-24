import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Menu, X, Droplets, MapPin } from 'lucide-react';
import { COMPANY, NAV_ITEMS, SERVICE_AREAS } from '../constants';

export default function Layout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    const isHome = location.pathname === '/';

    return (
        <div className="min-h-screen flex flex-col" role="document">
            {/* Navigation */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'glass-header py-3' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <img src={COMPANY.logo} alt={COMPANY.name} className="h-10 w-auto" />
                        <span className={`text-lg font-bold tracking-tighter ${scrolled || !isHome ? 'text-black' : 'text-white'}`}>
                            {COMPANY.shortName}
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8" aria-label="Päänavigaatio">
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-sm font-semibold cursor-pointer hover:text-primary transition-colors duration-200 ${location.pathname === item.path ? 'text-primary' : (scrolled || !isHome ? 'text-black' : 'text-white')
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <a href={`tel:${COMPANY.phoneLink}`} className="bg-primary text-primary-dark px-6 py-2.5 rounded-full font-bold text-sm cursor-pointer hover:brightness-110 transition-all duration-200">
                            Soita {COMPANY.phone}
                        </a>
                    </nav>

                    <button
                        className="md:hidden p-2 cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Sulje valikko' : 'Avaa valikko'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen
                            ? <X className={scrolled || !isHome ? 'text-black' : 'text-white'} aria-hidden="true" />
                            : <Menu className={scrolled || !isHome ? 'text-black' : 'text-white'} aria-hidden="true" />
                        }
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                    >
                        <nav className="flex flex-col gap-6" aria-label="Mobiilinavigaatio">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="text-2xl font-bold text-black cursor-pointer"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <a href={`tel:${COMPANY.phoneLink}`} className="btn-primary w-full mt-4 text-center">
                                Soita {COMPANY.phone}
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Page Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-primary-dark text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        {/* Company */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <img src={COMPANY.logo} alt={COMPANY.name} className="h-8 w-auto brightness-200" />
                                <span className="font-bold tracking-tighter">{COMPANY.shortName}</span>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Perustettu vuonna {COMPANY.founded}. Yli {COMPANY.experience} vuotta kokemusta LVI-alalta. Palvelemme kellon ympäri.
                            </p>
                        </div>

                        {/* Navigation */}
                        <div>
                            <h4 className="font-bold mb-4 text-primary">Sivusto</h4>
                            <nav className="flex flex-col gap-2" aria-label="Alatunniste">
                                {NAV_ITEMS.map((item) => (
                                    <Link key={item.path} to={item.path} className="text-white/60 hover:text-white transition-colors text-sm cursor-pointer">
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-bold mb-4 text-primary">Yhteystiedot</h4>
                            <div className="flex flex-col gap-2 text-sm text-white/60">
                                <a href={`tel:${COMPANY.phoneLink}`} className="hover:text-white transition-colors cursor-pointer">
                                    <Phone size={14} className="inline mr-2" aria-hidden="true" />{COMPANY.phone}
                                </a>
                                <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors cursor-pointer">
                                    <Mail size={14} className="inline mr-2" aria-hidden="true" />{COMPANY.email}
                                </a>
                                <a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                                    <MapPin size={14} className="inline mr-2" aria-hidden="true" />{COMPANY.address}
                                </a>
                            </div>
                        </div>

                        {/* Service Areas */}
                        <div>
                            <h4 className="font-bold mb-4 text-primary">Palvelualue</h4>
                            <div className="flex flex-wrap gap-2">
                                {SERVICE_AREAS.map((city) => (
                                    <span key={city} className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/60">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-white/40 text-sm">
                            © {new Date().getFullYear()} {COMPANY.name}. Kaikki oikeudet pidätetään.
                        </div>
                        <div className="text-white/40 text-sm">
                            Luotettava. Ammattitaitoinen. 24H päivystys {COMPANY.phone}.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Sticky Mobile Contact */}
            <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden" role="complementary" aria-label="Pikayhteys">
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    className="bg-primary-dark text-white p-4 rounded-3xl shadow-2xl flex items-center justify-between border border-white/10"
                >
                    <a href={`tel:${COMPANY.phoneLink}`} className="flex items-center gap-3 cursor-pointer">
                        <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                            <Phone className="text-primary-dark" size={20} aria-hidden="true" />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase font-bold text-white/40 leading-none mb-1">24H Päivystys</div>
                            <div className="text-sm font-bold">{COMPANY.phone}</div>
                        </div>
                    </a>
                    <Link to="/tilaus" className="bg-primary text-primary-dark px-6 py-2.5 rounded-2xl font-bold text-sm cursor-pointer hover:brightness-110 transition-all duration-200">
                        Tilaus
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
