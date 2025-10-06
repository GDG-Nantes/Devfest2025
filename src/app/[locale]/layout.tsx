import { bodyClass, htmlClass, MuiProvider } from '@/layout/theme';
import { Footer } from '@/layout/footer/footer';
import { Navbar } from '@/layout/navbar/navbar';
import { CommonParams, MyComponent } from '@/types';
import { getTranslation } from '@/i18n/i18n';
import i18nConfig from '@/i18n/i18nConfig';
import { Analytics } from '@/analytics';
import { Metadata } from 'next';
import { jsonLd } from '@/jsonLd';

const URLSite = 'https://devfest2025.gdgnantes.com';

export async function generateMetadata({
  params,
}: CommonParams): Promise<Metadata> {
  const t = await getTranslation(params);
  return {
    title: 'Devfest Nantes',
    description: t('site.description'),
    authors: [
      {
        name: 'GDG Nantes',
        url: 'https://gdgnantes.com',
      },
    ],
    metadataBase: new URL(URLSite),
    alternates: {
      canonical: URLSite,
      languages: {
        en: '/en',
        fr: '/',
      },
    },
    applicationName: 'Devfest Nantes 2025',
    keywords: ['Devfest', 'GDG Nantes', 'Conference', 'Tech', 'Developers', 'Nantes'],
    themeColor: '#111827',
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-video-preview': -1,
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      url: URLSite,
      title: 'Devfest Nantes',
      description: t('site.description'),
      siteName: 'Devfest Nantes',
      locale: params?.locale === 'en' ? 'en_US' : 'fr_FR',
      images: [
        {
          url: '/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Devfest Nantes',
        },
      ],
    },
    twitter: {
      site: '@devfestnantes',
      card: 'summary_large_image',
      title: 'Devfest Nantes',
      description: t('site.description'),
      images: ['/twitter-image.jpg'],
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      viewportFit: 'cover',
      themeColor: '#111827',
    },
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const RootLayout: MyComponent = async ({ children, params }) => {
  const _params = await params;
  const locale = _params?.locale || i18nConfig.defaultLocale;

  return (
    <html lang={locale} className={htmlClass}>
      <body className={bodyClass}>
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .skip-link { position: absolute; left: -10000px; top: auto; background: #111827; color: #ffffff; padding: 8px 12px; z-index: 1000; }
            .skip-link:focus { left: 8px; top: 8px; }
          `,
          }}
        />
        {/* Skip to content for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <MuiProvider>
          <nav aria-label='Primary'>
            <Navbar params={params} />
          </nav>
          <main id='main-content' role='main'>
            {children}
          </main>
          <footer role='contentinfo'>
            <Footer params={params} />
          </footer>
        </MuiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
