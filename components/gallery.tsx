import Image from 'next/image'
import { Reveal } from '@/components/reveal'

export function Gallery() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left column: text + small stats */}
          <Reveal className="flex flex-col justify-center lg:col-span-4">
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Portafolio visual
            </p>
            <h2 className="font-serif text-3xl font-medium leading-tight text-balance text-foreground lg:text-4xl">
              El valor de una decisión comienza con conocer el valor real.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Arquitectura, interiores y paisajes que reflejan el tipo de inmuebles con
              los que trabajamos dentro del sector inmobiliario colombiano.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-serif text-4xl text-foreground">2017</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Año de constitución
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl text-foreground">6820</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  Actividad inmobiliaria
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right column: editorial image composition */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-8 lg:gap-5">
            <Reveal className="image-reveal relative col-span-2 aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src="/images/gallery-2.png"
                alt="Panorámica de Medellín entre montañas al atardecer"
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
            <Reveal delay={120} className="image-reveal relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/gallery-1.png"
                alt="Detalle de escalera y madera en interior moderno"
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
            <Reveal delay={220} className="image-reveal relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src="/images/gallery-3.png"
                alt="Cocina moderna con isla de mármol e iluminación cálida"
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
