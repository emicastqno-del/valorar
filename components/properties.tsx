import Image from 'next/image'
import { MapPin, ArrowUpRight, Building2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { properties, whatsappHref, WASI_SITE_URL } from '@/lib/company'
import { getWasiProperties, type WasiProperty } from '@/lib/wasi'

type Card = {
  key: string
  image: string | null
  remoteImage: boolean
  alt: string
  badge: string
  region: string
  title: string
  price?: string
  features: string[]
  href: string
  cta: string
}

function fromWasi(p: WasiProperty): Card {
  const features: string[] = []
  if (Number(p.bedrooms) > 0) features.push(`${p.bedrooms} hab.`)
  if (Number(p.bathrooms) > 0) features.push(`${p.bathrooms} baños`)
  if (Number(p.garages) > 0) features.push(`${p.garages} garaje${Number(p.garages) > 1 ? 's' : ''}`)
  if (Number(p.area) > 0) {
    const unit = p.areaUnit.toUpperCase() === 'M2' || !p.areaUnit ? 'm²' : p.areaUnit
    features.push(`${p.area} ${unit}`)
  }

  const place = [p.city, p.region].filter(Boolean).join(', ')

  return {
    key: `wasi-${p.id}`,
    image: p.image,
    remoteImage: true,
    alt: p.title,
    badge: 'En venta',
    region: place,
    title: p.title,
    price: p.salePrice,
    features,
    href: whatsappHref(
      `Hola, me interesa el inmueble "${p.title}"${p.city ? ` en ${p.city}` : ''} (ref. ${p.id}). ¿Me pueden dar más información?`,
    ),
    cta: 'Consultar propiedad',
  }
}

function fromStatic(p: (typeof properties)[number]): Card {
  return {
    key: p.location,
    image: p.image,
    remoteImage: false,
    alt: `${p.type} en ${p.location}, ${p.region}`,
    badge: p.type,
    region: p.region,
    title: p.location,
    features: p.features,
    href: '#contacto',
    cta: 'Ver propiedad',
  }
}

export async function Properties() {
  const wasi = await getWasiProperties(5)
  const cards: Card[] = wasi ? wasi.map(fromWasi) : properties.slice(0, 5).map(fromStatic)

  const moreHref =
    WASI_SITE_URL ||
    whatsappHref('Hola, me gustaría conocer más inmuebles disponibles con Valorar Eficaz.')

  return (
    <section id="propiedades" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Propiedades
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
            Encuentre oportunidades inmobiliarias.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={card.key}
              delay={(i % 3) * 100}
              className="group relative flex flex-col overflow-hidden rounded-sm bg-navy"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-navy">
                {card.image &&
                  (card.remoteImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={card.image}
                      alt={card.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ))}
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-sm bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold-foreground">
                  {card.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-1.5 text-gold">
                  <MapPin className="h-4 w-4 flex-none" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-widest">{card.region}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl text-white">{card.title}</h3>
                {card.price && (
                  <p className="mt-2 text-lg font-semibold text-gold">{card.price}</p>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {card.features.map((f) => (
                    <li
                      key={f}
                      className="rounded-sm border border-white/15 px-2.5 py-1 text-[11px] text-white/70"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={card.href}
                  {...(card.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[12px] font-semibold uppercase tracking-widest text-white transition-colors hover:text-gold"
                >
                  {card.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}

          {/* Tarjeta 6: ver más inmuebles */}
          <Reveal
            delay={(cards.length % 3) * 100}
            className="group flex min-h-[22rem] flex-col items-center justify-center rounded-sm border border-gold/40 bg-navy p-8 text-center transition-colors duration-300 hover:border-gold"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
              <Building2 className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-white">Conozca más inmuebles</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
              Explore todo nuestro portafolio de propiedades disponibles.
            </p>
            <a
              href={moreHref}
              {...(moreHref.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="mt-7 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-[12px] font-semibold uppercase tracking-widest text-gold-foreground transition-all duration-300 hover:brightness-105"
            >
              Ver todos los inmuebles
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Las propiedades mostradas son de referencia y su disponibilidad puede variar.
            Consulte con el equipo de Valorar Eficaz por la información actualizada de cada
            inmueble.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
