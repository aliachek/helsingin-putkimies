import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { COMPANY, SERVICES_FULL, PRODUCTS, SERVICES_SUMMARY, GUARANTEES, SERVICES_PAGE_INTRO } from '../constants';
import { GetStartedButtonPrimary } from '../components/GetStartedButton';

export default function PalvelutPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-primary-dark text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Tuotteet ja <span className="text-primary">palvelut</span></h1>
                        <p className="text-xl text-white/60 max-w-2xl">
                            {SERVICES_PAGE_INTRO}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Cards */}
            <section className="py-24 bg-bgLight">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {SERVICES_SUMMARY.map((service, i) => (
                            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl overflow-hidden shadow-sm group">
                                <div className="h-56 overflow-hidden relative">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                                        <service.icon className="text-primary-dark" size={24} />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-textMuted">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Service List */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Esimerkkejä palveluistamme</h2>
                            <p className="text-textMuted mb-8">Helsingin Putkimies Oy tekee mm. seuraavanlaisia toimeksiantoja:</p>
                            <ul className="space-y-4">
                                {SERVICES_FULL.map((service, i) => (
                                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                        <span className="text-lg">{service}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-8">LVI-tarvikemyynti</h2>
                            <p className="text-textMuted mb-8">
                                Myymme kaikkia LVI-alan tarvikkeita aina putkenosista saniteettikalusteisiin. Alla esimerkkejä tuotevalikoimastamme:
                            </p>
                            <ul className="space-y-4">
                                {PRODUCTS.map((product, i) => (
                                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                                        <ChevronRight size={20} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                                        <span className="text-lg">{product}</span>
                                    </motion.li>
                                ))}
                            </ul>
                            <div className="mt-8 p-6 bg-bgLight rounded-2xl">
                                <p className="font-bold mb-2">Tarvikemyynti vastaa päivystysnumerossa:</p>
                                <a href={`tel:${COMPANY.phoneLink}`} className="text-2xl font-bold text-accent cursor-pointer hover:underline">{COMPANY.phone}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantees */}
            <section className="py-24 bg-bgLight">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Palvelulupaukset</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {GUARANTEES.map((g, i) => (
                            <motion.div key={g.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-3xl text-center shadow-sm">
                                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <g.icon className="text-primary-dark" size={32} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{g.title}</h3>
                                <p className="text-textMuted">{g.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-dark text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Kiinnostuitko? Ota yhteyttä!</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GetStartedButtonPrimary to="/tilaus">Tilauslomake</GetStartedButtonPrimary>
                        <a href={`tel:${COMPANY.phoneLink}`} className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold cursor-pointer hover:bg-white/20 transition-all duration-200">
                            Soita {COMPANY.phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
