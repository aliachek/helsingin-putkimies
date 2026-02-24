import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Building2, Users, Award } from 'lucide-react';
import { COMPANY, REFERENCES } from '../constants';
import { GetStartedButtonPrimary } from '../components/GetStartedButton';

export default function ReferenssitPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-primary-dark text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className="text-primary">Referenssejä</span></h1>
                        <p className="text-xl text-white/60 max-w-2xl">
                            {COMPANY.name} palvelee mm. seuraavia yrityksiä ja organisaatioita.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Annual Contracts */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                                    <Building2 className="text-primary-dark" size={24} />
                                </div>
                                <h2 className="text-3xl font-bold">Vuosisopimusasiakkaita</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {REFERENCES.annual.map((client, i) => (
                                    <motion.div key={client} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-bgLight p-5 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow duration-200">
                                        <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center shrink-0">
                                            <Building2 size={18} className="text-primary-dark" aria-hidden="true" />
                                        </div>
                                        <span className="font-semibold text-lg">{client}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center">
                                    <Users className="text-accent" size={24} />
                                </div>
                                <h2 className="text-3xl font-bold">Muita asiakkaitamme</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                {REFERENCES.other.map((client, i) => (
                                    <motion.div key={client} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-bgLight p-5 rounded-2xl flex items-center gap-4 hover:shadow-md transition-shadow duration-200">
                                        <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                                            <Users size={18} className="text-accent" aria-hidden="true" />
                                        </div>
                                        <span className="font-semibold text-lg">{client}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LVI-TU Membership */}
            <section className="py-16 bg-bgLight">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm flex flex-col md:flex-row items-center gap-8">
                        <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                            <Award size={48} className="text-primary-dark" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">LVI-Tekniset Urakoitsijat ry</h3>
                            <p className="text-textMuted leading-relaxed">
                                Meidät on hyväksytty LVI-Tekniset urakoitsijat -liiton jäseneksi. Liiton jäsenyritykset täyttävät liiton kriteerit ja noudattavat toiminnassaan alalla yleisesti sovittuja, hyviä toimintatapoja.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-dark text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Haluatko liittyä tyytyväisten asiakkaidemme joukkoon?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <GetStartedButtonPrimary to="/tilaus">Tilauslomake</GetStartedButtonPrimary>
                        <GetStartedButtonPrimary to="/yhteystiedot">Yhteystiedot</GetStartedButtonPrimary>
                    </div>
                </div>
            </section>
        </>
    );
}
