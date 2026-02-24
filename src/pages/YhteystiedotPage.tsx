import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY, SERVICE_AREAS, SERVICES_PAGE_INTRO } from '../constants';
import { GetStartedButtonPrimary } from '../components/GetStartedButton';

export default function YhteystiedotPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-primary-dark text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className="text-primary">Yhteystiedot</span></h1>
                        <p className="text-xl text-white/60 max-w-2xl">
                            {SERVICES_PAGE_INTRO}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        <motion.a href={`tel:${COMPANY.phoneLink}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0 }} className="bg-bgLight p-8 rounded-3xl text-center cursor-pointer group hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-200">
                                <Phone className="text-primary-dark" size={28} />
                            </div>
                            <h3 className="font-bold mb-2">Puhelin</h3>
                            <p className="text-lg font-bold text-accent">{COMPANY.phone}</p>
                            <p className="text-sm text-textMuted mt-1">24H Päivystys + toimisto + tarvikemyynti</p>
                        </motion.a>

                        <motion.a href={`mailto:${COMPANY.email}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-bgLight p-8 rounded-3xl text-center cursor-pointer group hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-200">
                                <Mail className="text-primary-dark" size={28} />
                            </div>
                            <h3 className="font-bold mb-2">Sähköposti</h3>
                            <p className="text-lg font-bold text-accent break-all">{COMPANY.email}</p>
                        </motion.a>

                        <motion.a href={COMPANY.mapUrl} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-bgLight p-8 rounded-3xl text-center cursor-pointer group hover:shadow-lg transition-shadow duration-200">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors duration-200">
                                <MapPin className="text-primary-dark" size={28} />
                            </div>
                            <h3 className="font-bold mb-2">Osoite</h3>
                            <p className="text-lg font-bold text-accent">{COMPANY.address}</p>
                        </motion.a>

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-bgLight p-8 rounded-3xl text-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="text-primary-dark" size={28} />
                            </div>
                            <h3 className="font-bold mb-2">Aukioloajat</h3>
                            <p className="text-lg font-bold text-accent">24/7</p>
                            <p className="text-sm text-textMuted mt-1">Toimisto: arkisin 7:30–15:30</p>
                        </motion.div>
                    </div>

                    {/* Map Embed */}
                    <div className="rounded-3xl overflow-hidden shadow-lg h-96">
                        <iframe
                            title="Helsingin Putkimies Oy sijainti"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.2!2d24.9366!3d60.2191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDEzJzA5LjAiTiAyNMKwNTYnMTIuMCJF!5e0!3m2!1sfi!2sfi!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 bg-bgLight">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8">Palvelualueemme</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {SERVICE_AREAS.map((city) => (
                            <span key={city} className="bg-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-sm">
                                <MapPin size={14} className="inline mr-1 text-primary" aria-hidden="true" />{city}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-dark text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Tai täytä tilauslomake</h2>
                    <GetStartedButtonPrimary to="/tilaus">Tilauslomake</GetStartedButtonPrimary>
                </div>
            </section>
        </>
    );
}
