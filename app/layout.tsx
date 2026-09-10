import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://valory.ao';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Valory, Lda | Contabilidade e Consultoria em Angola',
  description: 'Contabilidade, fiscalidade, consultoria financeira e formação para empresas em Angola. Acrescente Valor ao Seu Negócio.',
  keywords: ['contabilidade em Angola', 'consultoria fiscal', 'consultoria financeira', 'fiscalidade', 'formação on-job', 'Luanda'],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Valory, Lda | Acrescente Valor ao Seu Negócio',
    description: 'Contabilidade, fiscalidade e consultoria para empresas em Angola.',
    url: siteUrl,
    siteName: 'Valory, Lda',
    type: 'website',
    locale: 'pt_AO',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Valory — Acrescente Valor ao Seu Negócio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valory, Lda | Acrescente Valor ao Seu Negócio',
    description: 'Contabilidade, fiscalidade e consultoria para empresas em Angola.',
    images: ['/og.png'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${siteUrl}/#organization`,
  name: 'Valory, Lda',
  url: siteUrl,
  logo: `${siteUrl}/logo-transparent.png`,
  image: `${siteUrl}/og.png`,
  description: 'Empresa angolana especializada em contabilidade, consultoria fiscal, consultoria financeira, recursos humanos e formação On-job.',
  taxID: '5417257656',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua do IFAL, Talatona',
    addressLocality: 'Luanda',
    addressCountry: 'AO',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Angola',
  },
  sameAs: [
    'https://www.instagram.com/valory_consultoria/',
    'https://www.tiktok.com/@valory.consultoria',
  ],
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
 return <html lang="pt-AO"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}/>{children}</body></html>;
}
