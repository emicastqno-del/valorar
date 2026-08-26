import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { TrustBar } from '@/components/trust-bar'
import { About } from '@/components/about'
import { Leadership } from '@/components/leadership'
import { AppraisalSection } from '@/components/appraisal-section'
import { UseCases } from '@/components/use-cases'
import { Services } from '@/components/services'
import { Properties } from '@/components/properties'
import { Gallery } from '@/components/gallery'
import { WhyUs } from '@/components/why-us'
import { Process } from '@/components/process'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { FinalCta } from '@/components/final-cta'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { PageEffects } from '@/components/page-effects'
import { company, faqs } from '@/lib/company'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: company.name,
  description:
    'Servicios relacionados con el sector inmobiliario y valoración de inmuebles en Colombia.',
  url: company.website,
  areaServed: 'Colombia',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellín',
    addressRegion: 'Antioquia',
    addressCountry: 'CO',
  },
  taxID: company.nit,
  foundingDate: '2017-06-23',
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageEffects />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TrustBar />
        <About />
        <Leadership />
        <AppraisalSection />
        <UseCases />
        <Services />
        <Properties />
        <Gallery />
        <WhyUs />
        <Process />
        <Faq />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
