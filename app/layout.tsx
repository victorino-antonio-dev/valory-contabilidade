import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Valory, Lda | Contabilidade e Consultoria em Angola',
  description: 'Contabilidade, fiscalidade, consultoria financeira e formação para empresas em Angola. Acrescente Valor ao Seu Negócio.',
  keywords: ['contabilidade em Angola', 'consultoria fiscal', 'consultoria financeira', 'fiscalidade', 'formação on-job', 'Luanda'],
  openGraph: {
    title: 'Valory, Lda | Acrescente Valor ao Seu Negócio',
    description: 'Contabilidade, fiscalidade e consultoria para empresas em Angola.',
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
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){ return <html lang="pt-AO"><body>{children}</body></html>; }
