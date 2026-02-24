import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Phone, Star, Clock, Shield, CheckCircle2, Droplets, ChevronRight, MapPin } from 'lucide-react';
import { COMPANY, HERO, ABOUT, TRUST_BADGES, STATS, SERVICES_SUMMARY, GUARANTEES, REVIEWS, SERVICE_AREAS, PRICING_INFO } from '../constants';
import { GetStartedButton, GetStartedButtonPrimary } from '../components/GetStartedButton';

export default function HomePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden" aria-label="Hero">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://picsum.photos/seed/helsinki-plumber/1920/1080"
                        alt="Helsingin Putkimies Oy – Ammattitaitoista putkipalvelua"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <Clock size={16} aria-hidden="true" />
                            {HERO.badge} – {COMPANY.phone}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8" dangerouslySetInnerHTML={{ __html: HERO.headline }} />
                        <p className="text-xl text-white/80 mb-10 max-w-lg">
                            {HERO.subheadline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <GetStartedButtonPrimary to="/tilaus">{HERO.ctaPrimary}</GetStartedButtonPrimary>
                            <a href={`tel:${COMPANY.phoneLink}`} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold cursor-pointer hover:bg-white/20 transition-all duration-200 text-center">
                                {HERO.ctaSecondary} {COMPANY.phone}
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Trust Badges */}
                <div className="absolute bottom-12 left-0 right-0 z-10">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-wrap gap-8 items-center opacity-80" role="list" aria-label="Luottamusmerkit">
                            {TRUST_BADGES.map((badge) => (
                                <div key={badge} className="flex items-center gap-2 text-white font-bold" role="listitem">
                                    <CheckCircle2 size={24} className="text-primary" aria-hidden="true" />
                                    <span>{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter */}
            <section className="py-16 bg-primary-dark">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {STATS.map((stat, i) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-white/60 font-semibold">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">{COMPANY.name}</h2>
                            <div className="space-y-4 text-lg text-textMuted leading-relaxed">
                                {ABOUT.map((paragraph, i) => (
                                    <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                                ))}
                            </div>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <GetStartedButton to="/palvelut">Palvelumme</GetStartedButton>
                                <GetStartedButton to="/referenssit">Referenssit</GetStartedButton>
                            </div>
                        </div>
                        <div className="relative">
                            <img src="https://picsum.photos/seed/plumber-team/800/600" alt="Ammattitaitoinen tiimi" className="rounded-3xl shadow-2xl w-full" referrerPolicy="no-referrer" />
                            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-dark px-6 py-4 rounded-2xl font-bold shadow-xl">
                                Perustettu {COMPANY.founded}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="py-24 bg-bgLight">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">LVI-palvelut ammattitaidolla</h2>
                        <p className="text-lg text-textMuted">
                            Palvelemme kotitalouksia, taloyhtiöitä ja yrityksiä kaikissa LVI-alan töissä.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {SERVICES_SUMMARY.map((service, i) => (
                            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-3xl overflow-hidden card-hover group">
                                <div className="h-64 overflow-hidden relative">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                                        <service.icon className="text-primary-dark" size={24} />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-textMuted mb-6">{service.description}</p>
                                    <Link to="/palvelut" className="inline-flex items-center gap-2 font-bold text-accent cursor-pointer hover:gap-3 transition-all duration-200">
                                        Kaikki palvelut <ChevronRight size={18} aria-hidden="true" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantees */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Palvelulupaukset</h2>
                        <p className="text-lg text-textMuted">Emme vain lupaa – me takaamme.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {GUARANTEES.map((g, i) => (
                            <motion.div key={g.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-bgLight p-8 rounded-3xl text-center">
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

            {/* Reviews */}
            <section className="py-24 bg-bgLight">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Asiakkaamme suosittelevat</h2>
                            <p className="text-lg text-textMuted">Yli 20 vuotta tyytyväisiä asiakkaita Helsingin alueella.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                            <div className="flex gap-1">
                                {[...Array(Math.floor(COMPANY.googleRating))].map((_, s) => <Star key={s} size={20} className="fill-yellow-400 text-yellow-400" />)}
                                {COMPANY.googleRating % 1 > 0 && <Star size={20} className="text-yellow-400/30" />}
                            </div>
                            <span className="font-bold">{COMPANY.googleRating}/5 Google</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {REVIEWS.map((review, i) => (
                            <motion.div key={review.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-3xl shadow-sm">
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />)}
                                </div>
                                <p className="text-lg italic mb-8">"{review.text}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center font-bold text-primary-dark">{review.name[0]}</div>
                                    <div>
                                        <div className="font-bold">{review.name}</div>
                                        <div className="text-sm text-textMuted">{review.location} · Google</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Info */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-6">Tuntiveloitusperiaatteet</h2>
                    <p className="text-lg text-textMuted mb-6">{PRICING_INFO.intro}</p>
                    <ul className="space-y-3">
                        {PRICING_INFO.details.map((d, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                                <span className="text-textMuted">{d}</span>
                            </li>
                        ))}
                    </ul>
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
            <section className="py-24 bg-primary-dark text-white text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Tarvitsetko <span className="text-primary">putkimiestä?</span></h2>
                    <p className="text-xl text-white/60 mb-10">Ota yhteyttä ja kerro tarpeestasi. Vastaamme arkisin 2 tunnin sisällä. 24H päivystys {COMPANY.phone}.</p>
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
