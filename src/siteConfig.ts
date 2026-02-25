/**
 * ═══════════════════════════════════════════════════════════════════
 * SITE CONFIG — The ONE file you swap per business
 * ═══════════════════════════════════════════════════════════════════
 * 
 * To clone this site for a new prospect:
 * 1. Copy this file
 * 2. Replace the values below with the new company's data
 * 3. Everything else (pages, components, layout) stays the same
 * 
 * ═══════════════════════════════════════════════════════════════════
 */

import type { SiteConfig } from './siteConfig.types';

const siteConfig: SiteConfig = {

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  1. COMPANY IDENTITY                                           │
    // └─────────────────────────────────────────────────────────────────┘
    company: {
        name: 'Helsingin Putkimies Oy',
        shortName: 'HELSINGIN PUTKIMIES',
        tagline: 'Luotettava LVI-kumppanisi vuodesta 2003',
        phone: '09 548 6354',
        phoneLink: '+35895486354',
        email: 'toimisto@helsinginputkimies.fi',
        address: 'Läkkisepäntie 4, 00620 Helsinki',
        logo: 'https://helsinginputkimies.fi/wp-content/uploads/2020/02/logo.png',
        founded: 2003,
        experience: '30+',
        mapUrl: 'https://www.google.com/maps?q=Läkkisepäntie+4+00620+Helsinki',
        googleRating: 3.8,
        googleReviewCount: 24,
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  2. HERO SECTION                                               │
    // └─────────────────────────────────────────────────────────────────┘
    hero: {
        headline: 'Luotettava <span class="text-primary">putkimies</span> Helsingin alueella.',
        subheadline: 'Yli 30 vuoden kokemus LVI-alalta. Palvelemme kotitalouksia ja yrityksiä kellon ympäri, vuoden jokaisena päivänä.',
        badge: '24H Päivystys',
        ctaPrimary: 'Pyydä tarjous',
        ctaSecondary: 'Soita heti:',
        backgroundImage: 'https://picsum.photos/seed/helsinki-plumber/1920/1080',
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  3. ABOUT / COMPANY DESCRIPTION                                │
    // └─────────────────────────────────────────────────────────────────┘
    about: [
        'Helsingin Putkimies Oy on perustettu vuonna 2003. Yrityksemme ydinhenkilöt ovat tehneet yhteistyötä LVI-alalla yli 30 vuotta.',
        'Putkitöissä kokemus on valttia, mutta alan jatkuvasti eläessä on pysyttävä kehityksen mukana. Tämän takaa henkilöstömme jatkuva koulutus ja aito kiinnostuksemme alan kehittämiseen.',
        '<strong>Reklamaatioprosenttimme on alalle epätyypillisesti erittäin pieni.</strong>',
        'Toiminnanohjausjärjestelmämme ansiosta työtilaukset näkyvät kaikille asentajillemme välittömästi, joten seuraavaksi vapautuva voi lähteä nopeasti seuraavaan kohteeseen.',
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  4. TRUST BADGES (hero bottom bar)                             │
    // └─────────────────────────────────────────────────────────────────┘
    trustBadges: [
        '100% Takuutyö',
        'SUPO-selvitetty henkilöstö',
        '3.8/5 Google',
        'Ekologinen kalusto',
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  5. STATS COUNTER                                              │
    // └─────────────────────────────────────────────────────────────────┘
    stats: [
        { value: '30+', label: 'Vuotta kokemusta' },
        { value: '24/7', label: 'Päivystyspalvelu' },
        { value: '100%', label: 'Tyytyväisyystakuu' },
        { value: '2003', label: 'Perustettu' },
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  6. SERVICES                                                   │
    // └─────────────────────────────────────────────────────────────────┘
    services: {
        summary: [
            {
                title: 'Putkiremontit',
                description: 'Kattavat putki- ja linjasaneeraukset uudis- ja saneerauskohteisiin. Käytämme alan uusimpia menetelmiä ja materiaaleja.',
                iconName: 'Wrench',
                image: 'https://picsum.photos/seed/plumbing-reno/800/600',
            },
            {
                title: '24H Päivystys',
                description: 'Hätäpäivystys palvelee vuorokauden ympäri, vuoden jokaisena päivänä. Putkirikot ja kiireelliset korjaukset hoituvat nopeasti.',
                iconName: 'Clock',
                image: 'https://picsum.photos/seed/plumbing-emergency/800/600',
            },
            {
                title: 'Märkätila-asennukset',
                description: 'Kylpyhuoneiden ja pesutilojen putkityöt ammattitaidolla. Suunnittelu, asennus ja viimeistely avaimet käteen -periaatteella.',
                iconName: 'ShowerHead',
                image: 'https://picsum.photos/seed/bathroom-install/800/600',
            },
        ],
        fullList: [
            'LVI-asennukset, -korjaukset ja -huollot',
            'Putkisaneerausurakat',
            'Sekoittajien ja LVI-kalusteiden asennukset',
            'Saniteettikalusteiden asennukset',
            'Vesipostien asennus, korjaus ja huolto',
            'Viemäreiden aukaisut',
            'Viemäreiden kuvaus',
            'Jäätyneiden putkien sulatus (höyry + sähkö)',
            'Lämminvesivaraajien asennukset',
            'Kaukolämpösiirtimien vaihto',
        ],
        pageIntro: 'Helsingin Putkimies Oy palvelee kellon ympäri vuoden jokaisena päivänä kaikissa LVI-alan töissä.',
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  7. PRODUCTS / BRANDS                                          │
    // └─────────────────────────────────────────────────────────────────┘
    products: [
        'Oras sekoittajat',
        'Hans Grohe sekoittajat',
        'Ido posliinit (wc:t, altaat ym.)',
        'Lämminvesivaraajat (esim. Jäspi, Haato)',
        'Kiertovesipumput (Grundfos, Wilo ym.)',
        'Lämpö-, vesi- ja ilmastointiputket (esim. Uponor)',
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  8. GUARANTEES / VALUE PROPOSITIONS                            │
    // └─────────────────────────────────────────────────────────────────┘
    guarantees: [
        {
            title: 'Tyytyväisyystakuu',
            description: 'Jokainen työ tehdään takuutyönä. Emme luovuta ennen kuin olet 100% tyytyväinen lopputulokseen.',
            iconName: 'Shield',
        },
        {
            title: 'Turvatarkastettu henkilöstö',
            description: 'Kaikille asentajillemme on tehty Suojelupoliisin turvallisuusselvitys. Voit luottaa siihen, kuka kotiisi tulee.',
            iconName: 'CheckCircle2',
        },
        {
            title: 'Ekologinen toiminta',
            description: 'Kierrätämme kaiken ylijäävän materiaalin. Huoltoautomme kulkevat uusiutuvalla energialla – tuulisähkö, biokaasu ja biodiesel.',
            iconName: 'Droplets',
        },
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  9. REVIEWS / TESTIMONIALS                                     │
    // └─────────────────────────────────────────────────────────────────┘
    reviews: [
        {
            name: 'Mahutti Korhonen',
            location: 'Helsinki',
            text: 'Kävi tänään putki mies nimeltään KILLERI aivan mahtavaa työtä. Ystävällinen, osaava ja asiallinen. Nopea ja paras palvelu. KIITOS KILLERILLE🙏',
            rating: 5,
        },
        {
            name: 'Olli x',
            location: 'Helsinki',
            text: 'Tilasin useita lyhyitä töitä Helsingin Putkimies Oy:ltä. Palvelu oli erittäin asiallista, työt onnistuivat melko lyhyillä varoajoilla, työn tekijä oli ammattilainen niin työn laadussa kuin asiakaspalvelussa ja hinta oli kohdallaan. Tästä laadusta voisin maksaa enemmänkin. Suosittelen lämpimästi!',
            rating: 5,
        },
        {
            name: 'Tomi V.',
            location: 'Helsinki',
            text: 'Lämminvesivaraajan vuotava varoventtiili käytiin vaihtamassa heti yhteydenottopäivänä. Palvelu oli ystävällistä ja ennen kaikkea nopeaa. Hintakin varsin kohtuullinen.',
            rating: 5,
        },
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  10. REFERENCES / CLIENTS                                      │
    // └─────────────────────────────────────────────────────────────────┘
    references: {
        annual: [
            'Heka Oy',
            'Helsingin kaupunki',
            'Helen Oy',
            'Kirkkonummen kunta',
            'Espoon kaupunki',
            'Espoon seurakuntayhtymä',
            'Kauniaisten kaupunki',
            'Nurmijärven kunta',
            'Vantaan kaupunki',
        ],
        other: [
            'YIT-Rakennus Oy',
            'Realia Isännöinti',
            'Useat eri maiden suurlähetystöt Helsingissä',
            'Seurakunnat',
            'Useita muita eri alojen yrityksiä',
            'Tuhansia tyytyväisiä yksityisasiakkaita',
        ],
        membership: {
            name: 'LVI-Tekniset Urakoitsijat ry',
            description: 'Meidät on hyväksytty LVI-Tekniset urakoitsijat -liiton jäseneksi. Liiton jäsenyritykset täyttävät liiton kriteerit ja noudattavat toiminnassaan alalla yleisesti sovittuja, hyviä toimintatapoja.',
        },
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  11. SERVICE AREAS                                             │
    // └─────────────────────────────────────────────────────────────────┘
    serviceAreas: [
        'Helsinki', 'Espoo', 'Vantaa', 'Kauniainen',
        'Kirkkonummi', 'Nurmijärvi', 'Kerava', 'Tuusula',
    ],

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  12. PRICING                                                   │
    // └─────────────────────────────────────────────────────────────────┘
    pricing: {
        intro: 'Helsingin Putkimies Oy noudattaa tuntiveloituksessa LVI-alalla yleisesti olevaa käytäntöä.',
        details: [
            'Tuntiveloitukseen laskettavaan aikaan lasketaan myös matkoihin ja tavaran hankintaan käytetty aika.',
            'Työ veloitetaan aina alkaneelta tunnilta, pienin veloitus on yksi tunti.',
            'Normaali työaika on arkisin 7:30–15:30.',
            'Lisäksi veloitamme huoltoautomaksun.',
        ],
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  13. COLOR SCHEME                                              │
    // │  Change these to give each site a unique look.                 │
    // │  Presets: green, blue, orange, teal, red (or use custom hex)   │
    // └─────────────────────────────────────────────────────────────────┘
    colors: {
        primary: '#69ff89',      // Main accent (buttons, highlights)
        primaryDark: '#01270a',  // Dark bg (nav, footer, hero overlay)
        accent: '#5803ad',       // Secondary accent
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  14. SEO / META                                                │
    // └─────────────────────────────────────────────────────────────────┘
    seo: {
        title: 'Helsingin Putkimies Oy | Luotettava LVI-kumppani vuodesta 2003',
        description: 'Helsingin Putkimies Oy – Luotettava LVI-kumppanisi vuodesta 2003. 24H päivystys, putkiremontit, märkätilat. Soita 09-548 6354.',
        themeColor: '#01270a',
    },

    // ┌─────────────────────────────────────────────────────────────────┐
    // │  15. NAVIGATION                                                │
    // │  Usually the same for all sites — only change if needed.       │
    // └─────────────────────────────────────────────────────────────────┘
    navigation: [
        { label: 'Etusivu', path: '/' },
        { label: 'Palvelut', path: '/palvelut' },
        { label: 'Referenssit', path: '/referenssit' },
        { label: 'Yhteystiedot', path: '/yhteystiedot' },
        { label: 'Tilauslomake', path: '/tilaus' },
    ],
};

export default siteConfig;
