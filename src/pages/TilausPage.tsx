import React from 'react';
import { motion } from 'motion/react';
import { COMPANY } from '../constants';

export default function TilausPage() {
    return (
        <>
            {/* Page Header */}
            <section className="pt-32 pb-16 bg-primary-dark text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Verkko<span className="text-primary">tilauslomake</span></h1>
                        <p className="text-xl text-white/60 max-w-2xl">
                            Täytä lomake niin otamme sinuun yhteyttä mahdollisimman pian. Kiireellisissä tapauksissa soita päivystysnumeroomme.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Order Form */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <form className="space-y-8">
                            {/* Personal Info */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Yhteystiedot</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="order-name" className="text-sm font-bold uppercase tracking-wider text-textMuted">Nimi *</label>
                                        <input id="order-name" type="text" required autoComplete="name" className="w-full bg-bgLight border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200" placeholder="Matti Meikäläinen" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="order-phone" className="text-sm font-bold uppercase tracking-wider text-textMuted">Puhelin *</label>
                                        <input id="order-phone" type="tel" required autoComplete="tel" className="w-full bg-bgLight border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200" placeholder="040 123 4567" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="order-email" className="text-sm font-bold uppercase tracking-wider text-textMuted">Sähköposti</label>
                                    <input id="order-email" type="email" autoComplete="email" className="w-full bg-bgLight border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200" placeholder="matti@esimerkki.fi" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="order-address" className="text-sm font-bold uppercase tracking-wider text-textMuted">Kohteen osoite</label>
                                    <input id="order-address" type="text" autoComplete="street-address" className="w-full bg-bgLight border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200" placeholder="Esimerkkikatu 1, Helsinki" />
                                </div>
                            </div>

                            {/* Service Type */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Palvelun tiedot</h2>
                                <div className="space-y-2 mb-6">
                                    <label htmlFor="order-type" className="text-sm font-bold uppercase tracking-wider text-textMuted">Palvelutyyppi</label>
                                    <select id="order-type" className="w-full bg-bgLight border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200 cursor-pointer">
                                        <option value="">Valitse palvelu...</option>
                                        <option value="putkiremontti">Putkiremontti</option>
                                        <option value="paivystys">Päivystys / hätätyö</option>
                                        <option value="viemari">Viemärin avaus/kuvaus</option>
                                        <option value="markatila">Märkätila-asennus</option>
                                        <option value="sekoittaja">Sekoittajan/kalusteiden asennus</option>
                                        <option value="lammitys">Lämmitysjärjestelmät</option>
                                        <option value="tarvike">Tarvikemyynti</option>
                                        <option value="muu">Muu palvelu</option>
                                    </select>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <label htmlFor="order-urgency" className="text-sm font-bold uppercase tracking-wider text-textMuted">Kiireellisyys</label>
                                    <select id="order-urgency" className="w-full bg-bgLight border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none transition-shadow duration-200 cursor-pointer">
                                        <option value="normal">Normaali – ei kiire</option>
                                        <option value="soon">Pian – viikon sisällä</option>
                                        <option value="urgent">Kiireellinen – mahdollisimman pian</option>
                                        <option value="emergency">Hätätyö – soita päivystykseen</option>
                                    </select>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <label htmlFor="order-desc" className="text-sm font-bold uppercase tracking-wider text-textMuted">Kuvaus tarpeesta *</label>
                                <textarea id="order-desc" rows={6} required className="w-full bg-bgLight border-none rounded-2xl p-4 focus:ring-2 focus:ring-primary outline-none resize-none transition-shadow duration-200" placeholder="Kerro mahdollisimman tarkasti, millaista palvelua tarvitset. Esimerkiksi: kohteen tyyppi (omakotitalo, taloyhtiö, yritys), ongelman kuvaus, toivottu aikataulu..."></textarea>
                            </div>

                            <button type="submit" className="btn-primary w-full py-5 text-lg">
                                Lähetä tilaus
                            </button>

                            <p className="text-center text-textMuted text-sm">
                                Kiireellisissä tapauksissa soita suoraan päivystykseemme: <a href={`tel:${COMPANY.phoneLink}`} className="font-bold text-accent cursor-pointer hover:underline">{COMPANY.phone}</a> (24H)
                            </p>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
