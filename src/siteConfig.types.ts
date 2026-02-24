/**
 * Type definitions for siteConfig.ts
 * These define the shape of every per-business config.
 */

export interface SiteConfig {
    company: {
        name: string;
        shortName: string;
        tagline: string;
        phone: string;
        phoneLink: string;
        email: string;
        address: string;
        logo: string;
        founded: number;
        experience: string;
        mapUrl: string;
        googleRating: number;
        googleReviewCount: number;
    };

    hero: {
        headline: string;
        subheadline: string;
        badge: string;
        ctaPrimary: string;
        ctaSecondary: string;
        backgroundImage: string;
    };

    about: string[];

    trustBadges: string[];

    stats: Array<{ value: string; label: string }>;

    services: {
        summary: Array<{
            title: string;
            description: string;
            iconName: string;
            image: string;
        }>;
        fullList: string[];
        pageIntro: string;
    };

    products: string[];

    guarantees: Array<{
        title: string;
        description: string;
        iconName: string;
    }>;

    reviews: Array<{
        name: string;
        location: string;
        text: string;
        rating: number;
    }>;

    references: {
        annual: string[];
        other: string[];
        membership?: {
            name: string;
            description: string;
        };
    };

    serviceAreas: string[];

    pricing: {
        intro: string;
        details: string[];
    };

    colors: {
        primary: string;
        primaryDark: string;
        accent: string;
    };

    seo: {
        title: string;
        description: string;
        themeColor: string;
    };

    navigation: Array<{
        label: string;
        path: string;
    }>;
}
